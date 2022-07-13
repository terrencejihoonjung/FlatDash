import { Flex, FormControl, FormLabel, Input, Checkbox, Button, FormHelperText} from "@chakra-ui/react"
import { useState } from "react"

function CreateOrder() {
  const [form, setForm] = useState(initialForm)
  const initialForm= {
    name: "",
    email: "",
    phone: "",
    status: "Queued",
    delivery: false
  }

  return (
    <Flex>
      <FormControl id="form">
        <FormLabel htmlFor="name">Customer Name:</FormLabel>
        <FormLabel htmlFor="email">Email Address:</FormLabel>
        <FormLabel htmlFor="phone">Phone #:</FormLabel>
        <FormLabel htmlFor="delivery">Delivery?</FormLabel>
        <Checkbox></Checkbox>
      </FormControl>
      Email Address

      Phone Number

      Delivery?

      {/* (St Address) */}
    </Flex>
  )
}

export default CreateOrder