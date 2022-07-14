import { Grid, GridItem, Heading } from "@chakra-ui/react"
import OrderForm from "./OrderForm"
import OrderMenu from "./OrderMenu"

function CreateOrder() {
  return(
    <Grid
    templateAreas={
      `"form menu"
      "order menu"`}
      gridTemplateRows={"2fr 3fr"}
      gridTemplateColumns={"1fr 1fr"}>
      <GridItem area={"form"}>
        <Heading>Customer Info</Heading>
        <OrderForm />
      </GridItem>
      <GridItem area={"menu"}>
      <Heading>Select Menu Items</Heading>
      <OrderMenu />
      </GridItem>
      <GridItem area={"order"}>
      <Heading>Current Order</Heading>
      </GridItem>
 
    </Grid>
  )
}

export default CreateOrder