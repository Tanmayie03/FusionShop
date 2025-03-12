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
             
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductItem;
