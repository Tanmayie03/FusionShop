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
          <Route path="/" element={<Navigate to="/shop" replace />} />

          <Route path="/auth" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/shop" element={<ShopLayout />}>
            <Route index element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path=":productId" element={<ProductItem />} />

            <Route
              path="checkout"
              element={
                isAuthenticated ? (
                  <Checkout />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            />
            <Route
              path="cart"
              element={
                isAuthenticated ? (
                  <Cart />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            />
            <Route
              path="orders"
              element={
                isAuthenticated ? (
                  <Orders />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            />
            <Route
              path="account"
              element={
                isAuthenticated ? (
                  <Accounts />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            />
            <Route
              path="success"
              element={
                isAuthenticated ? (
                  <Success />
                ) : (
                  <Navigate to="/auth/login" replace />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
