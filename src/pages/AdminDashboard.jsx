
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

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-5xl font-bold text-orange-500">
            👨‍🍳 QueueBite AI Admin
          </h1>

          <p className="text-gray-400 mt-2">
            Welcome, Admin 👋
          </p>

          <p className="text-gray-500">{today}</p>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold"
        >
          Logout
        </button>

      </div>

      {/* Dashboard Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-gray-400">Today's Orders</p>

          <h2 className="text-5xl font-bold text-orange-400 mt-3">
            {filteredOrders.length}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-gray-400">Revenue</p>

          <h2 className="text-5xl font-bold text-green-400 mt-3">
            ₹{filteredOrders.reduce((sum, order) => sum + order.total, 0)}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-gray-400">Orders in Queue</p>

          <h2 className="text-5xl font-bold text-cyan-400 mt-3">
            {
              filteredOrders.filter(
                (order) => order.status !== "Collected"
              ).length
            }
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
          className="w-full p-4 rounded-xl bg-slate-800 outline-none"
        />

      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mt-6 flex-wrap">

        {["All", "Preparing", "Ready", "Collected"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-5 py-2 rounded-xl font-semibold transition ${
              filter === status
                ? "bg-orange-500"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {status}
          </button>
        ))}

      </div>

      {/* Orders */}
      <div className="mt-10 space-y-6">

        {filteredOrders.length === 0 ? (
          <h2 className="text-center text-2xl text-gray-400">
            No Orders Found
          </h2>
        ) : (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
            />
          ))
        )}

      </div>
      <Analytics orders={orders} /> 
      <AIInsights orders={orders} />

    </div>
  );
}