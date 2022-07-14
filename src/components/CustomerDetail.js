import { Box, Flex } from "@chakra-ui/react";
import React , { useEffect , useState } from "react";
import OrderCard from "./OrderCard"
import DashboardColumn from "./DashboardColumn"

function CustomerDetail({ id , onDeleteOrder }) {
  
  const [ customer , setCustomer ] = useState({})
  const [ allOrderOfCustomer , setAllOrderOfCustomer ] = useState([])
  
  useEffect( ()=> {
    fetch(`http://localhost:9292/customers/${id}`)
    .then(response => response.json())
    .then(object => {
      setCustomer(object)
      setAllOrderOfCustomer(object.orders)
      // console.log(object)
      // console.log(object.orders)
    })
    } , [])

  return (
    <Box>
      {customer["email_address"]}

      <ul>{allOrderOfCustomer.map(order => {
         return <li key={order.id}>{order.id}</li> 
      })}</ul>
    </Box>
  )
}

export default CustomerDetail