import { useState } from "react";

const categories = [
  { name: "All", icon: "🍽" },
  { name: "Breakfast", icon: "🥞" },
  { name: "Lunch", icon: "🍛" },
  { name: "Snacks", icon: "🍔" },
  { name: "Drinks", icon: "🥤" },
];

export default function CategoryFilter() {
  const [selected, setSelected] = useState("All");

  return (
    <section className="mt-8">

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-2xl font-bold">
            Browse Categories
          </h2>

          <p className="text-gray-400 mt-1">
            Choose your favourite category
          </p>

        </div>

      </div>

      <div className="flex flex-wrap gap-4">

        {categories.map((category) => (

          <button
            key={category.name}
            onClick={() => setSelected(category.name)}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 font-semibold ${
              selected === category.name
                ? "bg-orange-500 border-orange-500 text-white shadow-lg shadow-orange-500/30"
                : "bg-slate-900 border-slate-700 hover:border-orange-500 hover:-translate-y-1"
            }`}
          >

            <span className="text-2xl">
              {category.icon}
            </span>

            {category.name}

          </button>

        ))}

      </div>

    </section>
  );
}