
import React, { useState } from 'react';
import {type Hero, type UserHero, HeroRarity } from '../types';

interface HeroPickerProps {
  availableHeroes: Hero[];
  userHeroes: UserHero[];
  onAddHero: (hero: Hero) => void;
}

const HeroPicker: React.FC<HeroPickerProps> = ({ availableHeroes, userHeroes, onAddHero }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHeroes = availableHeroes.filter(hero => 
    hero.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !userHeroes.some(uh => uh.heroId === hero.id)
  );

  const getRarityColor = (rarity: HeroRarity) => {
    switch(rarity) {
      case HeroRarity.MYTHICAL: return 'bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.6)]';
      case HeroRarity.LEGENDARY: return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]';
      case HeroRarity.EPIC: return 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Filter Heroes..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#11161d] border border-[#2d3748] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all placeholder-slate-600"
        />
        <svg className="absolute right-4 top-3.5 w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
        {filteredHeroes.map(hero => (
          <button 
            key={hero.id}
            onClick={() => onAddHero(hero)}
            className="w-full flex items-center gap-3 p-3 bg-[#1a1f26] border border-transparent hover:border-[#d4af37]/30 hover:bg-[#252b36] rounded-xl transition-all text-left group"
          >
            <div className="relative flex-shrink-0">
                <img src={hero.imageUrl} alt={hero.name} className="w-14 h-14 rounded-lg object-cover border border-slate-700 shadow-lg" />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#1a1f26] ${getRarityColor(hero.rarity)}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-sm text-slate-200 group-hover:text-[#d4af37] transition-colors truncate">{hero.name}</div>
              <div className="flex flex-wrap gap-1 mt-1">
                {hero.troopTypes.map(t => (
                  <span key={t} className="text-[8px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800 uppercase font-black">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mt-1">
                {hero.specialties.map(s => (
                  <span key={s} className="text-[7px] text-[#d4af37]/70 font-bold uppercase tracking-tighter">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-slate-700 group-hover:text-[#d4af37] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroPicker;
