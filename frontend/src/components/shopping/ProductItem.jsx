import { Link } from "react-router-dom";

const ProductItem = ({ products }) => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 md:gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
      {products.map((product) => (
        <Link to={`/shop/${product.id}`} key={product._id}>
          <div className="md:p-4 bg-white rounded-md cursor-pointer hover:shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-56 h-56 sm:w-72 sm:h-72"
            />
            <h3 className="py-4 text-sm md:text-lg font-semibold text-gray-600 truncate">
              {product.title}
            </h3>
            <p className="text-xl font-semibold ">
              ₹{product.price}
              <span className="pl-3 text-sm text-green-600">Special price</span>
            </p>
            <div className="flex items-center justify-between">
              <p className="py-1 text-sm md:text-base font-semibold text-gray-500 ">
                Free Delivery
              </p>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="md:size-6 size-5 hover:fill-red-500 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductItem;
