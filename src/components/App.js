import { Routes, Route } from "react-router-dom"
import CreateOrder from "./CreateOrder"
import CustomerDetail from "./CustomerDetail"
import NavBar from "./NavBar"
import Dashboard from "./Dashboard"
import OrderDetail from "./OrderDetail"
import CustomerLookup from "./CustomerLookup"
import { useState } from "react"

function App() {

  const [orders, setOrders] = useState([])

  function onDeleteOrder(deletedOrder) {
    setOrders(orders.filter( order => order.id !== deletedOrder.id))
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard onDeleteOrder={onDeleteOrder} orders={orders} setOrders={setOrders} />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/customer" element={<CustomerLookup />} />
        <Route path="/customer/:id" element={<CustomerDetail onDeleteOrder={onDeleteOrder} />} />
        <Route path="/order/:id" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
