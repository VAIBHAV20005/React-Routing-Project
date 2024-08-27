import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Website</h1>
        <p className="text-gray-700 text-lg">This is a simple home page built with React and Tailwind CSS.</p>
      </header>

      <main className="mt-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </main>

      <footer className="mt-8 text-gray-600">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
