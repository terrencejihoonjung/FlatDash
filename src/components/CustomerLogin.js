import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FormControl,
    FormLabel,
    Input,
    Button,
    Box } from "@chakra-ui/react"

function CustomerLogin({ setLoginId }) {

    const [emailInput, setEmailInput] = useState("")
    const navigate = useNavigate()
    // navigate is the v6 of useHistory hook 

    function handleEmailInput(e) {
        setEmailInput(e.target.value)
    }

    function handleLogIn() {
        fetch("http://localhost:9292/customer_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: emailInput})
        })
            .then(r => r.json())
            .then(customerId => {
                setLoginId(customerId)
                navigate(`/customer/${customerId}`)
            })
    }

    return (
        <Box
        backgroundColor=""
        height="100vh"
        >
            <FormControl
            id="loginForm"
            margin="2rem 2rem 2rem 2rem"
            isRequired
            >
                <FormLabel htmlFor="email" marginTop="1rem" >Customer Email Address:</FormLabel>
                <Input
                id="email"
                onChange={handleEmailInput}
                value={emailInput}
                placeholder="Email Address" />
            </FormControl>
            <Button marginLeft="4rem" onClick={handleLogIn} >
                Login
            </Button>
        </Box>
    )
}

export default CustomerLogin