import { useEffect, useState } from "react";
import { listenToOrders } from "../../services/orderService";

export default function QueuePrediction() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = listenToOrders((data) => {
      setOrders(data);
    });

    return () => unsubscribe();
  }, []);

  const activeOrders = orders.filter(
    (order) => order.status !== "Collected"
  ).length;

  const waitingTime = activeOrders * 5;

  const recommendedTime = new Date(
    Date.now() + waitingTime * 60000
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mt-8">

      <h2 className="text-3xl font-bold text-orange-500">
        🤖 QueueBite AI
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        <div className="bg-slate-700 rounded-xl p-5">
          <p className="text-gray-400">Current Queue</p>

          <h2 className="text-4xl font-bold text-orange-400 mt-3">
            {activeOrders}
          </h2>
        </div>

        <div className="bg-slate-700 rounded-xl p-5">
          <p className="text-gray-400">Estimated Wait</p>

          <h2 className="text-4xl font-bold text-cyan-400 mt-3">
            {waitingTime} mins
          </h2>
        </div>

        <div className="bg-slate-700 rounded-xl p-5">
          <p className="text-gray-400">Best Pickup Time</p>

          <h2 className="text-2xl font-bold text-green-400 mt-3">
            {recommendedTime}
          </h2>
        </div>

      </div>

    </div>
  );
}