import { Search, SlidersHorizontal } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="mt-8 flex gap-4">

      {/* Search Box */}

      <div className="flex-1 relative">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search for burgers, pizza, biryani..."
          className="w-full bg-slate-900 border border-slate-700 rounded-2xl py-4 pl-14 pr-5 text-lg placeholder:text-gray-500 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
        />

      </div>

      {/* Filter Button */}

      <button
        className="bg-slate-900 border border-slate-700 hover:border-orange-500 hover:bg-slate-800 rounded-2xl px-6 transition-all"
      >
        <SlidersHorizontal
          size={24}
          className="text-orange-500"
        />
      </button>

    </div>
  );
}