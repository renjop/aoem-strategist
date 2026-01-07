import React, {useState, useRef} from 'react';
import {type UserHero, type Hero, type LineupRecommendation, type LineupComposition, TroopType} from './types';
import {HEROES} from './data/gameData';
import {getLineupRecommendations} from './services/strategyService';
import Header from './components/Header';
import HeroPicker from './components/HeroPicker';
import InventoryView from './components/InventoryView';
import LineupDisplay from './components/LineupDisplay';
import ProvenReference from "./components/ProvenReference.tsx";

const App: React.FC = () => {
    const [userHeroes, setUserHeroes] = useState<UserHero[]>([]);
    const [recommendations, setRecommendations] = useState<LineupRecommendation[]>([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [activeTab, setActiveTab] = useState<'collection' | 'recommendations' | 'proven'>('collection');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [composition, setComposition] = useState<LineupComposition>({
        [TroopType.SWORDSMEN]: 2,
        [TroopType.ARCHERS]: 1,
        [TroopType.CAVALRY]: 1,
        [TroopType.PIKEMEN]: 1,
    });

    const totalGroups = Object.values(composition).reduce((a, b) => a + b, 0);

    const handleAddHero = (hero: Hero) => {
        if (userHeroes.some(uh => uh.heroId === hero.id)) return;
        setUserHeroes(prev => [...prev, {
            heroId: hero.id,
            level: 1,
            rank: 0,
            skills: [
                {skillId: '', level: 1},
                {skillId: '', level: 1}
            ]
        }]);
    };

    const handleUpdateComposition = (type: TroopType, value: number) => {
        setComposition(prev => ({...prev, [type]: value}));
    };

    const handleRemoveHero = (heroId: string) => {
        setUserHeroes(prev => prev.filter(uh => uh.heroId !== heroId));
    };

    const handleUpdateHero = (updatedHero: UserHero) => {
        setUserHeroes(prev => prev.map(uh => uh.heroId === updatedHero.heroId ? updatedHero : uh));
    };

    const handleExport = () => {
        if (userHeroes.length === 0) {
            alert("Collection is empty. Add heroes before exporting.");
            return;
        }
        const dataStr = JSON.stringify(userHeroes, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = `aoe_roster_${new Date().toISOString().split('T')[0]}.json`;

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target?.result as string);
                if (Array.isArray(json)) {
                    // Basic validation could be expanded here
                    setUserHeroes(json);
                    setActiveTab('collection');
                    alert("Collection loaded successfully!");
                } else {
                    alert("Invalid file format. Please upload a valid JSON roster file.");
                }
            } catch (error) {
                console.log(error);
                alert("Error parsing JSON file.");
            }
        };
        reader.readAsText(file);
        // Reset file input value so same file can be uploaded again
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleGenerate = async () => {
        if (userHeroes.length < 15) {
            alert("You need at least 15 heroes to fill 5 unique groups!");
            return;
        }
        if (totalGroups !== 5) {
            alert("Please adjust your plan to exactly 5 groups.");
            return;
        }
        setIsGenerating(true);
        setActiveTab('recommendations');

        setTimeout(async () => {
            const results = await getLineupRecommendations(userHeroes, composition);
            setRecommendations(results);
            setIsGenerating(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-[#0c0e12] text-slate-200">
            <Header onShowProven={() => setActiveTab('proven')} />
            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Panel */}
                    <div className="lg:w-1/3 space-y-6">
                        <div className="bg-[#1a1f26] border border-[#2d3748] rounded-xl p-6 shadow-xl">
                            <h2 className="text-xl font-cinzel font-bold text-[#d4af37] mb-4 flex items-center gap-2">
                                <span className="w-2 h-6 bg-[#d4af37] rounded-full"></span>
                                Roster Builder
                            </h2>

                            <HeroPicker
                                availableHeroes={HEROES}
                                userHeroes={userHeroes}
                                onAddHero={handleAddHero}
                            />

                            <div className="mt-8 pt-6 border-t border-[#2d3748]">
                                <h3 className="text-[10px] uppercase font-black text-slate-500 mb-3 tracking-widest">Roster
                                    Management</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={handleExport}
                                        className="flex items-center justify-center gap-2 py-2 bg-[#2d3748] hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg transition-colors border border-slate-600"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                        </svg>
                                        Save JSON
                                    </button>
                                    <button
                                        onClick={() => fileInputRef.current?.click()}
                                        className="flex items-center justify-center gap-2 py-2 bg-[#2d3748] hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-lg transition-colors border border-slate-600"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12"/>
                                        </svg>
                                        Load JSON
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleImport}
                                        accept=".json"
                                        className="hidden"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="bg-black/40 p-4 rounded-lg border border-[#2d3748]">
                                    <h3 className="text-[10px] uppercase font-black text-slate-500 mb-3 tracking-widest">Formation
                                        Plan (Global Unique)</h3>
                                    <div className="space-y-3">
                                        {Object.values(TroopType).map(type => (
                                            <div key={type} className="flex items-center justify-between">
                                                <span className="text-xs font-bold text-slate-400">{type} Groups</span>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => handleUpdateComposition(type, Math.max(0, composition[type] - 1))}
                                                        className="w-6 h-6 bg-[#2d3748] rounded flex items-center justify-center hover:bg-slate-600"
                                                    >-
                                                    </button>
                                                    <span
                                                        className="w-4 text-center font-bold text-[#d4af37]">{composition[type]}</span>
                                                    <button
                                                        onClick={() => handleUpdateComposition(type, composition[type] + 1)}
                                                        className="w-6 h-6 bg-[#2d3748] rounded flex items-center justify-center hover:bg-slate-600"
                                                    >+
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        <div
                                            className="pt-2 border-t border-[#2d3748] flex justify-between items-center">
                                            <span
                                                className="text-xs font-black uppercase text-slate-500">Total Groups</span>
                                            <span
                                                className={`text-lg font-black ${totalGroups === 5 ? 'text-green-500' : 'text-red-500'}`}>{totalGroups} / 5</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleGenerate}
                                    disabled={isGenerating || userHeroes.length < 15 || totalGroups !== 5}
                                    className={`w-full py-4 px-6 rounded-lg font-bold text-lg uppercase tracking-widest transition-all duration-300 shadow-lg ${
                                        isGenerating || userHeroes.length < 15 || totalGroups !== 5
                                            ? 'bg-gray-700 cursor-not-allowed text-gray-400 opacity-50'
                                            : 'bg-gradient-to-r from-[#b8860b] to-[#d4af37] hover:from-[#d4af37] hover:to-[#ffd700] text-black ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#0c0e12]'
                                    }`}
                                >
                                    {isGenerating ? 'Strategizing...' : 'Optimize 5-Army Lineup'}
                                </button>
                                {userHeroes.length < 15 &&
                                    <p className="text-[10px] text-center text-red-500 font-bold uppercase tracking-tighter">Requires
                                        15 unique heroes for full output</p>}
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="lg:w-2/3">
                        <div className="flex border-b border-[#2d3748] mb-6">
                            <button
                                onClick={() => setActiveTab('collection')}
                                className={`px-8 py-3 font-cinzel font-bold transition-all ${activeTab === 'collection' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                MY COLLECTION ({userHeroes.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('recommendations')}
                                className={`px-8 py-3 font-cinzel font-bold transition-all ${activeTab === 'recommendations' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                ARMY STRATEGY
                            </button>
                            <button
                                onClick={() => setActiveTab('proven')}
                                className={`px-8 py-3 font-cinzel font-bold transition-all ${activeTab === 'proven' ? 'text-[#d4af37] border-b-2 border-[#d4af37]' : 'text-slate-500 hover:text-slate-300'}`}
                            >
                                META REFERENCE
                            </button>
                        </div>

                        {activeTab === 'collection' && (
                            <InventoryView userHeroes={userHeroes} onRemove={handleRemoveHero}
                                           onUpdate={handleUpdateHero}/>)}
                        {activeTab === 'recommendations' && (
                            <LineupDisplay recommendations={recommendations} loading={isGenerating}/>
                        )}
                        {activeTab === 'proven' && (
                            <ProvenReference/>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
