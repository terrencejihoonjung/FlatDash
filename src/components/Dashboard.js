import { Flex } from "@chakra-ui/react"
import DashboardColumn from "./DashboardColumn"
import { useState , useEffect } from "react"

function Dashboard() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/order")
    .then(r => r.json())
    .then(setOrders)
    //calling setOrders without an explicit argument automatically passes the response from r.json().then()
  }, [])

  function filterOrder(status) {
    return orders.filter(order => order.status === status)
  }

  return (
    <Flex 
      justifyContent="center" 
      alignContent="center"
      backgroundColor="#fbf7ed"
    >
        <DashboardColumn
          title="Queued Orders"
          orders={filterOrder("Queued")}
        />
        <DashboardColumn
          title="In-Progress"
          orders={filterOrder("In-Progress")}
        />
        <DashboardColumn
          title="Fulfilled Orders"
          orders={filterOrder("Fulfilled")}
        />
    </Flex>
  )
}

export default Dashboard