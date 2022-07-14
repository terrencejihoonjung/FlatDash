import { FormControl,
        FormLabel,
        Input,
        Button,
        Box,
        FormHelperText,
        FormErrorMessage } from "@chakra-ui/react"
  import { useState } from "react"

function OrderForm() {
    
  const initialForm= {
    name: "",
    email: "",
    phone: ""
  }

  const [form, setForm] = useState(initialForm)

  const handleInput = e => {
    const { id, value } = e.target
    setForm(currentForm => ({ ...currentForm, [id]: value }))
    //parentheses needed around curlies to escape explicit return expected
  }

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
    
    /*fetch(http://localhost:9292/customers, customerPOSTObj)*/

    setForm(initialForm)
  }

  const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const isError = !(regExEmail.test(form.email)||form.email==="")

  return (
    <Box>
      <FormControl
      id="customerForm"
      margin="2rem 2rem 2rem 2rem"
      isInvalid={isError}
       >
        <FormLabel htmlFor="name" marginTop="1rem" >Customer Name:</FormLabel>
        <Input
        id="name"
        onChange={handleInput}
        value={form.name}
        placeholder="Full Name"
        width="auto" />
        <FormLabel htmlFor="email" marginTop="1rem" >Email Address:</FormLabel>
        <Input
        id="email"
        type="email"
        onChange={handleInput}
        value={form.email}
        placeholder="example@contoso.com"
        width="auto" />
        {!isError ?
          (<FormHelperText>
            Email is required
          </FormHelperText>) :
          (<FormErrorMessage>
            Please enter a valid address  
          </FormErrorMessage>)}
        <FormLabel
        htmlFor="phone"
        marginTop="1rem"
        optionalIndicator >
          Phone #:</FormLabel>
        <Input
        id="phone"
        type='phone'
        onChange={handleInput}
        value={form.phone}
        placeholder='123-456-7890'
        width="auto" />
      </FormControl>
        <Button marginLeft="4rem" onClick={handleSubmit} >
            Create Order
        </Button>
    </Box>
  )
}

export default OrderForm