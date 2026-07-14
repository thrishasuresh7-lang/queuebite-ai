export default function CategoryFilter() {
  return (
    <div className="flex gap-4 mt-6">

      <button className="bg-orange-500 px-4 py-2 rounded-lg">
        All
      </button>

      <button className="bg-slate-800 px-4 py-2 rounded-lg">
        Breakfast
      </button>

      <button className="bg-slate-800 px-4 py-2 rounded-lg">
        Lunch
      </button>

      <button className="bg-slate-800 px-4 py-2 rounded-lg">
        Snacks
      </button>

      <button className="bg-slate-800 px-4 py-2 rounded-lg">
        Drinks
      </button>

    </div>
  );
}