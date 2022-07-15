import { Grid, GridItem, Heading } from "@chakra-ui/react"
import OrderForm from "./OrderForm"
import OrderMenu from "./OrderMenu"
import CurrentOrder from "./CurrentOrder"
import { useState } from "react"

function CreateOrder() {

  const [dishesToAdd, setDishesToAdd] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [qtys, setQtys] = useState({})
  // const qtys={}

  //click for MenuCard
  const onClickAdd = (addedItem) => {
    console.log("clicked menu item!")
    const id = addedItem.id
    let temp = {...qtys}

    if (!dishesToAdd.includes(addedItem)) {
      console.log("dishes:" + dishesToAdd)
      setDishesToAdd(dishesToAdd => [...dishesToAdd, addedItem])
      temp[id] = 1
      console.log("tempd[id]: " + temp[id])
      setQtys(temp)
    }

    else {
      console.log("tempd[id]: " + temp[id])
      temp[id] += 1
      setQtys(temp[id])
      console.log("temp: " + temp)
      console.log("tempd[id]: " + temp[id])
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
    // .then(r => r.json())
    // .then(data => console.log(data))

    //reset dishesToAdd and quantities
    setDishesToAdd([])
    setQtys({})
  }

  //click for CurrentOrderCard
  const onClickDelete = () => {

  }

  return(
    <Grid
    templateAreas={
      `"form form"
      "menu order"`}
      gridTemplateRows={"1fr 4fr"}
      gridTemplateColumns={"1fr 1fr"}>
      
      <GridItem area={"form"}>
        <Heading>Customer Info</Heading>
        <OrderForm onSubmit={onSubmit}/>
      </GridItem>
      
      <GridItem area={"menu"}>
        <Heading>Select Menu Items</Heading>
        <OrderMenu clickHandler={onClickAdd} setMenuItems={setMenuItems} menuItems={menuItems}/>
      </GridItem>
      
      <GridItem area={"order"}>
        <Heading>Current Order</Heading>
        <CurrentOrder clickHandler={onClickDelete} dishesToAdd={dishesToAdd} setDishesToAdd={setDishesToAdd} />
      </GridItem>
 
    </Grid>
  )
}

export default CreateOrder