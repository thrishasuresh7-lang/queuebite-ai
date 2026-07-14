import { Bell, ShoppingCart, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        <Link to="/" className="text-3xl font-bold text-orange-500">
          🍔 QueueBite AI
        </Link>

        <div className="flex items-center gap-8">

          <Link
            to="/student-dashboard"
            className="hover:text-orange-500 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/menu"
            className="hover:text-orange-500 transition"
          >
            Menu
          </Link>

          <Link
            to="/cart"
            className="relative hover:text-orange-500 transition"
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-orange-500 rounded-full w-5 h-5 text-xs flex items-center justify-center">
              0
            </span>
          </Link>

          <Bell className="cursor-pointer" size={22} />

          <UserCircle2 size={30} className="cursor-pointer" />

        </div>

      </div>

    </nav>
  );
}