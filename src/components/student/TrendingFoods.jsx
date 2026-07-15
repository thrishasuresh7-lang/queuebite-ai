import { Flame, Star } from "lucide-react";

const trendingFoods = [
  {
    name: "Veg Pizza",
    emoji: "🍕",
    price: "₹199",
    rating: "4.8",
  },
  {
    name: "Burger",
    emoji: "🍔",
    price: "₹129",
    rating: "4.7",
  },
  {
    name: "Paneer Biryani",
    emoji: "🍛",
    price: "₹149",
    rating: "4.9",
  },
];

export default function TrendingFoods() {
  return (
    <div className="mt-8">

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-orange-500 p-3 rounded-xl">

          <Flame className="text-white" size={24} />

        </div>

        <div>

          <h2 className="text-3xl font-black">
            Trending Today
          </h2>

          <p className="text-gray-400">
            Most ordered food on campus
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {trendingFoods.map((food) => (

          <div
            key={food.name}
            className="group bg-slate-900 border border-slate-700 rounded-3xl p-6 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
          >

            <div className="text-6xl text-center">

              {food.emoji}

            </div>

            <h3 className="text-2xl font-bold mt-5 text-center">

              {food.name}

            </h3>

            <div className="flex justify-center items-center gap-2 mt-3">

              <Star
                size={18}
                className="text-yellow-400 fill-yellow-400"
              />

              <span className="font-semibold">

                {food.rating}

              </span>

            </div>

            <p className="text-center text-green-400 text-2xl font-bold mt-4">

              {food.price}

            </p>

            <button
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-bold transition-all group-hover:scale-105"
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}