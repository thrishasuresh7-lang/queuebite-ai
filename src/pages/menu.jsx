import MenuHeader from "../components/Student/MenuHeader";
import Searchbar from "../components/Student/Searchbar";
import CategoryFilter from "../components/Student/CategoryFilter";
import FoodGrid from "../components/Student/FoodGrid";
import AIRecommendation from "../components/Menu/AIRecommendation";

export default function Menu() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <MenuHeader />

      <Searchbar />

      <CategoryFilter />

      <AIRecommendation />

      <FoodGrid />

    </div>
  );
}