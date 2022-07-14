import { FormControl,
    FormLabel,
    Input,
    Button,
    Box } from "@chakra-ui/react"
  import { useState } from "react"

function OrderForm() {
    
  const initialForm= {
    name: "",
    email: "",
    phone: ""
  }

  const [form, setForm] = useState(initialForm)

  const handleInput = e => {
    const { field, input } = e.target
    setForm(currentForm => ({ ...currentForm, [field]: input }))
  }

  // const isError check if field is complete

  const handleSubmit = e => {
    e.preventDefault()

    const customerObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"},
      body: JSON.stringify(
        {name: form.name,
        email: form.email,
        phone: form.phone}
        )
    }
    
    /*fetch(http://localhost:9292/customer, customerObj)*/

    setForm(initialForm)
  }

  return (
    <Box>
      <FormControl
      id="customerForm"
      margin="2rem 2rem 2rem 2rem"
      isRequired >
        <FormLabel htmlFor="name" marginTop="1rem" >Customer Name:</FormLabel>
        <Input
        id="name"
        onChange={handleInput}
        value={form.name}
        placeholder="Full Name" />
        <FormLabel htmlFor="email" marginTop="1rem" >Email Address:</FormLabel>
        <Input
        id="email"
        type="email"
        onChange={handleInput}
        value={form.email}
        placeholder="example@contoso.com" />
        <FormLabel
        htmlFor="phone"
        marginTop="1rem"
        optionalIndicator >Phone #:</FormLabel>
        <Input
        id="phone"
        type='phone'
        onChange={handleInput}
        value={form.phone}
        placeholder='123-456-7890' />
      </FormControl>
        <Button marginLeft="4rem" onClick={handleSubmit} >
            Create Order
        </Button>
    </Box>
  )
}

export default OrderForm