import React from 'react';
import { Link } from 'react-router-dom';
// import as from './'
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-48 -right-48 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 left-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <nav className="relative z-10 flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-white tracking-wider">DailyDrift</div>
        <button className="px-6 py-2 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition-all">
          <Link to="./Login">Login</Link>
        </button>
      </nav>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Transform Your Habits
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-2xl">
          Build lasting habits, achieve your goals, and get rewarded for your consistency
        </p>
        <button className="px-8 py-4 text-lg font-medium text-purple-900 bg-white rounded-full 
          hover:bg-purple-100 transform hover:-translate-y-1 transition-all duration-200 
          shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
          Start Your Journey
        </button>
      </main>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-purple-100">Monitor your daily achievements and growth</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
          <p className="text-purple-100">Get rewarded for maintaining streaks</p>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white text-center">
          <h3 className="text-xl font-semibold mb-2">Unlock Rewards</h3>
          <p className="text-purple-100">Convert points into exciting rewards</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;