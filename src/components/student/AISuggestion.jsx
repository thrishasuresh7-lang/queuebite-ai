export default function AISuggestion() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-3xl shadow-lg mb-6">

      <h2 className="text-2xl font-bold text-white">
        🤖 AI Suggestion
      </h2>

      <p className="text-white mt-3">
        Queue is currently low.
      </p>

      <p className="text-white mt-2">
        This is the best time to place your order.
      </p>

      <button className="mt-5 bg-white text-blue-600 font-semibold px-6 py-2 rounded-xl hover:scale-105 transition">
        Order Now
      </button>

    </div>
  );
}