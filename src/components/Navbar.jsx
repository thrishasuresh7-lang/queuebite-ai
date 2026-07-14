export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6 absolute top-0 left-0">
      <h1 className="text-2xl font-bold text-orange-500">
        CampusEats AI
      </h1>

      <div className="flex gap-8 text-white">
        <a href="#" className="hover:text-orange-500 transition">
          Home
        </a>

        <a href="#" className="hover:text-orange-500 transition">
          Features
        </a>

        <a href="#" className="hover:text-orange-500 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}