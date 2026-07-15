import MenuHeader from "../components/student/MenuHeader";
import Searchbar from "../components/student/Searchbar";
import CategoryFilter from "../components/student/CategoryFilter";
import FoodGrid from "../components/student/FoodGrid";
import AIRecommendation from "../components/menu/AIRecommendation";

export default function Menu() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6 lg:px-10">

      <div className="max-w-7xl mx-auto">

        <MenuHeader />

        <div className="mt-8">
          <Searchbar />
        </div>

        <div className="mt-8">
          <CategoryFilter />
        </div>

        <div className="mt-8">
          <AIRecommendation />
        </div>

        <div className="mt-10">
          <FoodGrid />
        </div>

      </div>

    </div>
  );
}