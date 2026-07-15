import { Wallet, PlusCircle, CreditCard } from "lucide-react";

export default function WalletCard() {
  const balance = 250;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 rounded-3xl p-8 shadow-xl">

      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative">

        {/* Header */}
        <div className="flex justify-between items-center">

          <div>

            <p className="text-green-100 uppercase text-sm tracking-widest">
              Queue Wallet
            </p>

            <h2 className="text-3xl font-black mt-2 text-white">
              Wallet Balance
            </h2>

          </div>

          <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl">

            <Wallet className="text-white" size={30} />

          </div>

        </div>

        {/* Balance */}

        <div className="mt-10">

          <p className="text-green-100">
            Available Balance
          </p>

          <h1 className="text-6xl font-black text-white mt-2">
            ₹{balance}
          </h1>

        </div>

        {/* Bottom Buttons */}

        <div className="grid grid-cols-2 gap-4 mt-10">

          <button className="bg-white text-green-700 hover:bg-slate-100 rounded-2xl py-3 font-bold flex justify-center items-center gap-2 transition">

            <PlusCircle size={20} />

            Add Money

          </button>

          <button className="bg-green-900/40 border border-white/20 hover:bg-green-900/60 rounded-2xl py-3 font-bold flex justify-center items-center gap-2 transition">

            <CreditCard size={20} />

            History

          </button>

        </div>

      </div>

    </div>
  );
}