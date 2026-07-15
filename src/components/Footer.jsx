import { UtensilsCrossed } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-14">

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="flex items-center gap-4">

          <div className="bg-orange-500 p-3 rounded-xl">

            <UtensilsCrossed className="text-white" />

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              Queue<span className="text-orange-500">Bite AI</span>
            </h2>

            <p className="text-gray-400 text-sm">
              Smart Campus Food Ordering
            </p>

          </div>

        </div>

        <div className="text-gray-400 text-center">

          © 2026 QueueBite AI

          <br />

          Developed by <span className="text-orange-500 font-semibold">Thrisha M S</span>

        </div>

      </div>

    </footer>
  );
}