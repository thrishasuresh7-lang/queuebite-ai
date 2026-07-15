import { Star, Flame, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SpecialCard() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden mt-8 rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-8 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Left Side */}
        <div className="flex-1">

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">

            <Star size={18} />

            Chef's Recommendation

          </div>

          <h2 className="text-5xl font-black text-white mt-6">
            Today's Special 🍛
          </h2>

          <h3 className="text-3xl font-bold mt-4">
            Paneer Biryani
          </h3>

          <p className="mt-5 text-lg text-white/90 max-w-xl leading-8">
            Freshly prepared with aromatic basmati rice,
            rich spices and soft paneer cubes.
            Limited quantity available today.
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-8 bg-white text-orange-600 hover:bg-slate-100 px-7 py-4 rounded-2xl font-bold flex items-center gap-3 transition hover:scale-105"
          >
            Order Now

            <ArrowRight size={20} />

          </button>

        </div>

        {/* Right Side */}

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 min-w-[260px]">

          <div className="flex items-center gap-3">

            <Flame className="text-red-500" />

            <h3 className="text-2xl font-bold">
              Limited Offer
            </h3>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between">

              <span>Price</span>

              <span className="font-bold">
                ₹149
              </span>

            </div>

            <div className="flex justify-between">

              <span>Discount</span>

              <span className="text-green-300 font-bold">
                20%
              </span>

            </div>

            <div className="flex justify-between">

              <span>Rating</span>

              <span className="text-yellow-300 font-bold">
                ⭐ 4.9
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}