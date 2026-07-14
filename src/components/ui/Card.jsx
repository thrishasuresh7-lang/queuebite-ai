export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-slate-800/70
        backdrop-blur-xl
        border
        border-slate-700
        rounded-3xl
        shadow-xl
        p-6
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-orange-500/20
        ${className}
      `}
    >
      {children}
    </div>
  );
}