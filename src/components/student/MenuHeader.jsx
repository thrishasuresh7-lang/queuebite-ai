import { ChefHat, Sparkles, UtensilsCrossed } from "lucide-react";

export default function MenuHeader() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-8 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">

            <Sparkles size={18} />

            Freshly Prepared Everyday

          </div>

          <h1 className="text-5xl font-black text-white mt-6">

            🍽 Campus Menu

          </h1>

          <p className="text-white/90 text-lg mt-5 max-w-2xl leading-8">

            Discover freshly prepared meals, snacks and beverages.
            Place your order in seconds and let QueueBite AI predict
            the best pickup time for you.

          </p>

        </div>

        {/* Right */}

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 min-w-[260px]">

          <div className="flex items-center gap-3">

            <ChefHat size={28} />

            <h2 className="text-2xl font-bold">
              Today's Kitchen
            </h2>

          </div>

          <div className="space-y-4 mt-6">

            <div className="flex justify-between">

              <span>Items Available</span>

              <span className="font-bold">
                17
              </span>

            </div>

            <div className="flex justify-between">

              <span>Chef's Pick</span>

              <span className="font-bold">
                Paneer Biryani
              </span>

            </div>

            <div className="flex justify-between">

              <span>Status</span>

              <span className="text-green-300 font-bold">

                🟢 Open

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}