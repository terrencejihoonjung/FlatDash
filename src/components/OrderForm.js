import { FormControl,
        FormLabel,
        Input,
        Button,
        Flex,
        FormHelperText,
        FormErrorMessage,
        Checkbox,
        Box } from "@chakra-ui/react"
  import { useState } from "react"

function OrderForm() {
    
  const initialForm= {
    name: "",
    email: "",
    phone: "",
    delivery: true
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
      <FormControl display="flex"
      id="customerForm"
      margin="2rem 2rem 2rem 2rem"
      isInvalid={isError}
      justifyContent="start"
       >
        <Box
        marginRight="2rem">
          <FormLabel htmlFor="name" >Customer Name:</FormLabel>
          <Input
          id="name"
          onChange={handleInput}
          value={form.name}
          placeholder="Full Name" />
        </Box>
        <Box
        marginRight="2rem">
          <FormLabel htmlFor="email" >Email Address:</FormLabel>
          <Input
          id="email"
          type="email"
          onChange={handleInput}
          value={form.email}
          placeholder="example@contoso.com" />
          {!isError ?
            (<FormHelperText>
              Email is required
            </FormHelperText>) :
            (<FormErrorMessage>
              Please enter a valid address  
            </FormErrorMessage>)}
        </Box>
        <Box
        marginRight="2rem">
          <FormLabel
          htmlFor="phone"
          optionalIndicator >
            Phone #:</FormLabel>
          <Input
          id="phone"
          type='phone'
          onChange={handleInput}
          value={form.phone}
          placeholder='123-456-7890' />
        </Box>
        <Box
        marginRight="2rem">
          <FormLabel
            htmlFor="delivery" 
              >Delivery or Pick-up?</FormLabel>
            <Checkbox
            marginTop="0.5rem"
            id="delivery"
            onChange={handleInput}
            value={form.delivery}
            defaultChecked >
                Delivery
            </Checkbox>
        </Box>
        <Button 
        marginTop="1.82rem" 
        onClick={handleSubmit} 
        width="12rem">
            Create Order
        </Button>
      </FormControl>
  )
}

export default OrderForm