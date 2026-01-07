
import React from 'react';

interface HeaderProps {
  onShowProven: () => void;
}
const Header: React.FC<HeaderProps> = ({onShowProven}) => {
  return (
    <header className="bg-gradient-to-b from-[#1a1f26] to-[#0c0e12] border-b border-[#d4af37]/30 py-6 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#8b6b02] rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <span className="text-black font-cinzel font-black text-2xl -rotate-45">A</span>
          </div>
          <div>
            <h1 className="text-2xl font-cinzel font-black tracking-widest text-[#d4af37]">
              AOE MOBILE <span className="text-slate-200">STRATEGIST</span>
            </h1>
            <p className="text-[10px] tracking-[0.2em] text-slate-500 font-bold uppercase">
              Tactical Roster Optimizer
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold tracking-wider text-slate-400">
          <button
              onClick={onShowProven}
              className="hover:text-[#d4af37] transition-colors uppercase tracking-widest font-black flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Recommended
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
