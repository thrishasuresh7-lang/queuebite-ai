import { Sparkles, Sun } from "lucide-react";

export default function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let message = "Enjoy your dinner with zero waiting.";

  if (hour < 12) {
    greeting = "Good Morning";
    message = "Start your day with a delicious breakfast.";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    message = "Lunch is ready. Skip the queue and order instantly.";
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 shadow-xl">

      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left Side */}
        <div>

          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full mb-5">

            <Sparkles size={18} />

            AI Smart Dashboard

          </div>

          <h1 className="text-5xl font-black leading-tight">

            {greeting},

            <span className="text-orange-500">
              {" "}Thrisha 👋
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl leading-8">
            {message}
          </p>

        </div>

        {/* Right Side */}

        <div className="bg-slate-800 border border-slate-700 rounded-2xl px-8 py-6 flex items-center gap-5">

          <div className="bg-orange-500 p-4 rounded-2xl">

            <Sun className="text-white" size={32} />

          </div>

          <div>

            <p className="text-gray-400">
              Today's Status
            </p>

            <h2 className="text-2xl font-bold text-green-400">
              🟢 Canteen Open
            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}