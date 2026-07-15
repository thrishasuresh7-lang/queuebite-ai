import foods from "../../data/foods";
import { Brain, Sparkles, Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AIRecommendation() {
  const navigate = useNavigate();

  const recommendedFoods = [...foods]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="mt-10">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-8 shadow-2xl">

        {/* Background Glow */}

        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative">

          {/* Header */}

          <div className="flex flex-col lg:flex-row justify-between gap-8">

            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">

                <Brain size={18} />

                QueueBite AI Assistant

              </div>

              <h2 className="text-5xl font-black text-white mt-6">
                AI Recommended For You
              </h2>

              <p className="text-blue-100 mt-5 text-lg max-w-2xl leading-8">
                Based on customer ratings, popularity and preparation
                time, these are today's best choices.
              </p>

            </div>

            <button
              onClick={() => navigate("/menu")}
              className="self-start bg-white text-indigo-700 hover:bg-slate-100 px-6 py-4 rounded-2xl font-bold flex items-center gap-2 transition hover:scale-105"
            >
              Explore Menu

              <ArrowRight size={20} />

            </button>

          </div>

          {/* Food Cards */}

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            {recommendedFoods.map((food) => (

              <div
                key={food.id}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:-translate-y-2"
              >

                <img
                  src={food.image}
                  alt={food.name}
                  className="w-full h-52 object-cover"
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
                      className="fill-yellow-400 text-yellow-400"
                      size={18}
                    />

                    <span className="font-semibold">

                      {food.rating}

                    </span>

                  </div>

                  <div className="flex justify-between items-center mt-6">

                    <div>

                      <p className="text-3xl font-black text-green-300">

                        ₹{food.price}

                      </p>

                      <p className="text-blue-100">

                        ⏱ {food.prepTime}

                      </p>

                    </div>

                    <div className="bg-white/10 p-3 rounded-xl">

                      <Sparkles
                        className="text-yellow-300"
                        size={22}
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}