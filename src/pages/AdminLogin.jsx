import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "queuebite123") {
    localStorage.setItem("adminLoggedIn", "true");
    navigate("/admin-dashboard");
}else {toast.error("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">

      <div className="bg-slate-800 rounded-3xl p-10 w-full max-w-md shadow-xl">

        <h1 className="text-4xl font-bold text-orange-500 text-center">
          👨‍🍳 Admin Login
        </h1>

        <p className="text-gray-400 text-center mt-2">
          QueueBite AI Admin Portal
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-700 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-700 text-white outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl text-xl font-bold"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}