import { Flex } from "@chakra-ui/react"
import DashboardColumn from "./DashboardColumn"
import { useState , useEffect } from "react"

function Dashboard( { onDeleteOrder , orders , setOrders} ) {
  

  useEffect(() => {
    fetch("http://localhost:9292/orders")
    .then(r => r.json())
    .then(array => {
      setOrders(array)
    })  
  }, [])

  

  return (
    <Flex 
      justifyContent="center" 
      alignContent="center"
      backgroundColor="#fbf7ed"
      height="100vh"
    >
        <DashboardColumn
          title="Queued Orders"
          orders={orders.filter(order => order.status === "Queued")}
          onDeleteOrder={onDeleteOrder} />
        <DashboardColumn
          title="In-Progress"
          orders={orders.filter(order => order.status === "In-Progress")} 
          onDeleteOrder={onDeleteOrder} />
        <DashboardColumn
          title="Fulfilled Orders"
          orders={orders.filter(order => order.status === "Fulfilled")} 
          onDeleteOrder={onDeleteOrder} />
    </Flex>
  )
}

export default Dashboard