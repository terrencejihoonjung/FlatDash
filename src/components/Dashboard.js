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
    //calling setOrders without an explicit argument automatically passes the response from r.json().then()
  }, [])

  return (
    <Flex 
      justifyContent="center" 
      alignContent="center"
      backgroundColor="#fbf7ed"
    >
        <DashboardColumn
          title="Queued Orders"
          orders={orders.filter(order => order.status === "Queued")}
        />
        <DashboardColumn
          title="In-Progress"
          orders={orders.filter(order => order.status === "In-Progress")}
        />
        <DashboardColumn
          title="Fulfilled Orders"
          orders={orders.filter(order => order.status === "Fulfilled")}
        />
    </Flex>
  )
}

export default Dashboard