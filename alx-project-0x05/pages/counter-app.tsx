// pages/counter-app.tsx
import { useCount } from "@/context/CountContext";

const CounterApp: React.FC = () => {
  const { count, increment, decrement } = useCount();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white pt-16">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">🤖 Fun Counter App 🎉</h1>

      {/* Funny message */}
      <p className="text-lg font-medium mb-4 text-center">
        Current count: {count} {count === 0 ? "🙈 No clicks yet!" : count % 10 === 0 && count !== 0 ? "🔥 You're on fire!" : ""}
      </p>

      {/* Counter Display */}
      <div className="text-6xl md:text-8xl font-bold mb-8 bg-white/20 rounded-full w-40 h-40 flex items-center justify-center backdrop-blur-sm">
        {count}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105 active:scale-95"
        >
          Increment 🚀
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105 active:scale-95"
        >
          Decrement 👎
        </button>
      </div>

      {/* Footer message */}
      <p className="mt-8 text-sm text-white opacity-75 text-center max-w-md">
        Keep clicking, who knows what happens at 100? 😏
        <br />
        <span className="text-xs">The count is shared globally across the app!</span>
      </p>
    </div>
  );
}

export default CounterApp;