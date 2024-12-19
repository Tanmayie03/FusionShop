import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/admin/layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col overflow-hidden bg-gray-50">
          <Routes>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/dashboard" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
