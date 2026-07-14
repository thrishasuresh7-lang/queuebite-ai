export default function Input(props) {
  return (
    <input
      {...props}
      className="
      w-full
      bg-slate-800
      border
      border-slate-700
      rounded-2xl
      px-5
      py-3
      outline-none
      focus:border-orange-500
      transition
      "
    />
  );
}