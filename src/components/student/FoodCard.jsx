import toast from "react-hot-toast";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  Heart,
  Star,
  Clock3,
  ShoppingCart,
} from "lucide-react";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-xl hover:border-orange-500 hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300">

      {/* Trending Badge */}

      {food.trending && (
        <div className="absolute top-4 left-4 z-20 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">

          🔥 Trending

        </div>
      )}

      {/* Favourite */}

      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full transition hover:scale-110"
      >
        <Heart
          size={18}
          className={
            liked
              ? "fill-red-500 text-red-500"
              : "text-slate-700"
          }
        />
      </button>

      {/* Image */}

      <div className="overflow-hidden">

        <img
          src={food.image}
          alt={food.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <div className="flex justify-between items-start">

          <h2 className="text-2xl font-bold">

            {food.name}

          </h2>

          <span
            className={`text-xs px-3 py-1 rounded-full font-bold ${
              food.veg
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {food.veg ? "VEG" : "NON VEG"}
          </span>

        </div>

        {/* Rating */}

        <div className="flex justify-between items-center mt-5">

          <div className="flex items-center gap-2">

            <Star
              className="fill-yellow-400 text-yellow-400"
              size={18}
            />

            {food.rating}

          </div>

          <div className="flex items-center gap-2 text-gray-400">

            <Clock3 size={18} />

            {food.prepTime}

          </div>

        </div>

        {/* Price */}

        <div className="flex justify-between items-center mt-7">

          <div>

            <p className="text-gray-400 text-sm">

              Price

            </p>

            <h3 className="text-3xl font-black text-orange-400">

              ₹{food.price}

            </h3>

          </div>

          <button
           onClick={() => {
  addToCart(food);
  toast.success(`${food.name} added to cart!`);
}}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 px-5 py-3 rounded-2xl font-bold flex items-center gap-2 transition"
          >

            <ShoppingCart size={18} />

            Add

          </button>

        </div>

      </div>

    </div>
  );
}