import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listenToOrder } from "../services/orderService";
import {
  CheckCircle,
  Clock3,
  ChefHat,
  ShoppingBag,
} from "lucide-react";

export default function OrderTracking() {
  const { state } = useLocation();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!state?.token) return;

    const unsubscribe = listenToOrder(
      state.token,
      (firebaseOrder) => {
        setOrder(firebaseOrder);
      }
    );

    return () => unsubscribe();
  }, [state]);

  if (!state) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          No Active Order
        </h1>
      </div>
    );
  }

  const token = order?.token || state.token;
  const studentName = order?.student || state.studentName;
  const totalPrice = order?.total || state.totalPrice;

  const statuses = [
    "Preparing",
    "Ready",
    "Collected",
  ];

  const currentStep =
    order?.status === "Collected"
      ? 2
      : order?.status === "Ready"
      ? 1
      : 0;

  const progress =
    currentStep === 0
      ? 35
      : currentStep === 1
      ? 70
      : 100;

  const estimatedTime =
    order?.status === "Preparing"
      ? "10 mins"
      : order?.status === "Ready"
      ? "Ready for Pickup"
      : "Completed";

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6 lg:px-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 rounded-3xl p-8 shadow-2xl">

          <h1 className="text-5xl font-black">
            📍 Live Order Tracking
          </h1>

          <p className="mt-3 text-lg">
            Your order updates in real-time.
          </p>

        </div>

        {/* Info Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">

            <ShoppingBag
              size={34}
              className="text-orange-500"
            />

            <p className="text-gray-400 mt-4">
              Token
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {token}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">

            <ChefHat
              size={34}
              className="text-cyan-400"
            />

            <p className="text-gray-400 mt-4">
              Student
            </p>

            <h2 className="text-2xl font-bold mt-2">
              {studentName}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">

            <Clock3
              size={34}
              className="text-green-400"
            />

            <p className="text-gray-400 mt-4">
              Estimated Status
            </p>

            <h2 className="text-2xl font-bold mt-2 text-orange-400">
              {estimatedTime}
            </h2>

          </div>

        </div>

        {/* Order Summary */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mt-10">

          <div className="flex justify-between">

            <span className="text-gray-400">
              Order Amount
            </span>

            <span className="text-2xl font-bold text-green-400">
              ₹{totalPrice}
            </span>

          </div>

        </div>

        {/* Progress */}

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 mt-10">

          <h2 className="text-3xl font-bold text-orange-500">
            Order Progress
          </h2>

          <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden mt-8">

            <div
              className="bg-orange-500 h-4 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <div className="mt-10 space-y-8">

            {statuses.map((status, index) => (

              <div
                key={status}
                className={`flex items-center gap-5 ${
                  index <= currentStep
                    ? "text-green-400"
                    : "text-gray-500"
                }`}
              >

                <CheckCircle
                  size={30}
                  className={
                    index <= currentStep
                      ? "fill-green-500"
                      : ""
                  }
                />

                <div>

                  <h3 className="text-2xl font-bold">

                    {status}

                  </h3>

                  <p className="text-sm">

                    {status === "Preparing" &&
                      "Your food is being prepared."}

                    {status === "Ready" &&
                      "Your food is ready for pickup."}

                    {status === "Collected" &&
                      "Order completed successfully."}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}