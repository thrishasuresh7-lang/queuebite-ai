export default function Greeting() {

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div className="mb-8">

      <h1 className="text-4xl font-bold">
        {greeting},
        <span className="text-orange-500"> Thrisha 👋</span>
      </h1>

      <p className="text-gray-400 mt-2">
        Ready for some delicious food today?
      </p>

    </div>
  );
}