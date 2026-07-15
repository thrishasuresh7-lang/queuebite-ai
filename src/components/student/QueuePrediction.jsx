import { useEffect, useState } from "react";
import { listenToOrders } from "../../services/orderService";
import {
  Brain,
  Users,
  Clock3,
  CalendarClock,
  Sparkles,
} from "lucide-react";

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

  const queueStatus =
    activeOrders < 5
      ? "Low"
      : activeOrders < 10
      ? "Moderate"
      : "High";

  return (
    <section className="mt-10">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-700 p-8 shadow-2xl">

        {/* Background Glow */}

        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative">

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">

                <Brain size={18} />

                QueueBite AI Prediction

              </div>

              <h2 className="text-5xl font-black text-white mt-6">
                Smart Queue Analysis
              </h2>

              <p className="text-blue-100 mt-5 max-w-2xl text-lg leading-8">
                AI continuously analyses live orders and predicts
                the best time for food pickup to reduce waiting.
              </p>

            </div>

            {/* Right */}

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 min-w-[260px]">

              <h3 className="font-bold text-xl flex items-center gap-2">

                <Sparkles size={22} />

                AI Recommendation

              </h3>

              <p className="mt-5 text-green-300 font-bold text-lg">

                {queueStatus === "Low"
                  ? "✅ Great time to order!"
                  : queueStatus === "Moderate"
                  ? "⚠ Order soon."
                  : "⛔ Wait a few minutes."}

              </p>

            </div>

          </div>

          {/* Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6">

              <Users className="text-orange-300 mb-4" />

              <p className="text-blue-100">
                Current Queue
              </p>

              <h2 className="text-5xl font-black mt-3">
                {activeOrders}
              </h2>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6">

              <Clock3 className="text-yellow-300 mb-4" />

              <p className="text-blue-100">
                Estimated Wait
              </p>

              <h2 className="text-5xl font-black mt-3">
                {waitingTime} min
              </h2>

            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6">

              <CalendarClock className="text-green-300 mb-4" />

              <p className="text-blue-100">
                Best Pickup
              </p>

              <h2 className="text-3xl font-black mt-4">
                {recommendedTime}
              </h2>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}