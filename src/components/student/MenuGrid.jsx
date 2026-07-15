import { useNavigate } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import foods from "../../data/foods";

export default function MenuGrid() {
  const navigate = useNavigate();

  const featuredFoods = foods
    .filter((food) => food.trending)
    .slice(0, 3);

  return (
    <section className="mt-12">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-black">
            🍽 Featured Menu
          </h2>

          <p className="text-gray-400 mt-2">
            Most loved food on campus
          </p>

        </div>

        <button
          onClick={() => navigate("/menu")}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition"
        >
          View Full Menu

          <ArrowRight size={20} />
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {featuredFoods.map((food) => (

          <div
            key={food.id}
            className="group bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
          >

            <img
              src={food.image}
              alt={food.name}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="p-6">

              <div className="flex justify-between items-center">

                <h3 className="text-2xl font-bold">

                  {food.name}

                </h3>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    food.veg
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {food.veg ? "VEG" : "NON VEG"}
                </span>

              </div>

              <div className="flex items-center gap-2 mt-4">

                <Star
                  className="text-yellow-400 fill-yellow-400"
                  size={18}
                />

                {food.rating}

              </div>

              <div className="flex justify-between items-center mt-6">

                <div>

                  <p className="text-3xl font-black text-green-400">

                    ₹{food.price}

                  </p>

                  <p className="text-gray-400">

                    ⏱ {food.prepTime}

                  </p>

                </div>

                <button
                  onClick={() => navigate("/menu")}
                  className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold"
                >
                  Order
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}