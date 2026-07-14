import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { placeOrder as saveOrder } from "../services/orderService";

export default function Checkout() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [usn, setUsn] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("UPI");
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
    if (!studentName || !usn || !phone) {
      alert("Please fill all details.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty.");
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
        total: totalPrice,
        status: "Preparing",
        orderTime: new Date().toLocaleString(),
      });

      // Clear cart after successful order
      clearCart();

      navigate("/order-success", {
        state: {
          token,
          studentName,
          totalPrice,
          cartItems,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <h1 className="text-5xl font-bold text-orange-500 mb-8">
        Checkout
      </h1>

      <div className="bg-slate-800 rounded-2xl p-8 max-w-2xl mx-auto">

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-700 outline-none"
          />

          <input
            type="text"
            placeholder="USN"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-700 outline-none"
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-700 outline-none"
          />

          <div>
            <h2 className="text-xl mb-3 font-semibold">
              Payment Method
            </h2>

            <select
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-700"
            >
              <option>UPI</option>
              <option>Cash</option>
              <option>Card</option>
            </select>
          </div>

          <div className="bg-slate-700 rounded-xl p-5">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <p className="mt-4">
              Items: {cartItems.length}
            </p>

            <p className="text-2xl text-orange-400 mt-2">
              Total: ₹{totalPrice}
            </p>

          </div>

          <button
            onClick={placeOrder}
            disabled={loading}
            className={`w-full py-4 rounded-xl text-xl font-bold transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>

        </div>

      </div>

    </div>
  );
}