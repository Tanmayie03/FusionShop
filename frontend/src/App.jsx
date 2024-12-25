import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import { useSelector } from "react-redux";
import ProductItem from "./pages/shop/ProductItem";
import Cart from "./components/shopping/Cart";
import Orders from "./pages/shop/Orders";

function App() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  console.log("Auth state:", { user, isAuthenticated });
  return (
    <Router>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
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
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShopLayout />
              </CheckAuth>
            }>
            <Route path="*" element={<NotFound />} />
            <Route path="" element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path=":productId" element={<ProductItem />} />
            <Route path="account" element={<Accounts />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
