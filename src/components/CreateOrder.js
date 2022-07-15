import { Grid, GridItem, Heading } from "@chakra-ui/react"
import OrderForm from "./OrderForm"
import OrderMenu from "./OrderMenu"
import CurrentOrder from "./CurrentOrder"
import { useState } from "react"

function CreateOrder() {

  const [dishesToAdd, setDishesToAdd] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [qtys, setQtys] = useState({})

  //click for MenuCard
  const onClickAdd = (addedItem) => {
    const id = addedItem.id
    let temp = {...qtys}

    if (menuItems.filter( item => item.id === addedItem.id)[0].inventory > 0) {
      if (!dishesToAdd.includes(addedItem)) {
        setDishesToAdd(dishesToAdd => [...dishesToAdd, addedItem])
        temp[id] = 1
        setQtys(temp)
      } else {
        temp[id] += 1
        setQtys(temp)
      }
      menuItems.forEach(item => {
        if (item.id === addedItem.id) {
          item.inventory -= 1
        }
      })
    }
  }

  const onSubmit = (name, email, phone, delivery) => {
    const customerObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"},
      body: JSON.stringify(
        {name: name,
        email: email,
        phone: phone,
        delivery: delivery,
        dishesToAdd: dishesToAdd,
        quantity: qtys}
        )
    }
    
    fetch("http://localhost:9292/order", customerObj)
    .then(r => r.json())
    .then(data => console.log(data))

    //reset dishesToAdd and quantities
    setDishesToAdd([])
    setQtys({})
  }

  //click for CurrentOrderCard
  const onClickDelete = (item) => {
    setDishesToAdd(dishesToAdd => dishesToAdd.filter(dish => dish.id !== item.id))
    const temp = {...qtys}
    temp[item.id] = 0
    setQtys(temp)
    fetch(`http://localhost:9292/menu_items/${item.id}`)
      .then(r => r.json())
      .then(data => {
        setMenuItems(menuItems.map( menuItem => {
          if (item.id === menuItem.id) {
            menuItem.inventory = data.inventory
          }
          return menuItem
          })
        )
      })      
  }

  const calcTotal = () => {
    let total = 0
    for (let key in qtys) {
      total += (menuItems[key-1].price * qtys[key])
    }
    return Math.round(100*total)/100
  }

  return(
    <Grid
    templateAreas={
      `"form form"
      "menu order"`}
      gridTemplateRows={"1fr 4fr"}
      gridTemplateColumns={"1fr 1fr"}
      marginLeft="2rem"
      marginTop="1rem">
      
      <GridItem area={"form"}>
        <Heading>Customer Info</Heading>
        <OrderForm onSubmit={onSubmit}/>
      </GridItem>
      
      <GridItem area={"menu"}>
        <Heading>Select Menu Items:</Heading>
        <OrderMenu clickHandler={onClickAdd} setMenuItems={setMenuItems} menuItems={menuItems}/>
      </GridItem>
      
      <GridItem area={"order"}>
        <Heading>Current Order: ${calcTotal()}</Heading>
        <CurrentOrder qtys={qtys} clickHandler={onClickDelete} dishesToAdd={dishesToAdd} setDishesToAdd={setDishesToAdd} />
      </GridItem>
 
    </Grid>
  )
}

export default CreateOrder