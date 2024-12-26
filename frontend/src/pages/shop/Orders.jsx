import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../store/shop/orderSlice";

const Orders = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const userId = user?.id || localStorage.getItem("userId");
  const { orders, isLoading, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (userId) {
      dispatch(fetchOrders(userId));
    }
  }, [dispatch, userId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6 lg:p-10">
      <h3 className="md:text-2xl text-xl text-gray-700 font-semibold">
        YOUR ORDERS
      </h3>
      {orders && orders.length > 0 ? (
        orders.map((order) => {
          const formattedDate = new Date(order.date).toLocaleString(); // Convert timestamp
          const { address, cartItems } = order;

          return (
            <div key={order._id} className="border p-4 my-4">
              <div className="flex lg:flex-row flex-col">
                {cartItems.map((cart) => (
                  <div className="flex flex-col" key={cart.productId}>
                    <img
                      src={cart.image}
                      className="md:w-40  md:h-40 w-20 h-20 object-cover"
                    />
                  </div>
                ))}

                <div className="flex flex-col ">
                  <p>
                    <span className="font-bold">Order ID:</span> {order._id}
                  </p>
                  <p>
                    <span className="font-bold">Date:</span> {formattedDate}
                  </p>
                  <p>
                    <span className="font-bold">Total Amount:</span> ₹{" "}
                    {order.totalAmount}
                  </p>
                  <p>
                    <span className="font-bold">Payment Method:</span>{" "}
                    {order.paymentMethod}
                  </p>
                  <p className="text-green-600 font-semibold">
                    <span className="font-bold text-gray-700">Status:</span>{" "}
                    {order.status}
                  </p>

                  {address && (
                    <div className="mt-4">
                      <h5 className="text-lg font-semibold">
                        Shipping Address
                      </h5>
                      <p>{address.address}</p>
                      <p>
                        {address.city}, {address.pincode}
                      </p>
                      <p>Phone: {address.phone}</p>
                    </div>
                  )}

                  <div className="mt-4">
                    <h5 className="text-lg font-semibold">Items</h5>
                    {cartItems.map((cart) => (
                      <div key={cart.productId} className="border-b ">
                        <p>
                          <span>Product:</span> {cart.title}
                        </p>
                        <p>
                          <span>Quantity:</span> {cart.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default Orders;
