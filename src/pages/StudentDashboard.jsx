import Navbar from "../components/ui/Navbar";
import Greeting from "../components/student/Greeting";
import QueueCard from "../components/student/QueueCard";
import AISuggestion from "../components/student/AISuggestion";
import TrendingFoods from "../components/student/TrendingFoods";
import QuickActions from "../components/student/QuickActions";
import WalletCard from "../components/student/WalletCard";
import SpecialCard from "../components/student/SpecialCard";
import MenuGrid from "../components/student/MenuGrid";
import QueuePrediction from "../components/Student/QueuePrediction";

export default function StudentDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white pt-28 pb-16 px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <Greeting />

          <div className="mt-8">
            <AISuggestion />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

            <QueueCard />

            <WalletCard />

          </div>

          <div className="mt-8">
            <SpecialCard />
          </div>

          <div className="mt-8">
            <TrendingFoods />
          </div>

          <div className="mt-8">
            <QuickActions />
          </div>

          <div className="mt-8">
            <QueuePrediction />
          </div>

          <div className="mt-10">
            <MenuGrid />
          </div>

        </div>

      </div>

    </>
  );
}