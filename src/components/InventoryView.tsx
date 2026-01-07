
import React from 'react';
import {type UserHero, HeroRarity } from '../types';
import { HEROES, SKILLS, RINGS } from '../data/gameData';

interface InventoryViewProps {
  userHeroes: UserHero[];
  onRemove: (heroId: string) => void;
  onUpdate: (hero: UserHero) => void;
}

const InventoryView: React.FC<InventoryViewProps> = ({ userHeroes, onRemove, onUpdate }) => {
  if (userHeroes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-[#1a1f26]/50 rounded-2xl border-2 border-dashed border-[#2d3748]">
        <div className="w-20 h-20 bg-[#11161d] rounded-full flex items-center justify-center mb-6 shadow-inner">
          <svg className="w-10 h-10 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <p className="text-slate-500 font-cinzel font-bold text-xl uppercase tracking-widest">Roster Empty</p>
        <p className="text-slate-600 text-sm mt-2 max-w-xs text-center">Add heroes from your collection using the sidebar to begin strategy analysis.</p>
      </div>
    );
  }

  const getRarityTextClass = (rarity: HeroRarity) => {
    switch(rarity) {
      case HeroRarity.MYTHICAL: return 'text-red-500';
      case HeroRarity.LEGENDARY: return 'text-orange-400';
      case HeroRarity.EPIC: return 'text-purple-400';
      case HeroRarity.ELITE: return 'text-blue-400';
      case HeroRarity.RARE: return 'text-green-400';
      default: return 'text-slate-400';
    }
  };

  const handleSkillUpdate = (uh: UserHero, slotIndex: number, skillId: string, level?: number) => {
    const newSkills = [...uh.skills];
    const currentSkill = newSkills[slotIndex] || { skillId: '', level: 1 };
    
    newSkills[slotIndex] = {
      skillId: skillId !== undefined ? skillId : currentSkill.skillId,
      level: level !== undefined ? Math.min(40, Math.max(1, level)) : currentSkill.level
    };

    onUpdate({ ...uh, skills: newSkills });
  };

  const renderRankStars = (rank: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((starIdx) => {
          const fillPercentage = Math.max(0, Math.min(1, rank - (starIdx - 1)));
          return (
            <div key={starIdx} className="relative w-4 h-4">
              {/* Star Background (Empty) */}
              <svg className="absolute inset-0 text-slate-800" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {/* Star Fill */}
              <div 
                className="absolute inset-0 overflow-hidden" 
                style={{ width: `${fillPercentage * 100}%` }}
              >
                <svg className="w-4 h-4 text-[#d4af37] drop-shadow-[0_0_3px_rgba(212,175,55,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {userHeroes.map(uh => {
        const hero = HEROES.find(h => h.id === uh.heroId)!;
        const equippedRing = RINGS.find(r => r.id === uh.ringId);

        return (
          <div key={uh.heroId} className="bg-[#1a1f26] border border-[#2d3748] rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all group shadow-xl relative">
            <div className="flex p-5 gap-5">
              <div className="relative w-28 h-28 flex-shrink-0">
                <img src={hero.imageUrl} alt={hero.name} className="w-full h-full object-cover rounded-xl border border-[#2d3748] shadow-2xl" />
                <div className={`absolute -top-3 -left-3 text-black text-[11px] font-black px-2 py-0.5 rounded-lg border-2 border-[#1a1f26] shadow-lg ${
                  hero.rarity === HeroRarity.MYTHICAL ? 'bg-red-600' : 'bg-[#d4af37]'
                }`}>
                  LV {uh.level}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel font-black text-lg text-slate-100 group-hover:text-[#d4af37] transition-colors truncate">{hero.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {hero.troopTypes.map(t => (
                        <span key={t} className="text-[9px] bg-slate-900 text-slate-400 px-2 rounded font-black uppercase tracking-tighter border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-x-2 mt-1.5">
                      {hero.specialties.map(s => (
                        <span key={s} className="text-[8px] text-[#d4af37] font-bold uppercase tracking-wider">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => onRemove(uh.heroId)} className="text-slate-700 hover:text-red-500 transition-colors p-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-[10px] uppercase font-black text-slate-600 tracking-widest">Rank</label>
                        <div className="flex items-center gap-2">
                           {renderRankStars(uh.rank)}
                           <span className="text-[10px] font-black text-[#d4af37]">{uh.rank.toFixed(1)}</span>
                        </div>
                    </div>
                    <input 
                      type="range" min="0" max="5" step="0.2" value={uh.rank}
                      onChange={(e) => onUpdate({...uh, rank: parseFloat(e.target.value)})}
                      className="w-full h-1 bg-[#11161d] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                    />
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                  <div>
                      <label className="text-[9px] uppercase font-black text-slate-600 block mb-1 tracking-widest">Hero Level</label>
                      <input 
                          type="number" min="1" max="60" value={uh.level}
                          onChange={(e) => onUpdate({...uh, level: parseInt(e.target.value) || 1})}
                          className="w-full bg-[#11161d] border border-[#2d3748] rounded-lg px-3 py-1 text-xs text-slate-300 outline-none focus:ring-1 focus:ring-[#d4af37]/50"
                      />
                  </div>
                  <div>
                      <label className="text-[9px] uppercase font-black text-slate-600 block mb-1 tracking-widest">Ring Level</label>
                      <input 
                          type="number" min="1" max="20" value={uh.ringLevel || 1}
                          onChange={(e) => onUpdate({...uh, ringLevel: parseInt(e.target.value) || 1})}
                          className="w-full bg-[#11161d] border border-[#2d3748] rounded-lg px-3 py-1 text-xs text-slate-300 outline-none focus:ring-1 focus:ring-[#d4af37]/50"
                      />
                  </div>
              </div>

              {/* Skill Slots */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[0, 1].map(idx => {
                  const userSkill = uh.skills[idx] || { skillId: '', level: 1 };
                  const skillDef = SKILLS.find(s => s.id === userSkill.skillId);
                  return (
                    <div key={idx} className="space-y-2 p-3 bg-[#11161d]/50 rounded-xl border border-[#2d3748]/30">
                      <div className="flex justify-between items-center">
                          <label className="text-[9px] uppercase font-black text-slate-600 tracking-widest">Skill {idx + 1}</label>
                          {skillDef && (
                              <span className={`text-[8px] font-bold uppercase ${getRarityTextClass(skillDef.rarity)}`}>
                                  {skillDef.rarity}
                              </span>
                          )}
                      </div>
                      <div className="flex flex-col gap-2">
                          <select 
                              value={userSkill.skillId}
                              onChange={(e) => handleSkillUpdate(uh, idx, e.target.value)}
                              className="w-full bg-[#0c0e12] border border-[#2d3748] rounded px-2 py-1 text-[10px] outline-none text-slate-300 focus:border-[#d4af37]/50"
                          >
                              <option value="">Select Skill</option>
                              {SKILLS.map(s => (
                                  <option key={s.id} value={s.id}>{s.name}</option>
                              ))}
                          </select>
                          <div className="flex items-center justify-between gap-2">
                             <input 
                                type="range" min="1" max="40" value={userSkill.level}
                                onChange={(e) => handleSkillUpdate(uh, idx, userSkill.skillId, parseInt(e.target.value))}
                                className="flex-1 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
                             />
                             <span className="text-[10px] font-bold text-[#d4af37] min-w-[20px] text-right">L{userSkill.level}</span>
                          </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-1.5 border-t border-[#2d3748]/50 pt-3">
                <div className="flex justify-between items-center">
                    <label className="text-[10px] uppercase font-black text-slate-600 tracking-widest">Equipped Ring</label>
                    {equippedRing && (
                        <span className={`text-[9px] font-bold uppercase ${getRarityTextClass(equippedRing.rarity)}`}>
                            {equippedRing.rarity}
                        </span>
                    )}
                </div>
                <div className="flex gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-[#11161d] rounded-lg border border-[#2d3748] overflow-hidden flex items-center justify-center">
                      {equippedRing?.imageUrl ? (
                          <img src={equippedRing.imageUrl} className="w-full h-full object-contain" alt="" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-slate-800 rounded-full"></div>
                      )}
                    </div>
                    <select 
                        value={uh.ringId || ''}
                        onChange={(e) => onUpdate({...uh, ringId: e.target.value})}
                        className="flex-1 bg-[#11161d] border border-[#2d3748] rounded-lg px-3 py-1.5 text-[11px] outline-none text-slate-300 focus:border-[#d4af37]/50"
                    >
                        <option value="">No Ring Selected</option>
                        {RINGS.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                    </select>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InventoryView;
