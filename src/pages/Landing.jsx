import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

export default function Landing() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}