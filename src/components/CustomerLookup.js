import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormControl,
        FormLabel,
        Input,
        Button,
        Box,
        FormErrorMessage,
        FormHelperText } from "@chakra-ui/react"

function CustomerLookup({ setLoginId }) {

    const [emailInput, setEmailInput] = useState("")
    const navigate = useNavigate()
    // navigate is the v6 of useHistory hook 

    function handleEmailInput(e) {
        setEmailInput(e.target.value)
    }

    const handleLookup = () => {
        fetch(`http://localhost:9292/customer_lookup/${emailInput}`)
        .then(r => r.json())
        .then(id => {
            setLoginId(id)
            navigate(`/customer/${id}`)
        })
    }

    const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isError = !(regExEmail.test(emailInput)||emailInput==="")

    return (
        <Box>
            <FormControl
            id="loginForm"
            margin="2rem 2rem 1rem"
            isInvalid={isError} >
                <FormLabel
                htmlFor="email"
                marginTop="1rem" >
                    Customer Email Address:</FormLabel>
                <Input
                id="email"
                onChange={handleEmailInput}
                value={emailInput}
                placeholder="Email Address"
                width="40%" />
                {!isError ?
                (<FormHelperText>
                    Email is required
                </FormHelperText>) :
                (<FormErrorMessage>
                    Please enter a valid address  
                </FormErrorMessage>)}
            </FormControl>
            <Button marginLeft="4rem" onClick={handleLookup} >
                Lookup
            </Button>
        </Box>
    )
}

export default CustomerLookup