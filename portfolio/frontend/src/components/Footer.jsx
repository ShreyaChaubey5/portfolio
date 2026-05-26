import React from 'react';

export default function Footer({ name }) {
  return (
    <footer className="border-t border-purple-950/20 py-12 text-center text-[11px] text-slate-600 font-mono bg-[#040209] mt-24">
      Designed & Built by {name} • 2026
    </footer>
  );
}