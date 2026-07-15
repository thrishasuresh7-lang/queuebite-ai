import {
  Users,
  UtensilsCrossed,
  ShoppingBag,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Happy Students",
    value: "5000+",
    icon: <Users size={42} />,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Food Items",
    value: "25+",
    icon: <UtensilsCrossed size={42} />,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Orders Served",
    value: "10K+",
    icon: <ShoppingBag size={42} />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Average Wait",
    value: "2 min",
    icon: <Clock3 size={42} />,
    color: "from-pink-500 to-rose-500",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="bg-slate-950 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Trusted Across Campus
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            QueueBite AI in Numbers
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Thousands of students use QueueBite AI every week to
            skip queues, order faster and enjoy a smarter canteen
            experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className="group relative bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 overflow-hidden"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white shadow-lg`}
              >
                {stat.icon}
              </div>

              <h3 className="text-5xl font-black mt-8 text-white">
                {stat.value}
              </h3>

              <p className="text-gray-400 mt-3 text-lg">
                {stat.title}
              </p>

              <div className="absolute right-0 bottom-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}