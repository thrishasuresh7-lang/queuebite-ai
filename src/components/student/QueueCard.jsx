export default function QueueCard() {
  return (
    <div className="bg-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold">
        🟢 Queue Status
      </h2>

      <p className="text-5xl font-bold mt-5 text-orange-500">
        8
      </p>

      <p className="text-gray-400">
        Students Waiting
      </p>

      <p className="mt-5">
        Average Wait
      </p>

      <p className="text-2xl font-bold">
        6 mins
      </p>

    </div>
  );
}