export default function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-orange-500
        hover:bg-orange-600
        transition
        duration-300
        px-5
        py-3
        rounded-2xl
        font-semibold
        shadow-lg
        hover:scale-105
        ${className}
      `}
    >
      {children}
    </button>
  );
}