// pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to ALX Projects</h1>
      
      <div className="space-y-4">
        <Link href="/counter-app">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg transform hover:scale-105">
            Counter App (Redux)
          </button>
        </Link>
      </div>
    </div>
  );
}