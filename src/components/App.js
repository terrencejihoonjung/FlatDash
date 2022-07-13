import { Routes, Route } from "react-router-dom"
import CreateOrder from "./CreateOrder"
import CustomerDetail from "./CustomerDetail"
import NavBar from "./NavBar"
import Dashboard from "./Dashboard"
import OrderDetail from "./OrderDetail"

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/customer/:id" element={<CustomerDetail />} />
        <Route path="/order/:id" element={<OrderDetail />} />
      </Routes>
    </div>
  );
}

export default App;
