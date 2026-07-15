import {
  Brain,
  Clock3,
  MapPinned,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI Queue Prediction",
    description:
      "Predict waiting time before placing your order and avoid unnecessary queues.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "Real-Time Order Tracking",
    description:
      "Track every stage of your order from preparation to pickup.",
  },
  {
    icon: <MapPinned size={40} />,
    title: "Smart Pickup",
    description:
      "Collect your food exactly when it's ready without waiting.",
  },
  {
    icon: <CreditCard size={40} />,
    title: "Easy Payments",
    description:
      "Pay using UPI, Card or Cash with a seamless checkout experience.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-slate-900 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="text-orange-500 uppercase tracking-widest font-semibold">
            Why QueueBite AI
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Smarter Than Traditional
            <br />
            Canteen Ordering
          </h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            QueueBite AI combines real-time order tracking,
            AI-powered queue prediction and smart food ordering
            into one seamless experience.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-orange-500 hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8 text-white">

                {feature.title}

              </h3>

              <p className="text-gray-400 mt-5 leading-8">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}