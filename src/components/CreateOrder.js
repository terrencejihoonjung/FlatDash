import { Grid, GridItem, Heading } from "@chakra-ui/react"
import OrderForm from "./OrderForm"
import OrderMenu from "./OrderMenu"
import { useState } from "react"

function CreateOrder() {

const [order, setOrder] = useState([])

const onClickAdd = () => {

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
        <OrderMenu clickHandler={onClickAdd}/>
      </GridItem>
      
      <GridItem area={"order"}>
        <Heading>Current Order</Heading>
        <OrderMenu clickHandler={onClickDelete}/>
      </GridItem>
 
    </Grid>
  )
}

export default CreateOrder