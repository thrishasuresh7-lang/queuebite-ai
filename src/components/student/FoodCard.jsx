import { useCart } from "../../context/CartContext";
import { Heart, Star, Clock3 } from "lucide-react";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-500/40 hover:-translate-y-2 transition-all duration-300">

      {/* Trending Badge */}
      {food.trending && (
        <div className="absolute top-3 left-3 z-20 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          🔥 Trending
        </div>
      )}

      {/* Favourite Button */}
      <button className="absolute top-3 right-3 z-20 bg-white/90 p-2 rounded-full hover:bg-red-500 hover:text-white transition">
        <Heart size={18} />
      </button>

      {/* Food Image */}
      <div className="overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Card Body */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-white">
          {food.name}
        </h2>

        <div className="flex justify-between items-center mt-3 text-gray-300">
          <div className="flex items-center gap-1">
            <Star size={18} className="text-yellow-400 fill-yellow-400" />
            <span className="font-semibold">{food.rating}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock3 size={18} className="text-cyan-400" />
            <span>{food.prepTime}</span>
          </div>
        </div>

        <div className="mt-4">
          {food.veg ? (
            <span className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              🟢 Veg
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              🔴 Non Veg
            </span>
          )}
        </div>

        <div className="mt-6">
  <h3 className="text-3xl font-bold text-orange-400 mb-4">
    ₹{food.price}
  </h3>

  <button
  onClick={() => {
    addToCart(food);
    alert(`${food.name} added to cart!`);
  }}
  className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition px-6 py-2 rounded-xl font-semibold shadow-lg"
>
  Add to Cart
</button>
</div>
        </div>
      </div>
    
  );
}