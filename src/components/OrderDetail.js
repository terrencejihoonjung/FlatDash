import { Box } from "@chakra-ui/react";
import React , { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

function OrderDetail() {
  const [ order , setOrder ] = useState({})
  const [ dishes , setDishes ] = useState( [] )
  const [ customer , setCustomer ] = useState({})
  let params = useParams()
  
  useEffect( ()=> {
    fetch(`http://localhost:9292/orders/${params.id}`)
    .then(response => response.json())
    .then(object => {
      setOrder(object)
      setCustomer(object.customer)
      setDishes(object.dishes)
    })
  } , [])

  return (
    <Box marginLeft="2rem" marginTop="1rem" >
      <div>ID: {order.id}</div>
      <div>Status: {order.status}</div>
      <div>delivery: {order.delivery ? "Yes" : "No" }</div>
      <div>Created: {order.created_at}</div>
      <div>Updated: {order.updated_at}</div>
      <div>Total price: {order.total_price}</div>

      <div>Customer ID: {customer.id}</div>
      <div>Customer name: {customer.name}</div>
      <div>Customer email: {customer.email_address}</div>
      <div>Customer phone: {customer.phone_number}</div>

      <ul> <b>Order items:</b> {dishes.map( dish => {
        return <li key={dish.menu_item}>{dish.quantity} of {dish.menu_item}</li>
      })
      }</ul>

    </Box>
  )
}

export default OrderDetail