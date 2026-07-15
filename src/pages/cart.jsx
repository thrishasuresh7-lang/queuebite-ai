import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

export default function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  const navigate = useNavigate();

  const gst = Math.round(totalPrice * 0.05);
  const platformFee = cartItems.length > 0 ? 10 : 0;
  const grandTotal = totalPrice + gst + platformFee;

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6 lg:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-black text-orange-500">
              🛒 My Cart
            </h1>

            <p className="text-gray-400 mt-3">
              {cartItems.length} item(s) in your cart
            </p>

          </div>

        </div>

        {cartItems.length === 0 ? (

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-20 text-center">

            <ShoppingCart
              size={90}
              className="mx-auto text-orange-500"
            />

            <h2 className="text-4xl font-bold mt-8">
              Your Cart is Empty
            </h2>

            <p className="text-gray-400 mt-4">
              Looks like you haven't added any delicious food yet.
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl font-bold"
            >
              Browse Menu
            </button>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left Side */}

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-700 rounded-3xl p-6 flex flex-col md:flex-row justify-between gap-6 hover:border-orange-500 transition-all"
                >

                  <div className="flex gap-6">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />

                    <div>

                      <h2 className="text-3xl font-bold">

                        {item.name}

                      </h2>

                      <p className="text-orange-400 text-xl mt-3">

                        ₹{item.price}

                      </p>

                      <p className="text-gray-400 mt-3">

                        Total ₹{item.price * item.quantity}

                      </p>

                    </div>

                  </div>

                  <div className="flex flex-col justify-between">

                    <div className="flex items-center gap-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-red-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                      >
                        <Minus size={18} />
                      </button>

                      <span className="text-2xl font-bold">

                        {item.quantity}

                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
                      >
                        <Plus size={18} />
                      </button>

                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-6 bg-red-500 hover:bg-red-600 rounded-xl py-3 flex items-center justify-center gap-2"
                    >
                      <Trash2 size={18} />

                      Remove

                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* Right Side */}

            <div>

              <div className="sticky top-28 bg-slate-900 border border-slate-700 rounded-3xl p-8">

                <h2 className="text-3xl font-bold mb-8">
                  Order Summary
                </h2>

                <div className="space-y-5">

                  <div className="flex justify-between">

                    <span>Subtotal</span>

                    <span>₹{totalPrice}</span>

                  </div>

                  <div className="flex justify-between">

                    <span>GST (5%)</span>

                    <span>₹{gst}</span>

                  </div>

                  <div className="flex justify-between">

                    <span>Platform Fee</span>

                    <span>₹{platformFee}</span>

                  </div>

                  <hr className="border-slate-700" />

                  <div className="flex justify-between text-2xl font-bold">

                    <span>Total</span>

                    <span className="text-orange-400">
                      ₹{grandTotal}
                    </span>

                  </div>

                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-10 bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-xl font-bold flex justify-center items-center gap-3 transition"
                >
                  Proceed to Checkout

                  <ArrowRight size={22} />

                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}