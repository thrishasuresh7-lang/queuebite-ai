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

      <div className="min-h-screen bg-slate-900 text-white p-8">

        <Greeting />

        <AISuggestion />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <QueueCard />
          <WalletCard />
        </div>

        <SpecialCard />

        <TrendingFoods />

        <QuickActions />

        <QueuePrediction />

        <MenuGrid />

      </div>
    </>
  );
}