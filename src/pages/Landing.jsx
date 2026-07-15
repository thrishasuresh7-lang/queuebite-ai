import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <Footer />

    </div>
  );
}