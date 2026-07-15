import { Brain, Sparkles, Clock3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AISuggestion() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 p-8 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="flex-1">

          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">

            <Brain size={18} />

            <span className="font-semibold">
              QueueBite AI Assistant
            </span>

          </div>

          <h2 className="text-4xl font-black text-white mt-6">
            Perfect Time to Order 🍔
          </h2>

          <p className="text-blue-100 mt-5 text-lg leading-8 max-w-2xl">
            Based on today's canteen activity,
            the queue is currently very low.
            Ordering now can reduce your waiting
            time by nearly <strong>60%</strong>.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-8 bg-white text-blue-700 hover:bg-slate-100 px-7 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105 shadow-lg"
          >
            Order Now

            <ArrowRight size={20} />

          </button>

        </div>

        {/* Right */}

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 min-w-[280px]">

          <h3 className="text-xl font-bold flex items-center gap-2">

            <Sparkles size={22} />

            AI Analysis

          </h3>

          <div className="space-y-5 mt-6">

            <div className="flex justify-between">

              <span>Queue Status</span>

              <span className="text-green-300 font-bold">
                Low
              </span>

            </div>

            <div className="flex justify-between">

              <span>Estimated Wait</span>

              <span className="font-bold flex items-center gap-2">

                <Clock3 size={16} />

                2 min

              </span>

            </div>

            <div className="flex justify-between">

              <span>Recommendation</span>

              <span className="text-yellow-300 font-bold">
                Order Now
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}