import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-center px-4">

      <h1 className="text-6xl font-extrabold text-orange-500">
        CampusEats AI
      </h1>

      <p className="text-2xl text-gray-300 mt-6">
        Smart Queue. Faster Food.
      </p>

      <p className="text-gray-400 mt-3 max-w-xl">
        Skip the queue, order smarter, and collect your food exactly
        when it's ready using AI-powered queue prediction.
      </p>

      <div className="flex gap-6 mt-10">

        <button
          onClick={() => navigate("/student-login")}
          className="bg-orange-500 px-8 py-3 rounded-xl hover:bg-orange-600 transition"
        >
          Student Login
        </button>

        <button
          onClick={() => navigate("/admin-login")}
          className="border border-orange-500 px-8 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition"
        >
          Admin Login
        </button>

      </div>

    </section>
  );
}