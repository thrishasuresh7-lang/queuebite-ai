import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <h1 className="text-3xl">No Order Found</h1>
      </div>
    );
  }

  const {
    token,
    studentName,
    totalPrice,
  } = state;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex justify-center items-center p-8">

      <div className="bg-slate-800 rounded-3xl p-10 w-full max-w-2xl shadow-xl">

        <div className="text-center">

          <h1 className="text-6xl">🎉</h1>

          <h2 className="text-4xl font-bold text-green-400 mt-4">
            Order Placed Successfully
          </h2>

          <p className="text-gray-400 mt-3">
            Thank you for ordering with QueueBite AI
          </p>

        </div>

        <div className="mt-10 space-y-5">

          <div className="flex justify-between">
            <span className="text-gray-400">🎟 Token</span>
            <span className="font-bold text-orange-400">
              {token}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">👤 Student</span>
            <span>{studentName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">💰 Amount</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">🕒 Estimated Time</span>
            <span>12 Minutes</span>
          </div>

        </div>

        <button
          onClick={() =>
            navigate("/tracking", {
              state,
            })
          }
          className="w-full mt-10 bg-orange-500 hover:bg-orange-600 py-4 rounded-2xl text-xl font-bold"
        >
          Track Order
        </button>

      </div>

    </div>
  );
}