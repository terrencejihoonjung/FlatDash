import { Flex } from "@chakra-ui/react";
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
  } , [ params.id ])

  return (
    <>
      <div>Id: {order.id}</div>
      <div>Status: {order.status}</div>
      <div>delivery: {order.delivery}</div>
      <div>Created: {order.created_at}</div>
      <div>Updated: {order.updated_at}</div>
      <div>Total price: {order.total_price}</div>

       

      <div>Customer id: {customer.id}</div>
      <div>Customer name: {customer.name}</div>
      <div>Customer email: {customer.email_address}</div>
      <div>Customer phone: {customer.phone_number}</div>

      <ol>What are in this order: {dishes.map( dish => {
        return <li key={dish.menu_item}>{dish.quantity} of {dish.menu_item}</li>
      })
      }</ol>

    </>
  )
}

export default OrderDetail