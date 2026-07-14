import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-800 p-6 rounded-2xl mt-6">
      <h2 className="text-2xl font-bold text-orange-500 mb-4">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <button
  onClick={() => navigate("/menu")}
  className="bg-orange-500 rounded-xl p-3 hover:bg-orange-600 transition"
>
  🍔 Menu
</button>

        <button
          onClick={() => navigate("/tracking")}
          className="bg-orange-500 rounded-xl p-3 hover:bg-orange-600 transition"
        >
          📍 Track
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="bg-orange-500 rounded-xl p-3 hover:bg-orange-600 transition"
        >
          🛒 Cart
        </button>

        <button
          onClick={() => alert("History coming soon")}
          className="bg-orange-500 rounded-xl p-3 hover:bg-orange-600 transition"
        >
          📜 History
        </button>
      </div>
    </div>
  );
}