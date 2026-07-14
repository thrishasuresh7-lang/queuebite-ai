import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listenToOrder } from "../services/orderService";

export default function OrderTracking() {
  const { state } = useLocation();

  const [order, setOrder] = useState(null);

  if (!state) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
        <h1 className="text-3xl">No Active Order</h1>
      </div>
    );
  }

  const { token } = state;

  useEffect(() => {
    const unsubscribe = listenToOrder(token, (firebaseOrder) => {
      setOrder(firebaseOrder);
    });

    return () => unsubscribe();
  }, [token]);

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center">
        <h1 className="text-3xl">Loading Order...</h1>
      </div>
    );
  }

  const statusIndex = {
    Preparing: 1,
    Ready: 2,
    Collected: 3,
  };

  const step = statusIndex[order.status] || 0;

  const statuses = [
    "Order Received",
    "Preparing",
    "Ready for Pickup",
    "Collected",
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <div className="max-w-3xl mx-auto bg-slate-800 rounded-3xl p-10 shadow-xl">

        <h1 className="text-5xl font-bold text-orange-500 text-center">
          📍 Order Tracking
        </h1>

        <div className="mt-10 space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-400">🎟 Token</span>
            <span className="font-bold text-orange-400">
              {order.token}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">👤 Student</span>
            <span>{order.student}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">💰 Amount</span>
            <span>₹{order.total}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">📌 Status</span>
            <span className="text-orange-400 font-bold">
              {order.status}
            </span>
          </div>

          <div className="mt-6">
  <h2 className="text-xl font-bold text-orange-400 mb-3">
    🍽 Ordered Items
  </h2>

  {order.items.map((item, index) => (
    <div
      key={index}
      className="flex justify-between bg-slate-700 rounded-xl p-3 mb-2"
    >
      <span>
        {item.name} × {item.quantity}
      </span>

      <span>
        ₹{item.price * item.quantity}
      </span>
    </div>
  ))}
</div>

        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-700 rounded-full h-4 mt-10 overflow-hidden">
          <div
            className="bg-orange-500 h-4 transition-all duration-500"
            style={{ width: `${((step + 1) / 4) * 100}%` }}
          />
        </div>

        {/* Status Timeline */}
        <div className="mt-10 space-y-6">
          {statuses.map((status, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 text-xl ${
                index <= step
                  ? "text-green-400"
                  : "text-gray-500"
              }`}
            >
              <span className="text-2xl">
                {index <= step ? "✅" : "⚪"}
              </span>

              <span>{status}</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}