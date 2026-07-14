const stats = [
  {
    title: "Orders Today",
    value: "247",
    icon: "🍔",
    change: "+12%",
    color: "text-green-400",
  },
  {
    title: "Revenue",
    value: "₹18,450",
    icon: "💰",
    change: "+8%",
    color: "text-green-400",
  },
  {
    title: "Avg Wait",
    value: "6 min",
    icon: "⏳",
    change: "-2 min",
    color: "text-green-400",
  },
  {
    title: "Satisfaction",
    value: "96%",
    icon: "😊",
    change: "+3%",
    color: "text-green-400",
  },
];

export default function Stats() {
  return (
    <section className="px-8 py-16">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Live Canteen Statistics
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-5xl">{stat.icon}</div>

            <h3 className="mt-5 text-3xl font-bold">
              {stat.value}
            </h3>

            <p className="mt-2 text-gray-400">
              {stat.title}
            </p>

            <p className={`mt-3 font-semibold ${stat.color}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}