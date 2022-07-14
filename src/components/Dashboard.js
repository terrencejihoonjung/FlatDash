import { Flex } from "@chakra-ui/react"
import DashboardColumn from "./DashboardColumn"
import { useState , useEffect } from "react"

function Dashboard() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/orders")
    .then(r => r.json())
    .then(array => {
      setOrders(array)
    })  
  }, [])

  function onDeleteOrder(deletedOrder) {
    setOrders(orders.filter( order => order.id !== deletedOrder.id))
  }

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