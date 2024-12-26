import { useSelector } from "react-redux";

const Accounts = () => {
  const user = useSelector((state) => state.auth.user);
  const { orders } = useSelector((state) => state.order);
  const address = useSelector((state) => state.address);

  return (
    <div className="p-10 mx-auto text-gray-700">
      <h1 className="text-2xl text-center font-semibold ">YOUR PROFILE</h1>
      <div className="flex flex-col my-4 p-6 w-fit items-center bg-gray-50">
        <div className="p-2 bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <p className="text-lg font-semibold py-2">{user.name}</p>
        <p className="text-lg font-semibold py-2"> {user.email}</p>
        <p className="  text-sm ">{address.city}</p>
      </div>
    </div>
  );
};

export default Accounts;
