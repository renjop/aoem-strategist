import React from 'react';
import {type LineupRecommendation, HeroRarity, TroopType} from '../types';
import {HEROES} from '../data/gameData';

interface LineupDisplayProps {
    recommendations: LineupRecommendation[];
    loading: boolean;
}

const LineupDisplay: React.FC<LineupDisplayProps> = ({recommendations, loading}) => {
    if (loading) {
        return (
            <div
                className="flex flex-col items-center justify-center py-24 bg-[#1a1f26]/40 rounded-3xl border border-[#2d3748]">
                <div className="relative">
                    <div
                        className="w-20 h-20 border-4 border-[#d4af37]/20 border-t-[#d4af37] rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 bg-[#d4af37] rounded-lg rotate-45 animate-pulse"></div>
                    </div>
                </div>
                <p className="text-[#d4af37] font-cinzel font-black text-2xl mt-8 tracking-widest animate-pulse">Strategizing...</p>
                <p className="text-slate-500 text-sm mt-2 italic font-medium">Prioritizing Meta-Proven Formations</p>
            </div>
        );
    }

    if (recommendations.length === 0) {
        return (
            <div
                className="flex flex-col items-center justify-center py-24 bg-[#1a1f26]/40 rounded-3xl border-2 border-dashed border-[#2d3748]">
                <svg className="w-16 h-16 text-slate-700 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                <p className="text-slate-500 font-cinzel font-bold text-xl uppercase tracking-widest">Global Roster
                    Optimization</p>
                <p className="text-slate-600 text-sm mt-2 text-center max-w-xs">Deployment requires 15 heroes. Matches
                    will prioritize Top-Tier Meta lineups first.</p>
            </div>
        );
    }

    const getTypeColor = (type: TroopType) => {
        switch (type) {
            case TroopType.CAVALRY:
                return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
            case TroopType.SWORDSMEN:
                return 'text-red-400 bg-red-400/10 border-red-400/20';
            case TroopType.ARCHERS:
                return 'text-green-400 bg-green-400/10 border-green-400/20';
            case TroopType.PIKEMEN:
                return 'text-orange-400 bg-orange-400/10 border-orange-400/20';
            default:
                return 'text-slate-400';
        }
    };

    const provenCount = recommendations.filter(r => r.isProven).length;

    return (
        <div className="space-y-10 pb-12">
            <div className="bg-[#d4af37]/5 border border-[#d4af37]/20 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#d4af37]/10 rounded-xl">
                        <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                    <div>
                        <p className="text-[#d4af37] font-black text-xs uppercase tracking-widest">Optimized Deployment</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold">5 Groups • 15 Strategic Slots Assigned</p>
                    </div>
                </div>
                {provenCount > 0 && (
                    <div className="bg-[#d4af37] text-black text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-[#d4af37]/20">
                        {provenCount} Elite Meta Matches
                    </div>
                )}
            </div>

            {recommendations.map((rec, index) => (
                <div key={index} className={`bg-[#1a1f26] border rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ${
                    rec.isProven ? 'border-[#d4af37]/40 ring-1 ring-[#d4af37]/20' : 'border-[#2d3748]'
                }`}>
                    <div className={`bg-gradient-to-r p-6 border-b border-[#2d3748] flex justify-between items-center ${
                        rec.isProven ? 'from-[#1e1a11] to-[#252b36]' : 'from-[#1a1f26] to-[#252b36]'
                    }`}>
                        <div className="flex items-center gap-4">
                <span className={`w-10 h-10 flex items-center justify-center rounded-xl border font-cinzel font-black ${
                    rec.isProven ? 'bg-[#d4af37] text-black border-[#d4af37]' : 'text-[#d4af37] bg-black/40 border-[#d4af37]/20'
                }`}>0{index + 1}</span>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-cinzel font-black text-white tracking-widest uppercase">{rec.name}</h3>
                                    {rec.isProven && (
                                        <span className="bg-[#d4af37]/20 text-[#d4af37] text-[7px] font-black px-1.5 py-0.5 rounded border border-[#d4af37]/40 uppercase">Community Proven</span>
                                    )}
                                </div>
                                <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded border inline-block mt-1 ${getTypeColor(rec.type)}`}>
                     Type: {rec.type}
                   </span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1">Synergy</div>
                            <span className="text-[#d4af37] font-black text-xl font-cinzel">{rec.synergyScore}%</span>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {rec.heroes.map((heroName) => {
                                const hero = HEROES.find(h => h.name === heroName);
                                return (
                                    <div key={heroName} className="group relative">
                                        <div className={`relative aspect-[3/4.2] mb-3 overflow-hidden rounded-2xl border-2 shadow-2xl transition-all duration-500 ${
                                            hero?.rarity === HeroRarity.MYTHICAL ? 'border-red-600/40' : 'border-[#d4af37]/20'
                                        }`}>
                                            <img src={hero?.imageUrl} alt={heroName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                                            <div className="absolute bottom-2 left-2 right-2 text-center">
                                                <div className="text-white font-cinzel font-bold text-[9px] sm:text-xs uppercase truncate">{heroName}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className={`rounded-2xl p-5 border relative overflow-hidden ${
                            rec.isProven ? 'bg-[#d4af37]/5 border-[#d4af37]/10' : 'bg-[#0c0e12]/80 border-[#d4af37]/10'
                        }`}>
                            <div className={`absolute top-0 left-0 w-1 h-full ${rec.isProven ? 'bg-[#d4af37]' : 'bg-[#d4af37]/30'}`}></div>
                            <p className="text-[11px] text-slate-400 italic leading-relaxed">
                                <span className="text-[#d4af37] font-black uppercase text-[9px] mr-2 tracking-widest">Strategic Brief:</span>
                                {rec.reasoning}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LineupDisplay;
