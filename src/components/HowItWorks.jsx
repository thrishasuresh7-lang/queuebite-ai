import {
  ShoppingCart,
  Brain,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: <ShoppingCart size={42} />,
    title: "Order Food",
    text: "Browse the menu and place your order in seconds.",
  },
  {
    icon: <Brain size={42} />,
    title: "AI Predicts Queue",
    text: "QueueBite AI estimates waiting time instantly.",
  },
  {
    icon: <CheckCircle size={42} />,
    title: "Collect Food",
    text: "Pick up your food exactly when it's ready.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24 px-8">

      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Process
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            How QueueBite AI Works
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative bg-slate-900 rounded-3xl border border-slate-800 p-10 text-center hover:border-orange-500 transition-all"
            >

              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold">

                {index + 1}

              </div>

              <div className="flex justify-center text-orange-500 mt-4">

                {step.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {step.title}

              </h3>

              <p className="text-gray-400 mt-5">

                {step.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}