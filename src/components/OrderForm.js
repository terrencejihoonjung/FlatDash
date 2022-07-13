import { Flex,
    FormControl,
    FormLabel,
    Checkbox,
    Input,
    Button,
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
    const { field, input } = e.target
    setForm(currentForm => ({ ...currentForm, [field]: input }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    //fetch backendURL, POST

    setForm(initialForm)
  }

  return (
    <Box>
      <FormControl id="form" margin="2rem">
        <FormLabel htmlFor="name" marginTop="1rem" >Customer Name:</FormLabel>
        <Input
        id="name"
        onChange={handleInput}
        value={form.name}
        placeholder="FirstName LastName" />
        <FormLabel htmlFor="email" marginTop="1rem" >Email Address:</FormLabel>
        <Input
        id="email"
        type="email"
        onChange={handleInput}
        value={form.email}
        placeholder="example@contoso.com" />
        <FormLabel htmlFor="phone" marginTop="1rem" >Phone #:</FormLabel>
        <Input
        id="phone"
        type='phone'
        onChange={handleInput}
        value={form.phone}
        placeholder='123-456-7890' />
        <FormLabel htmlFor="delivery" marginTop="1rem" >Delivery or Pick-up?</FormLabel>
        <Checkbox
        id="delivery"
        onChange={handleInput}
        value={form.delivery} >
          Delivery
        </Checkbox>
      </FormControl>
        <Button>
            Submit
        </Button>
    </Box>
  )
}

export default OrderForm