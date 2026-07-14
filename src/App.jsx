import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderSuccess from "./pages/OrderSuccess";
import Landing from "./pages/Landing";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";
import Menu from "./pages/menu";
import Cart from "./pages/cart";
import OrderTracking from "./pages/OrderTracking";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import QueueManagement from "./pages/QueueManagement";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tracking" element={<OrderTracking />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
  path="/admin-dashboard"
  element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>
        <Route path="/queue" element={<QueueManagement />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;