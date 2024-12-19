import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex w-full min-h-screen ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-6 bg-gray-100 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
