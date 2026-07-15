import { useState, useEffect } from "react";
import { updateOrderStatus } from "../../services/orderService";

export default function OrderCard({ order }) {
  const [status, setStatus] = useState(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const statusStyle = {
    Preparing: "bg-yellow-500",
    Ready: "bg-green-500",
    Collected: "bg-gray-500",
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/20 transition-all">

      <div className="flex flex-col md:flex-row justify-between gap-6">

        {/* Order Details */}
        <div className="flex-1">

          <h2 className="text-2xl font-bold text-orange-400">
            🎟 {order.token}
          </h2>

          <p className="text-lg mt-2">
            👤 {order.student}
          </p>

          <p className="text-gray-300 mt-2">
            🎓 USN: {order.usn}
          </p>

          <p className="text-gray-300">
            📞 Phone: {order.phone}
          </p>

          <p className="text-gray-300">
            💳 Payment: {order.payment}
          </p>

          <p className="text-gray-300">
            🕒 {order.orderTime}
          </p>

          <div className="mt-4 space-y-2">
            {order.items.map((item, index) => (
              <p key={index} className="text-gray-300">
                🍽 {item.name} × {item.quantity} — ₹
                {item.price * item.quantity}
              </p>
            ))}
          </div>

          <h3 className="mt-5 text-2xl font-bold text-green-400">
            ₹{order.total}
          </h3>

        </div>

        {/* Status Section */}
        <div className="md:w-64">

          <h3 className="text-lg font-semibold mb-3">
            Order Status
          </h3>

          <span
            className={`${statusStyle[status]} px-5 py-2 rounded-full font-semibold text-white`}
          >
            {status}
          </span>

          <div className="mt-6 space-y-3">

            <button
              onClick={async () => {
                setStatus("Preparing");
                await updateOrderStatus(order.id, "Preparing");
              }}
              className="w-full bg-yellow-500 hover:bg-yellow-600 py-2 rounded-xl font-semibold transition"
            >
              Preparing
            </button>

            <button
              onClick={async () => {
                setStatus("Ready");
                await updateOrderStatus(order.id, "Ready");
              }}
              className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-xl font-semibold transition"
            >
              Ready
            </button>

            <button
              onClick={async () => {
                setStatus("Collected");
                await updateOrderStatus(order.id, "Collected");
              }}
              className="w-full bg-gray-600 hover:bg-gray-700 py-2 rounded-xl font-semibold transition"
            >
              Collected
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}