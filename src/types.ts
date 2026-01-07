
export enum TroopType {
  CAVALRY = 'Cavalry',
  SWORDSMEN = 'Swordsmen',
  ARCHERS = 'Archers',
  PIKEMEN = 'Pikemen',
}

export enum HeroRarity {
  MYTHICAL = 'Mythical',
  LEGENDARY = 'Legendary',
  EPIC = 'Epic',
  ELITE = 'Elite',
  RARE = 'Rare',
}

export enum HeroRole {
  DAMAGE = 'Damage',
  TANK = 'Tank',
  SUPPORT = 'Support',
  CONTROL = 'Control',
}

export enum HeroSpecialty {
  WARRIOR = 'Warrior',
  ATTACK = 'Attack',
  PIERCING = 'Piercing',
  CRITICAL_STRIKE = 'Critical Strike',
  TACTICIAN = 'Tactician',
  SUPPORT = 'Support',
  DEFENSE = 'Defense',
  ACTIVE = 'Active',
  MARSHAL = 'Marshal',
  BUFF = 'Buff',
  SECONDARY_STRIKE = 'Secondary Strike',
  CHARGING = 'Charging',
  TURN_BASE = 'Turn Base',
  RAGE_RECOVERY = 'Rage Recovery',
  RECOVERY = 'Recovery',
  DOUBLE_ATTACK = 'Double Attack',
  PASSIVE = 'Passive',
  GATHER = 'Gather',
  COUNTERATTACK = 'Counterattack',
  COMMANDER = 'Commander',
}

export interface Skill {
  id: string;
  name: string;
  type: 'Active' | 'Passive' | 'Triggered' | 'Signature' | 'Turn-Based' | 'Secondary Strike';
  description: string;
  rarity: HeroRarity;
  imageUrl?: string;
}

export interface Ring {
  id: string;
  name: string;
  rarity: HeroRarity;
  bonus: string;
  imageUrl?: string;
}

export interface Hero {
  id: string;
  name: string;
  rarity: HeroRarity;
  troopTypes: TroopType[];
  specialties: HeroSpecialty[];
  role: HeroRole;
  imageUrl: string;
}

export interface UserHeroSkill {
  skillId: string;
  level: number;
}

export interface UserHero {
  heroId: string;
  level: number;
  rank: number;
  skills: UserHeroSkill[];
  ringId?: string;
  ringLevel?: number;
}

export interface LineupComposition {
  [TroopType.CAVALRY]: number;
  [TroopType.SWORDSMEN]: number;
  [TroopType.ARCHERS]: number;
  [TroopType.PIKEMEN]: number;
}

export interface ProvenLineup {
  id: string;
  name: string;
  type: TroopType;
  heroIds: string[];
  reasoning: string;
}

export interface LineupRecommendation {
  name: string;
  type: TroopType;
  heroes: string[];
  reasoning: string;
  synergyScore: number;
  isProven?: boolean;
}
