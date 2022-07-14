import { Routes, Route } from "react-router-dom"
import CreateOrder from "./CreateOrder"
import CustomerDetail from "./CustomerDetail"
import NavBar from "./NavBar"
import Dashboard from "./Dashboard"
import OrderDetail from "./OrderDetail"
import CustomerLookup from "./CustomerLookup"
import { useState } from "react"

function App() {

  const [loginId, setLoginId] = useState("")

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/customer" element={<CustomerLookup setLoginId={setLoginId} />} />
        <Route path="/customer/:id" element={<CustomerDetail id={loginId} />} />
        <Route path="/order/:id" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
