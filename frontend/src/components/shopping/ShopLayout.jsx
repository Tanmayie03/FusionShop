import { Outlet } from "react-router-dom";
import Header from "./Header";

const ShopLayout = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Header />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
