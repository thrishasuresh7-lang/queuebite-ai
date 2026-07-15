import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  UtensilsCrossed,
  MapPinned,
  ShoppingCart,
  History,
  ArrowRight,
} from "lucide-react";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Browse Menu",
      subtitle: "Explore delicious food",
      icon: <UtensilsCrossed size={30} />,
      color: "from-orange-500 to-amber-500",
      action: () => navigate("/menu"),
    },
    {
      title: "Track Order",
      subtitle: "Live order status",
      icon: <MapPinned size={30} />,
      color: "from-cyan-500 to-blue-600",
      action: () => navigate("/tracking"),
    },
    {
      title: "My Cart",
      subtitle: "View selected items",
      icon: <ShoppingCart size={30} />,
      color: "from-green-500 to-emerald-600",
      action: () => navigate("/cart"),
    },
    {
      title: "Order History",
      subtitle: "Previous orders",
      icon: <History size={30} />,
      color: "from-pink-500 to-rose-600",
      action: () => toast("📜 Order History Coming Soon"),
    },
  ];

  return (
    <section className="mt-10">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-black">
            ⚡ Quick Actions
          </h2>

          <p className="text-gray-400 mt-2">
            Access everything in one tap
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {actions.map((item) => (

          <button
            key={item.title}
            onClick={item.action}
            className="group bg-slate-900 border border-slate-700 rounded-3xl p-6 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 text-left"
          >

            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold mt-6">

              {item.title}

            </h3>

            <p className="text-gray-400 mt-3">

              {item.subtitle}

            </p>

            <div className="flex items-center gap-2 mt-6 text-orange-500 font-semibold">

              Open

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </div>

          </button>

        ))}

      </div>

    </section>
  );
}