import { Box, Heading } from "@chakra-ui/react";
import React , { useEffect , useState } from "react";
import OrderCard from "./OrderCard"
import DashboardColumn from "./DashboardColumn"
import { useParams } from "react-router-dom";

function CustomerDetail({ onDeleteOrder , onMoveOrder }) {
  
  const [ customer , setCustomer ] = useState({})
  const [ allOrderOfCustomer , setAllOrderOfCustomer ] = useState([])
  let params = useParams()

  useEffect( ()=> {
    fetch(`http://localhost:9292/customers/${params.id}`)
    .then(response => response.json())
    .then(object => {
      setCustomer(object)
      setAllOrderOfCustomer(object.orders)
    })
    } , [])

  function onDeleteOrderInCustomerDetail(deletedOrder) {
    onDeleteOrder(deletedOrder)
    setAllOrderOfCustomer( allOrderOfCustomer.filter( order => order.id !== deletedOrder.id ) )
  }

  return (
    <Box marginLeft="2rem">
      <Heading fontSize="lg" >{customer.name}'s Profile</Heading>
      <ul >
        <li>Id: {customer.id}</li>
        <li>Email: {customer["email_address"]}</li>
        <li>Phone number: {customer["phone_number"]}</li>
        <li>Favourite dish: {customer["favorite_dish"]}</li>
        <li>Total spent: {Math.round(100*customer["total_spent"])/100}</li>
      </ul>      

      <DashboardColumn
          title="All Orders Of This Customer"
          orders={allOrderOfCustomer} 
          onDeleteOrder={onDeleteOrderInCustomerDetail}
          onMoveOrder={onMoveOrder}
          deletable={false} />
    </Box>
  )
}

export default CustomerDetail