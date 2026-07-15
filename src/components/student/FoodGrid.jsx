import foods from "../../data/foods";
import FoodCard from "./FoodCard";

export default function FoodGrid() {
  return (
    <section className="mt-12">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-4xl font-black">
            🍔 Explore Menu
          </h2>

          <p className="text-gray-400 mt-2">
            Freshly prepared food made every day
          </p>

        </div>

        <span className="bg-orange-500 px-5 py-2 rounded-full font-bold">
          {foods.length} Items
        </span>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {foods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}

      </div>

    </section>
  );
}