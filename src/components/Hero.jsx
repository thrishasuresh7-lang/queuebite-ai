import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Clock3,
  Brain,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center pt-28">

        {/* LEFT SIDE */}

        <div>

          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full">

            <Sparkles size={18} />

            AI Powered Campus Food Ordering

          </div>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight mt-8">

            Skip The

            <br />

            <span className="text-orange-500">
              Queue.
            </span>

            <br />

            Enjoy Every Bite.

          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-9">

            QueueBite AI lets students order food instantly,

            predict waiting time using AI,

            and collect meals without standing in long queues.

          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <button
              onClick={() => navigate("/student-login")}
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-bold flex items-center gap-2 transition shadow-lg shadow-orange-500/30"
            >
              Order Food

              <ArrowRight size={20} />

            </button>

            <button
              onClick={() => navigate("/admin-login")}
              className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-2xl text-lg font-bold transition"
            >
              Admin Portal
            </button>

          </div>

          {/* Features */}

          <div className="grid grid-cols-3 gap-5 mt-14">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <Clock3 className="text-orange-500 mb-3" />

              <h3 className="font-bold">

                Live Queue

              </h3>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <Brain className="text-orange-500 mb-3" />

              <h3 className="font-bold">

                AI Prediction

              </h3>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

              <Sparkles className="text-orange-500 mb-3" />

              <h3 className="font-bold">

                Smart Ordering

              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">

          {/* Main Image */}

          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700"
            alt="Pizza"
            className="rounded-[40px] shadow-2xl border-4 border-slate-800 w-[500px] object-cover"
          />

          {/* Floating Cards */}

          <div className="absolute -left-8 top-10 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-xl">

            🍔

            <p className="font-bold mt-2">

              25+ Foods

            </p>

          </div>

          <div className="absolute -right-10 bottom-20 bg-orange-500 text-white p-5 rounded-2xl shadow-xl">

            🤖

            <p className="font-bold">

              AI Queue

            </p>

            <p>

              2 min wait

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}