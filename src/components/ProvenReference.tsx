
import React from 'react';
import { TroopType, HeroRarity } from '../types';
import { HEROES, PROVEN_LINEUPS } from '../data/gameData';

const ProvenReference: React.FC = () => {
    const getTypeColor = (type: TroopType) => {
        switch(type) {
            case TroopType.CAVALRY: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case TroopType.SWORDSMEN: return 'text-red-400 bg-red-400/10 border-red-400/20';
            case TroopType.ARCHERS: return 'text-green-400 bg-green-400/10 border-green-400/20';
            case TroopType.PIKEMEN: return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
            default: return 'text-slate-400';
        }
    };

    return (
        <div className="space-y-10 pb-12">
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 p-6 rounded-2xl">
                <h2 className="text-[#d4af37] font-cinzel font-black text-xl uppercase tracking-widest mb-2">Meta Reference Hall</h2>
                <p className="text-slate-400 text-xs leading-relaxed max-w-2xl">
                    These formations represent the current competitive peak in AOE Mobile. Use these as blueprints to guide your hero acquisition and development.
                    The Strategist will automatically prioritize these if you own the required heroes.
                </p>
            </div>

            {PROVEN_LINEUPS.map((proven, index) => (
                <div key={proven.id} className="bg-[#1a1f26] border border-[#d4af37]/40 rounded-3xl overflow-hidden shadow-2xl relative group">
                    <div className="absolute top-0 right-0 p-4">
                        <div className="bg-[#d4af37] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Meta S-Tier</div>
                    </div>

                    <div className="bg-gradient-to-r from-[#1e1a11] to-[#252b36] p-6 border-b border-[#2d3748] flex items-center gap-4">
                        <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#d4af37] text-black font-cinzel font-black border border-[#d4af37]">0{index + 1}</span>
                        <div>
                            <h3 className="text-xl font-cinzel font-black text-white tracking-widest uppercase">{proven.name}</h3>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border inline-block mt-1 ${getTypeColor(proven.type)}`}>
                Primary: {proven.type}
              </span>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {proven.heroIds.map((hId) => {
                                const hero = HEROES.find(h => h.id === hId);
                                return (
                                    <div key={hId} className="group relative">
                                        <div className={`relative aspect-[3/4.2] mb-3 overflow-hidden rounded-2xl border-2 shadow-2xl transition-all duration-500 ${
                                            hero?.rarity === HeroRarity.MYTHICAL ? 'border-red-600/60' : 'border-[#d4af37]/40'
                                        }`}>
                                            <img src={hero?.imageUrl} alt={hero?.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-2 left-2 right-2 text-center">
                                                <div className="text-white font-cinzel font-bold text-[9px] sm:text-xs uppercase truncate">{hero?.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="rounded-2xl p-5 border bg-[#d4af37]/5 border-[#d4af37]/20 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#d4af37]"></div>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                                <span className="text-[#d4af37] font-black uppercase text-[9px] mr-2 tracking-widest">Synergy Breakdown:</span>
                                {proven.reasoning}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProvenReference;
