import { Users, Clock3, Activity } from "lucide-react";

export default function QueueCard() {
  const queue = 8;
  const averageWait = 6;

  return (
    <div className="relative overflow-hidden bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/20 blur-3xl rounded-full"></div>

      <div className="relative">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>

            <p className="text-gray-400 text-sm uppercase tracking-widest">
              Live Queue
            </p>

            <h2 className="text-3xl font-black mt-2">
              Queue Status
            </h2>

          </div>

          <div className="bg-orange-500 p-4 rounded-2xl shadow-lg shadow-orange-500/30">

            <Users className="text-white" size={30} />

          </div>

        </div>

        {/* Queue Count */}

        <div className="mt-10">

          <p className="text-gray-400">
            Students Waiting
          </p>

          <h1 className="text-6xl font-black text-orange-500 mt-2">
            {queue}
          </h1>

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="flex justify-between text-sm text-gray-400 mb-2">

            <span>Queue Load</span>

            <span>40%</span>

          </div>

          <div className="w-full bg-slate-700 rounded-full h-3">

            <div
              className="bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full"
              style={{ width: "40%" }}
            ></div>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-800 rounded-2xl p-5">

            <div className="flex items-center gap-3">

              <Clock3 className="text-orange-500" />

              <div>

                <p className="text-gray-400 text-sm">
                  Avg Wait
                </p>

                <h3 className="text-2xl font-bold mt-1">
                  {averageWait} min
                </h3>

              </div>

            </div>

          </div>

          <div className="bg-slate-800 rounded-2xl p-5">

            <div className="flex items-center gap-3">

              <Activity className="text-green-400" />

              <div>

                <p className="text-gray-400 text-sm">
                  Status
                </p>

                <h3 className="text-2xl font-bold mt-1 text-green-400">
                  Low
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}