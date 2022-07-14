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

  function fetchOrders() {
    fetch("http://localhost:9292/orders")
    .then(r => r.json())
    .then(array => {
      setOrders(array)
    })  
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard fetchOrders={fetchOrders} orders={orders} />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/customer" element={<CustomerLookup />} />
        <Route path="/customer/:id" element={<CustomerDetail fetchOrders={fetchOrders} />} />
        <Route path="/order/:id" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
