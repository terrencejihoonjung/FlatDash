import { Grid } from "@chakra-ui/react"
import OrderForm from "./OrderForm"
import OrderMenu from "./OrderMenu"

function CreateOrder() {
  return(
    <Grid>
      <OrderForm />
      <OrderMenu />
    </Grid>
  )
}

export default CreateOrder