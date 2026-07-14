import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-5xl font-bold text-orange-500 mb-8">
        🛒 My Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-24">
          <h2 className="text-3xl text-gray-400">
            Your cart is empty 🛒
          </h2>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800 rounded-2xl p-5 flex justify-between items-center"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-orange-400 font-bold mt-2">
                      ₹{item.price} each
                    </p>

                    <p className="mt-2 text-gray-300">
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-600 hover:bg-red-700 w-10 h-10 rounded-full text-xl"
                  >
                    −
                  </button>

                  <span className="text-2xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-600 hover:bg-green-700 w-10 h-10 rounded-full text-xl"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-6 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 mt-10 flex justify-between items-center">
            <h2 className="text-3xl font-bold">
              Grand Total
            </h2>

            <h2 className="text-3xl font-bold text-orange-500">
              ₹{totalPrice}
            </h2>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full mt-8 bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-2xl font-bold"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}