import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="items-center justify-center flex-1 hidden bg-blue-950 w-2/2 lg:flex">
        <div className="max-w-md space-y-6 text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Ecommerce Shopping
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 w-1/2 py-12 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
