import toast from "react-hot-toast";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { placeOrder as saveOrder } from "../services/orderService";
import {
  User,
  Phone,
  CreditCard,
  Landmark,
  Wallet,
  ArrowRight,
} from "lucide-react";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [usn, setUsn] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("UPI");
  const [loading, setLoading] = useState(false);

  const gst = Math.round(totalPrice * 0.05);
  const platformFee = cartItems.length > 0 ? 10 : 0;
  const grandTotal = totalPrice + gst + platformFee;

  const placeOrder = async () => {
    if (!studentName || !usn || !phone) {
      toast.error("Please fill all details.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    setLoading(true);

    const token = "QB-" + Math.floor(100 + Math.random() * 900);

    try {
      await saveOrder({
        token,
        student: studentName,
        usn,
        phone,
        payment,
        items: cartItems.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        total: grandTotal,
        status: "Preparing",
        orderTime: new Date().toLocaleString(),
      });

      clearCart();

      navigate("/order-success", {
        state: {
          token,
          studentName,
          totalPrice: grandTotal,
          cartItems,
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6 lg:px-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black text-orange-500 mb-10">
          💳 Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-2 bg-slate-900 border border-slate-700 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-8">
              Student Information
            </h2>

            <div className="space-y-6">

              <div className="relative">

                <User className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl pl-14 p-4 focus:border-orange-500 outline-none"
                />

              </div>

              <div className="relative">

                <CreditCard className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="USN"
                  value={usn}
                  onChange={(e) => setUsn(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl pl-14 p-4 focus:border-orange-500 outline-none"
                />

              </div>

              <div className="relative">

                <Phone className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl pl-14 p-4 focus:border-orange-500 outline-none"
                />

              </div>

            </div>

            <h2 className="text-3xl font-bold mt-10 mb-6">
              Payment Method
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              {[
                {
                  name: "UPI",
                  icon: <Wallet size={28} />,
                },
                {
                  name: "Card",
                  icon: <CreditCard size={28} />,
                },
                {
                  name: "Cash",
                  icon: <Landmark size={28} />,
                },
              ].map((option) => (

                <button
                  key={option.name}
                  onClick={() => setPayment(option.name)}
                  className={`rounded-2xl border p-6 transition ${
                    payment === option.name
                      ? "border-orange-500 bg-orange-500/20"
                      : "border-slate-700 bg-slate-800 hover:border-orange-500"
                  }`}
                >

                  <div className="flex flex-col items-center gap-3">

                    {option.icon}

                    <span className="font-bold">

                      {option.name}

                    </span>

                  </div>

                </button>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="sticky top-28 bg-slate-900 border border-slate-700 rounded-3xl p-8">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span>Items</span>

                  <span>{cartItems.length}</span>

                </div>

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

                <hr className="border-slate-700"/>

                <div className="flex justify-between text-2xl font-bold">

                  <span>Total</span>

                  <span className="text-orange-400">
                    ₹{grandTotal}
                  </span>

                </div>

              </div>

              <button
                onClick={placeOrder}
                disabled={loading}
                className={`w-full mt-10 rounded-2xl py-4 text-xl font-bold flex justify-center items-center gap-3 transition ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >

                {loading ? (
                  "Placing Order..."
                ) : (
                  <>
                    Place Order

                    <ArrowRight size={22} />
                  </>
                )}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}