import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function StudentLogin() {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (studentId && password) {
      navigate("/student-dashboard");
    } else {
      toast.error("Please enter Student ID and Password.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <div className="bg-slate-800 p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-orange-500 text-center">
          CampusEats AI
        </h1>

        <p className="text-gray-300 text-center mt-2">
          Welcome Back 👋
        </p>

        <div className="mt-8">

          <label className="text-white">
            Student ID / USN
          </label>

          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-orange-500"
          />

        </div>

        <div className="mt-6">

          <label className="text-white">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-orange-500"
          />

        </div>

        <div className="text-right mt-2">

          <button className="text-orange-400 hover:underline text-sm">
            Forgot Password?
          </button>

        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-8 transition"
        >
          Login
        </button>

      </div>

    </div>
  );
}