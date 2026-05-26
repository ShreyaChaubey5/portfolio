import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home'); // Page controller state

  useEffect(() => {
  fetch('/api/portfolio')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching portfolio telemetry:", err);
      setLoading(false);
    });
}, []);

  // Sleek cosmic loading placeholder while fetching your profile json
  if (loading) {
    return (
      <div className="min-h-screen bg-[#07030e] text-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Graceful fallback error screen if the backend server is offline
  if (!data) {
    return (
      <div className="min-h-screen bg-[#07030e] text-red-400 flex items-center justify-center font-mono text-sm px-6 text-center">
        ⚠️ Failed to compile portfolio stream. Ensure your local node backend is hosted and running on port 5000.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07030e] text-slate-200 font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden">
      
      {/* 🌌 CONSTANT BACKGROUND GLOW LAYER */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* STICKY GLASSMORPHIC NAVBAR */}
      <Navbar activePage={activePage} setActivePage={setActivePage} email={data.personalInfo.email} />

      {/* CORE ROUTING TREE */}
      <main className="relative z-10">
        {activePage === 'home' && (
          <div className="max-w-6xl mx-auto px-6 py-12">
            <Home data={data} setActivePage={setActivePage} />
          </div>
        )}
        
        {activePage === 'projects' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <Projects data={data} />
          </div>
        )}
        
        {activePage === 'experience' && (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <Experience data={data} />
          </div>
        )}
      </main>

      {/* SYSTEM WIDE FOOTER */}
      <Footer name={data.personalInfo.name} />
    </div>
  );
}