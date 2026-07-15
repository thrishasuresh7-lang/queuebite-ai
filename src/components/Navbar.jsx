import { Link } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/30">
            <UtensilsCrossed className="text-white" size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-white">
              Queue<span className="text-orange-500">Bite</span>
            </h1>

            <p className="text-xs text-gray-400">
              AI Food Ordering
            </p>
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="#features" className="hover:text-orange-500 transition">
            Features
          </a>

          <a href="#stats" className="hover:text-orange-500 transition">
            Statistics
          </a>

        </div>

        {/* Login */}
        <Link
          to="/student-login"
          className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl font-semibold transition shadow-lg shadow-orange-500/30"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}