import { Flex } from "@chakra-ui/react"
import DashboardColumn from "./DashboardColumn"
import { useState , useEffect } from "react"

function Dashboard( { fetchOrders , orders } ) {

  useEffect(() => {
    fetchOrders()
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
          fetchOrders={fetchOrders} />
        <DashboardColumn
          title="In-Progress"
          orders={orders.filter(order => order.status === "In-Progress")} 
          fetchOrders={fetchOrders} />
        <DashboardColumn
          title="Fulfilled Orders"
          orders={orders.filter(order => order.status === "Fulfilled")} 
          fetchOrders={fetchOrders} />
    </Flex>
  )
}

export default Dashboard