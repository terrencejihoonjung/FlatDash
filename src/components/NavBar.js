import { Heading, Box, Link } from "@chakra-ui/react"
import { Link as Go } from "react-router-dom"

function NavBar() {
  return (
    <Box 
    height="7rem"
    backgroundColor="grey"
    >
      <Heading
      fontSize="2rem"
      padding="1rem"
      >
        FlatDash Order Management System
      </Heading>

      <Go to="/" >
        <Link margin="1rem" >
          Order Dashboard
        </Link>
      </Go>
      <Go to="/create" >
        <Link margin="1rem">
          Create Order
        </Link>
      </Go>
      <Go to="/customer/:id" >
        <Link margin="1rem">
          Customer Info
        </Link>
      </Go>

    </Box>
  )
}

export default NavBar