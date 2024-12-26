import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="px-6 py-2 w-fit mt-4 text-gray-700 font-bold text-2xl">
        Hurry!!! Your order is placed
      </h1>
      <img
        src="https://img.freepik.com/free-vector/online-groceries-concept-illustration_114360-1834.jpg?t=st=1735230838~exp=1735234438~hmac=9e7910d4d3df1ed01e561398ce551720a67136cbcde915f0a977e52ecf4d0563&w=740"
        className="grayscale md:w-1/4"
      />
      <Link to={"/shop/orders"}>
        {" "}
        <h1 className="px-6 py-2 w-fit my-4 bg-gray-800 text-white">
          Your Orders
        </h1>
      </Link>
    </div>
  );
};

export default Success;
