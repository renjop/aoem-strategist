import {
    type UserHero, type LineupRecommendation, type Hero, TroopType, HeroRole, HeroRarity, type LineupComposition
} from "../types";
import {HEROES, PROVEN_LINEUPS} from "../data/gameData";

const calculateSynergy = (heroes: Hero[], userHeroes: UserHero[], targetType: TroopType): { score: number; reasoning: string } => {
    let score = 0;
    const reasons: string[] = [];

    const matchingTypeCount = heroes.filter(h => h.troopTypes.includes(targetType)).length;
    if (matchingTypeCount < 3) {
        score -= 50;
    } else {
        score += 40;
        reasons.push(`Cohesive ${targetType} unit focus.`);
    }

    const specialtyCounts: Record<string, number> = {};
    heroes.forEach(h => {
        h.specialties.forEach(spec => {
            specialtyCounts[spec] = (specialtyCounts[spec] || 0) + 1;
        });
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const matchingSpecs = Object.entries(specialtyCounts).filter(([_, count]) => count >= 2);
    if (matchingSpecs.length > 0) {
        score += matchingSpecs.length * 5;
        const topSpec = matchingSpecs.sort((a, b) => b[1] - a[1])[0];
        reasons.push(`Specialty synergy: ${topSpec[0]}.`);
    }

    const roles = heroes.map(h => h.role);
    if (roles.includes(HeroRole.DAMAGE) && roles.includes(HeroRole.TANK)) {
        score += 15;
        reasons.push("Balanced roles.");
    }
    if (roles.includes(HeroRole.SUPPORT)) {
        score += 10;
        reasons.push("Utility support.");
    }

    heroes.forEach(h => {
        const uh = userHeroes.find(u => u.heroId === h.id);
        if (h.rarity === HeroRarity.MYTHICAL) score += 5;
        if (uh) {
            score += (uh.level / 15);
            score += (uh.rank * 4);
        }
    });

    return {
        score: Math.min(Math.round(score), 100),
        reasoning: reasons.join(" ")
    };
};

export const getLineupRecommendations = async (
    userHeroes: UserHero[],
    composition: LineupComposition
): Promise<LineupRecommendation[]> => {
    const recommendations: LineupRecommendation[] = [];
    const assignedHeroIds = new Set<string>();

    // 1. Identify Target Slots
    const taskQueue: TroopType[] = [];
    Object.entries(composition).forEach(([type, count]) => {
        for (let i = 0; i < count; i++) taskQueue.push(type as TroopType);
    });
    const limitedQueue = taskQueue.slice(0, 5);

    // 2. PRIORITY #1: Check for Community Proven Lineups
    // We iterate through our elite formations and see if the user has ALL required heroes
    // and if that formation type is requested in our composition.
    const remainingSlots = [...limitedQueue];

    for (const proven of PROVEN_LINEUPS) {
        const slotIndex = remainingSlots.indexOf(proven.type);
        if (slotIndex !== -1) {
            // Check if user has all heroes for this lineup and they aren't assigned yet
            const hasAllHeroes = proven.heroIds.every(hId =>
                userHeroes.some(uh => uh.heroId === hId) && !assignedHeroIds.has(hId)
            );

            if (hasAllHeroes) {
                proven.heroIds.forEach(hId => assignedHeroIds.add(hId));
                recommendations.push({
                    name: proven.name,
                    type: proven.type,
                    heroes: proven.heroIds.map(hId => HEROES.find(h => h.id === hId)!.name),
                    reasoning: proven.reasoning,
                    synergyScore: 100,
                    isProven: true
                });
                // Remove this slot requirement from the queue
                remainingSlots.splice(slotIndex, 1);
            }
        }
        if (remainingSlots.length === 0) break;
    }

    // 3. Fill remaining slots with Local Analysis logic
    for (let i = 0; i < remainingSlots.length; i++) {
        const targetType = remainingSlots[i];
        const availableUserHeroes = userHeroes.filter(uh => !assignedHeroIds.has(uh.heroId));
        const availableHeroes = availableUserHeroes.map(uh => HEROES.find(h => h.id === uh.heroId)!);

        if (availableHeroes.length < 3) break;

        let bestCombo: { heroes: Hero[], score: number, reasoning: string } | null = null;
        const powerPool = [...availableHeroes]
            .sort((a, b) => {
                const uhA = userHeroes.find(u => u.heroId === a.id)!;
                const uhB = userHeroes.find(u => u.heroId === b.id)!;
                return (uhB.level + uhB.rank * 10) - (uhA.level + uhA.rank * 10);
            })
            .slice(0, 15);

        for (let x = 0; x < powerPool.length; x++) {
            for (let y = x + 1; y < powerPool.length; y++) {
                for (let z = y + 1; z < powerPool.length; z++) {
                    const trio = [powerPool[x], powerPool[y], powerPool[z]];
                    const synergy = calculateSynergy(trio, userHeroes, targetType);
                    if (!bestCombo || synergy.score > bestCombo.score) {
                        bestCombo = { heroes: trio, score: synergy.score, reasoning: synergy.reasoning };
                    }
                }
            }
        }

        if (bestCombo) {
            bestCombo.heroes.forEach(h => assignedHeroIds.add(h.id));
            recommendations.push({
                name: `${targetType} Formation`,
                type: targetType,
                heroes: bestCombo.heroes.map(h => h.name),
                reasoning: bestCombo.reasoning,
                synergyScore: bestCombo.score
            });
        }
    }

    return recommendations;
};