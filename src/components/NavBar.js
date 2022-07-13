import { Heading, Box, Link } from "@chakra-ui/react"
import { Link as Go } from "react-router-dom"

function NavBar() {
  return (
    <Box 
      height="7rem"
      backgroundColor="#fbf7ed"
    >
      <Heading
      fontSize="2rem"
      padding="1rem"
      color="#004c3f"
      >
        FlatDash Order Management System
      </Heading>

      <Go to="/" >
        <Link 
          margin="1rem"
          fontWeight="bold"
        >
          Order Dashboard
        </Link>
      </Go>
      <Go to="/create" >
        <Link 
          margin="1rem"
          fontWeight="bold"
        >
          Create Order
        </Link>
      </Go>
      <Go to="/customer/:id" >
        <Link 
          margin="1rem"
          fontWeight="bold"
        >
          Customer Info
        </Link>
      </Go>

    </Box>
  )
}

export default NavBar