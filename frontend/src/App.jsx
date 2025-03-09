import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ShopLayout from "./components/shopping/ShopLayout";
import NotFound from "./pages/NotFound";
import Home from "./pages/shop/Home";
import Accounts from "./pages/shop/Accounts";
import Listing from "./pages/shop/Listing";
import Checkout from "./pages/shop/Checkout";
import CheckAuth from "./components/common/CheckAuth";
import ProductItem from "./pages/shop/ProductItem";
import Cart from "./components/shopping/Cart";
import Orders from "./pages/shop/Orders";
import Success from "./pages/shop/Success";
import "./index.css";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <Router basename="/">
      <div className="flex flex-col overflow-hidden bg-white font-lato">
        <Routes>
          {/* Redirect root to /shop */}
          <Route path="/" element={<Navigate to="/shop" replace />} />

          {/* Auth Routes */}
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Layout />
              </CheckAuth>
            }>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Shop Routes */}
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShopLayout />
              </CheckAuth>
            }>
            <Route index element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path=":productId" element={<ProductItem />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
            <Route path="account" element={<Accounts />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
