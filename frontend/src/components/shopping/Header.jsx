import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { shoppingViewMenu } from "../../config";
import { logoutUser } from "../../store/auth";
import { fetchCartItems } from "../../store/shop/cartSlice";

function MenuItems() {
  return (
    <nav className="flex text-gray-700 flex-col w-full gap-4 bg-white lg:flex-row lg:gap-8 lg:bg-transparent lg:mb-0">
      {shoppingViewMenu.map((menuItem) => (
        <Link
          className="text-sm font-bold"
          key={menuItem.id}
          to={menuItem.path}>
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}

const Header = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.shopCart.cartItems);
  const user = useSelector((state) => state.auth.user);

  const calculateTotalQuantity = (items) => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/auth/login";
  };
  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <div className="sticky top-0 z-40 text-gray-700 w-full border-b shadow-md bg-gray-50 ">
      <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-10">
        <Link to="/shop" className="flex items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span className="pl-2 text-xl font-bold text-gray-700">
            FUSHIONSHOP
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <MenuItems />
        </div>

        <div className="relative flex items-center gap-6 ">
          <div
            className={`absolute top-0 right-8 z-10 p-4 w-fit bg-white transition-transform duration-300 ease-in-out ${
              isMenuOpen
                ? "transform translate-y-12"
                : "transform -translate-y-full"
            } lg:hidden`}>
            <MenuItems />
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <Link to={"/shop/cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 relative">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <p className=" bg-gray-700 text-sm text-white px-1.5 rounded-full absolute right-14 top-5">
              {calculateTotalQuantity(cartItems)}
            </p>
          </Link>

          <button onClick={toggleDropdown} className="">
            <div className="p-2 bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 z-50 w-48 mt-2 bg-white rounded-md shadow-lg top-12">
              <ul>
                <li>
                  <Link
                    to="/shop/listing"
                    className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/account"
                    className="block px-4 py-2 text-sm hover:bg-gray-100">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop/orders"
                    className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Terms
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
