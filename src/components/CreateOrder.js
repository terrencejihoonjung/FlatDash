import { Grid, GridItem, Heading } from "@chakra-ui/react"
import OrderForm from "./OrderForm"
import OrderMenu from "./OrderMenu"
import CurrentOrder from "./CurrentOrder"
import { useState } from "react"

function CreateOrder() {

const [currentOrders, setCurrentOrders] = useState([])
const [menuItems, setMenuItems] = useState([])

const onClickAdd = (addedOrder) => {
  setCurrentOrders(currentOrders => [...currentOrders, addedOrder])
}

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
        <OrderForm />
      </GridItem>
      
      <GridItem area={"menu"}>
        <Heading>Select Menu Items</Heading>
        <OrderMenu clickHandler={onClickAdd} setMenuItems={setMenuItems} menuItems={menuItems}/>
      </GridItem>
      
      <GridItem area={"order"}>
        <Heading>Current Order</Heading>
        <CurrentOrder clickHandler={onClickDelete} currentOrders={currentOrders} setCurrentOrders={setCurrentOrders} />
      </GridItem>
 
    </Grid>
  )
}

export default CreateOrder