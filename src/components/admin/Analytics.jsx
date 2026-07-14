import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Analytics({ orders }) {
  const revenue = orders.reduce((sum, order) => sum + order.total, 0);

  const students = new Set(orders.map((order) => order.student)).size;

  const foodCount = {};

  orders.forEach((order) => {
    order.items.forEach((item) => {
      foodCount[item.name] =
        (foodCount[item.name] || 0) + item.quantity;
    });
  });

  const chartData = Object.entries(foodCount).map(([name, qty]) => ({
    name,
    Orders: qty,
  }));

  const mostOrdered =
    chartData.length > 0
      ? chartData.reduce((a, b) =>
          a.Orders > b.Orders ? a : b
        )
      : { name: "None", Orders: 0 };

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-gray-400">Revenue</p>
          <h2 className="text-4xl text-green-400 font-bold mt-3">
            ₹{revenue}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-gray-400">Students</p>
          <h2 className="text-4xl text-cyan-400 font-bold mt-3">
            {students}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-gray-400">Most Ordered</p>
          <h2 className="text-2xl text-orange-400 font-bold mt-3">
            {mostOrdered.name}
          </h2>
        </div>

      </div>

      <div className="bg-slate-800 rounded-2xl p-6 mt-10">

        <h2 className="text-3xl font-bold text-orange-500 mb-6">
          Food Orders Analytics
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Orders" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </>
  );
}