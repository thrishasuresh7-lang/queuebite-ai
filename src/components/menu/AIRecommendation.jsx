import foods from "../../data/foods";

export default function AIRecommendation() {
  const recommendedFoods = foods
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mb-8">

      <h2 className="text-3xl font-bold text-orange-500">
        🤖 AI Recommended For You
      </h2>

      <p className="text-gray-400 mt-2">
        Based on ratings and popularity
      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-6">

        {recommendedFoods.map((food) => (
          <div
            key={food.id}
            className="bg-slate-700 rounded-xl p-4"
          >

            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-xl"
            />

            <h3 className="text-xl font-bold mt-3">
              {food.name}
            </h3>

            <p className="text-orange-400 mt-2">
              ⭐ {food.rating}
            </p>

            <p className="text-green-400">
              ₹{food.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}