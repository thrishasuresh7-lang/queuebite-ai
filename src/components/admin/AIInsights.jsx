export default function AIInsights({ orders }) {
  if (orders.length === 0) {
    return (
      <div className="bg-slate-800 rounded-2xl p-6 mt-8">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          🤖 QueueBite AI
        </h2>

        <p className="text-gray-400">
          No orders available for AI analysis.
        </p>
      </div>
    );
  }

  // Count food orders
  const foodCount = {};

  orders.forEach((order) => {
    order.items.forEach((item) => {
      foodCount[item.name] =
        (foodCount[item.name] || 0) + item.quantity;
    });
  });

  const sortedFoods = Object.entries(foodCount).sort(
    (a, b) => b[1] - a[1]
  );

  const trendingFood = sortedFoods[0]?.[0] || "No Data";

  const queueLength = orders.filter(
    (o) => o.status !== "Collected"
  ).length;

  const estimatedTime = queueLength * 5;

  return (
    <div className="bg-slate-800 rounded-2xl p-8 mt-10">

      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        🤖 QueueBite AI Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-slate-700 rounded-xl p-5">
          <h3 className="text-xl font-bold">
            🔥 Trending Food
          </h3>

          <p className="text-2xl mt-3 text-orange-400">
            {trendingFood}
          </p>
        </div>

        <div className="bg-slate-700 rounded-xl p-5">
          <h3 className="text-xl font-bold">
            ⏳ Estimated Wait
          </h3>

          <p className="text-2xl mt-3 text-cyan-400">
            {estimatedTime} mins
          </p>
        </div>

        <div className="bg-slate-700 rounded-xl p-5">
          <h3 className="text-xl font-bold">
            📦 Active Orders
          </h3>

          <p className="text-2xl mt-3 text-green-400">
            {queueLength}
          </p>
        </div>

        <div className="bg-slate-700 rounded-xl p-5">
          <h3 className="text-xl font-bold">
            💡 AI Suggestion
          </h3>

          <p className="mt-3 text-gray-300">
            Recommend <b>{trendingFood}</b> on the homepage today because it is
            currently the most popular choice.
          </p>
        </div>

      </div>

    </div>
  );
}