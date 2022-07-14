import { Box, Flex } from "@chakra-ui/react";
import React , { useEffect , useState } from "react";
import OrderCard from "./OrderCard"
import DashboardColumn from "./DashboardColumn"
import { useParams } from "react-router-dom";

function CustomerDetail({ onDeleteOrder }) {
  
  const [ customer , setCustomer ] = useState({})
  const [ allOrderOfCustomer , setAllOrderOfCustomer ] = useState([])
  let params = useParams()

  useEffect( ()=> {
    fetch(`http://localhost:9292/customers/${params.id}`)
    .then(response => response.json())
    .then(object => {
      console.log(object.orders)
      setCustomer(object)
      setAllOrderOfCustomer(object.orders)
    })
    } , [])

  return (
    <Box>
      <h1>{customer.name}'s Profile</h1>

      {customer["email_address"]}

      <DashboardColumn
          title="All Orders Of This Customer"
          orders={allOrderOfCustomer} 
          onDeleteOrder={onDeleteOrder} />
    </Box>
  )
}

export default CustomerDetail