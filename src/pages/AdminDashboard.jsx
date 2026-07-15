import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderCard from "../components/Admin/OrderCard";
import { listenToOrders } from "../services/orderService";
import Analytics from "../components/Admin/Analytics";
import AIInsights from "../components/Admin/AIInsights";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [orders, setOrders] = useState([]);

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
  };

  useEffect(() => {
    const unsubscribe = listenToOrders((firebaseOrders) => {
      setOrders(firebaseOrders);
    });

    return () => unsubscribe();
  }, []);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.student?.toLowerCase().includes(search.toLowerCase()) ||
      order.token?.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  const revenue = filteredOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const queueCount = filteredOrders.filter(
    (order) => order.status !== "Collected"
  ).length;

  const completedOrders = filteredOrders.filter(
    (order) => order.status === "Collected"
  ).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6 lg:px-10">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}

        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-8 shadow-2xl flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
              🤖 QueueBite AI
            </div>

            <h1 className="text-5xl font-black mt-6">
              Admin Dashboard
            </h1>

            <p className="mt-4 text-lg">
              Manage orders, monitor revenue and track your canteen in real time.
            </p>

            <p className="mt-2 text-white/80">
              {today}
            </p>

          </div>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-bold transition"
          >
            Logout
          </button>

        </div>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-500 transition">

            <p className="text-gray-400">
              Today's Orders
            </p>

            <h2 className="text-6xl font-black text-orange-400 mt-3">
              {filteredOrders.length}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-500 transition">

            <p className="text-gray-400">
              Revenue
            </p>

            <h2 className="text-6xl font-black text-green-400 mt-3">
              ₹{revenue}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-500 transition">

            <p className="text-gray-400">
              Orders in Queue
            </p>

            <h2 className="text-6xl font-black text-cyan-400 mt-3">
              {queueCount}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-orange-500 transition">

            <p className="text-gray-400">
              Completed Orders
            </p>

            <h2 className="text-6xl font-black text-purple-400 mt-3">
              {completedOrders}
            </h2>

          </div>

        </div>

        {/* Search */}

        <div className="mt-10">

          <input
            type="text"
            placeholder="🔍 Search by Token or Student Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-5 text-lg outline-none focus:border-orange-500"
          />

        </div>

        {/* Filters */}

        <div className="flex gap-4 flex-wrap mt-8">

          {["All", "Preparing", "Ready", "Collected"].map((status) => (

            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 rounded-2xl font-bold transition ${
                filter === status
                  ? "bg-orange-500"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {status}
            </button>

          ))}

        </div>

        {/* Analytics */}

        <div className="mt-10">
          <Analytics orders={orders} />
        </div>

        <div className="mt-10">
          <AIInsights orders={orders} />
        </div>

        <h2 className="text-4xl font-black mt-14 mb-8">
          📦 Live Orders
        </h2>
                {/* Orders */}

        <div className="space-y-8">

          {filteredOrders.length === 0 ? (

            <div className="bg-slate-900 border border-slate-700 rounded-3xl py-20 text-center">

              <h2 className="text-3xl font-bold text-gray-400">
                📭 No Orders Found
              </h2>

              <p className="text-gray-500 mt-4">
                New orders will appear here automatically.
              </p>

            </div>

          ) : (

            filteredOrders.map((order) => (

              <OrderCard
                key={order.id}
                order={order}
              />

            ))

          )}

        </div>

      </div>

    </div>
  );
}