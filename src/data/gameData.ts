import {type Hero, HeroRarity, HeroRole, HeroSpecialty, type Ring, type Skill, TroopType, type ProvenLineup} from '../types';

export const HEROES: Hero[] = [
    // --- MYTHICAL (Tier S+ and S) ---
    {
        id: 'h1', name: 'Lu Bu', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.CRITICAL_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h1.png'
    },
    {
        id: 'h2', name: 'King Arthur', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.CAVALRY, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.PIERCING, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h2.png'
    },
    {
        id: 'h3', name: 'Hua Mulan', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h3.png'
    },
    {
        id: 'h4', name: 'Tomyris', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h4.png'
    },
    {
        id: 'h5', name: 'Hannibal', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h5.png'
    },
    {
        id: 'h6',
        name: 'Miyamoto Musashi',
        rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE,
        imageUrl: '/images/heroes/h6.png'
    },
    {
        id: 'h7',
        name: 'Attila The Hun',
        rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.ARCHERS, TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.DOUBLE_ATTACK],
        role: HeroRole.DAMAGE,
        imageUrl: '/images/heroes/h7.png'
    },
    {
        id: 'h8', name: 'Sun Tzu', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.CHARGING],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h8.png'
    },
    {
        id: 'h9', name: 'Ramesses II', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.SWORDSMEN, TroopType.ARCHERS],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h9.png'
    },
    {
        id: 'h10', name: 'Octavian', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.TURN_BASE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h10.png'
    },
    {
        id: 'h11', name: 'Mehmed', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.ARCHERS, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h11.png'
    },
    {
        id: 'h12', name: 'Suleiman', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.CHARGING],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h12.png'
    },
    {
        id: 'h13',
        name: 'Queen Seondeok',
        rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.ACTIVE],
        role: HeroRole.SUPPORT,
        imageUrl: '/images/heroes/h13.png'
    },
    {
        id: 'h14', name: 'Saladin', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.CAVALRY, TroopType.ARCHERS],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.RAGE_RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h14.png'
    },
    {
        id: 'h15', name: 'Lagertha', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.PIERCING, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h15.png'
    },
    {
        id: 'h16', name: 'Timur', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.CAVALRY, TroopType.ARCHERS],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.BUFF],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h16.png'
    },
    {
        id: 'h17', name: 'Leonidas I', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.COUNTERATTACK],
        role: HeroRole.TANK, imageUrl: '/images/heroes/h17.png'
    },
    {
        id: 'h18',
        name: 'Justinian the Great',
        rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.RECOVERY, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT,
        imageUrl: '/images/heroes/h18.png'
    },
    {
        id: 'h19', name: 'Tribhuwana', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.ACTIVE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h19.png'
    },
    {
        id: 'h20', name: 'Mansa Musa', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h20.png'
    },
    {
        id: 'h21', name: 'Boudica', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.COUNTERATTACK],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h21.png'
    },
    {
        id: 'h22',
        name: 'Ram Khamhaeng',
        rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.BUFF, HeroSpecialty.TURN_BASE],
        role: HeroRole.SUPPORT,
        imageUrl: '/images/heroes/h22.png'
    },
    {
        id: 'h23', name: 'Yodit', rarity: HeroRarity.MYTHICAL,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/h23.png'
    },
    {
        id: 'h24', name: 'Otto I', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h24.png'
    },
    {
        id: 'h25', name: 'Zhuge Liang', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h25.png'
    },
    {
        id: 'h26', name: 'Dae Jang Geum', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.BUFF, HeroSpecialty.RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h26.png'
    },
    {
        id: 'h27', name: 'Napoleon', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.COMMANDER],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h27.png'
    },
    {
        id: 'h28', name: 'Scipio Africanus', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h28.png'
    },
    {
        id: 'h29', name: 'Qin Shi Huang', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.BUFF, HeroSpecialty.RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/h29.png'
    },

    // --- LEGENDARY (Tier A) ---
    {
        id: 'l1', name: 'Cleopatra VII', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.CAVALRY, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.GATHER],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l1.png'
    },
    {
        id: 'l2',
        name: 'Julius Caesar',
        rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.TURN_BASE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l2.png'
    },
    {
        id: 'l3', name: 'Richard I', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.COUNTERATTACK],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/l3.png'
    },
    {
        id: 'l4',
        name: 'Constantine the Great',
        rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.RECOVERY, HeroSpecialty.BUFF],
        role: HeroRole.TANK,
        imageUrl: '/images/heroes/l4.png'
    },
    {
        id: 'l5', name: 'Elizabeth I', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.PASSIVE, HeroSpecialty.SUPPORT],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l5.png'
    },
    {
        id: 'l6',
        name: 'Rani Durgavati',
        rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS, TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.DOUBLE_ATTACK],
        role: HeroRole.DAMAGE,
        imageUrl: '/images/heroes/l6.png'
    },
    {
        id: 'l7', name: 'Belisarius', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.CONTROL, imageUrl: '/images/heroes/l7.png'
    },
    {
        id: 'l8', name: 'Theodora', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.ACTIVE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l8.png'
    },
    {
        id: 'l9', name: 'King Derrick', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.GATHER],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/l9.png'
    },
    {
        id: 'l10', name: 'Ashoka', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l10.png'
    },
    {
        id: 'l11', name: 'Charlemagne', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.ACTIVE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l11.png'
    },
    {
        id: 'l12', name: 'Josephine', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS, TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.RECOVERY],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/l12.png'
    },
    {
        id: 'l13', name: 'Yi Seong-Gye', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/l13.png'
    },
    {
        id: 'l14', name: 'Sejong The Great', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.DEFENSE, HeroSpecialty.RECOVERY],
        role: HeroRole.TANK, imageUrl: '/images/heroes/l14.png'
    },
    {
        id: 'l15',
        name: 'Vlad III',
        rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.PASSIVE],
        role: HeroRole.DAMAGE,
        imageUrl: '/images/heroes/l15.jpg'
    },
    {
        id: 'l16', name: 'Zhao Hun', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.BUFF],
        role: HeroRole.TANK, imageUrl: '/images/heroes/l16.png'
    },
    {
        id: 'l17', name: 'Alp Arslan', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l17.png'
    },
    {
        id: 'l18', name: 'William The Conqueror', rarity: HeroRarity.LEGENDARY,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/l18.png'
    },

    // --- EPIC (Tier B and below) ---
    {
        id: 'e1', name: 'El Cid', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e1.png'
    },
    {
        id: 'e2', name: 'Bushra', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e2.webp'
    },
    {
        id: 'e3', name: 'Tariq', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e3.webp'
    },
    {
        id: 'e4',
        name: 'Frederick Barbarossa',
        rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.DEFENSE, HeroSpecialty.RECOVERY],
        role: HeroRole.TANK,
        imageUrl: '/images/heroes/e4.png'
    },
    {
        id: 'e5',
        name: 'Cyrus The Great',
        rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.COUNTERATTACK],
        role: HeroRole.DAMAGE,
        imageUrl: '/images/heroes/e5.png'
    },
    {
        id: 'e6', name: 'Philip IV', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.BUFF],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e6.png'
    },
    {
        id: 'e7', name: 'Guan Yu', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.CRITICAL_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e7.png'
    },
    {
        id: 'e8', name: 'Bellevue', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.DOUBLE_ATTACK],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e8.png'
    },
    {
        id: 'e9', name: 'Queen Dido', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e9.png'
    },
    {
        id: 'e10', name: 'Yi Sun-Shin', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.BUFF],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e10.png'
    },
    {
        id: 'e11', name: 'Oda Nobunaga', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.TURN_BASE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e11.png'
    },
    {
        id: 'e12', name: 'Toyotomi Hideyoshi', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e12.png'
    },
    {
        id: 'e13', name: 'Tokugawa Ieyasu', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e13.png'
    },
    {
        id: 'e14', name: 'Harald III', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e14.png'
    },
    {
        id: 'e15', name: 'Hammurabi', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e15.png'
    },
    {
        id: 'e16', name: 'Joan Of Arc', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.COUNTERATTACK],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e16.png'
    },
    {
        id: 'e17',
        name: 'Darius the Great',
        rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN, TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.PIERCING, HeroSpecialty.GATHER],
        role: HeroRole.CONTROL,
        imageUrl: '/images/heroes/e17.png'
    },
    {
        id: 'e18', name: 'Li Daoxuan', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.TURN_BASE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e18.png'
    },
    {
        id: 'e19', name: 'Leo', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.RECOVERY, HeroSpecialty.GATHER],
        role: HeroRole.TANK, imageUrl: '/images/heroes/e19.png'
    },
    {
        id: 'e20', name: 'Leon', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.GATHER],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e20.png'
    },
    {
        id: 'e21', name: 'Cui Ruyi', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e21.png'
    },
    {
        id: 'e22', name: 'Axel', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e22.png'
    },
    {
        id: 'e23', name: 'Baldassi', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.GATHER],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e23.png'
    },
    {
        id: 'e24', name: 'Wu Wei', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.COUNTERATTACK],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e24.png'
    },
    {
        id: 'e25', name: 'Nino', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.GATHER],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e25.png'
    },
    {
        id: 'e26', name: 'Gao Meng', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.SWORDSMEN],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.BUFF],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e26.png'
    },
    {
        id: 'e27', name: 'Yuan Xia', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.BUFF, HeroSpecialty.GATHER],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e27.png'
    },
    {
        id: 'e28', name: 'Gatos', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e28.png'
    },
    {
        id: 'e29', name: 'Narses', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.ATTACK, HeroSpecialty.GATHER],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e29.png'
    },
    {
        id: 'e30', name: 'Luki', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e30.png'
    },
    {
        id: 'e31', name: 'Kaso', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.WARRIOR, HeroSpecialty.SUPPORT, HeroSpecialty.GATHER],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e31.png'
    },
    {
        id: 'e32', name: 'Thanius', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.PIKEMEN],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.GATHER],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e32.png'
    },
    {
        id: 'e33', name: 'Diao Chan', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY, TroopType.ARCHERS],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.SUPPORT, HeroSpecialty.GATHER],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e33.png'
    },
    {
        id: 'e34', name: 'Clyde', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.TACTICIAN, HeroSpecialty.ATTACK, HeroSpecialty.SECONDARY_STRIKE],
        role: HeroRole.DAMAGE, imageUrl: '/images/heroes/e34.png'
    },
    {
        id: 'e35', name: 'Robin Hood', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.CAVALRY],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.SUPPORT, HeroSpecialty.RECOVERY],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e35.png'
    },
    {
        id: 'e36', name: 'Henry V', rarity: HeroRarity.EPIC,
        troopTypes: [TroopType.ARCHERS],
        specialties: [HeroSpecialty.MARSHAL, HeroSpecialty.ATTACK, HeroSpecialty.ACTIVE],
        role: HeroRole.SUPPORT, imageUrl: '/images/heroes/e36.png'
    },
];

export const SKILLS: Skill[] = [
    {
        id: 'sk1',
        name: 'Formation Attack',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals might damage every 12s (damage rate: 47.94%, might bonus).',
        imageUrl: '/images/skills/sk1.png'
    },
    {
        id: 'sk2',
        name: 'Change of Formation',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals might damage every 12s (damage rate: 35.68%, might bonus) and increases turn-based skill damage by 8.94%.',
        imageUrl: '/images/skills/sk2.png'
    },
    {
        id: 'sk3',
        name: "King's Blade",
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: '15% chance to counterattack when hit, dealing might damage once per second.',
        imageUrl: '/images/skills/sk3.png'
    },
    {
        id: 'sk4',
        name: 'Savage',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals might damage every 9s and reduces armor of the highest armor enemy.',
        imageUrl: '/images/skills/sk4.png'
    },
    {
        id: 'sk5',
        name: 'Whirlwind Sweep',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases hero’s might damage by 3.94% every 6s, up to 5 stacks.',
        imageUrl: '/images/skills/sk5.png'
    },
    {
        id: 'sk6',
        name: 'Coordination',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Reduces normal attack damage by 20% but increases turn-based skill damage by 6.06%.',
        imageUrl: '/images/skills/sk6.png'
    },
    {
        id: 'sk7',
        name: 'Crashing Boulder',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals might damage to the enemy troop.',
        imageUrl: '/images/skills/sk7.png'
    },
    {
        id: 'sk8',
        name: 'Infuriation',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: 'After normal attack, deals might damage and increases hero’s might for 3s.',
        imageUrl: '/images/skills/sk8.png'
    },
    {
        id: 'sk9',
        name: 'Spirited Pursuit',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals might damage to the enemy troop.',
        imageUrl: '/images/skills/sk9.png'
    },
    {
        id: 'sk10',
        name: 'Peerless Strike',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals high might damage to the enemy troop.',
        imageUrl: '/images/skills/sk10.png'
    },
    {
        id: 'sk11',
        name: 'High Spirit',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases active skill activation chance by 3.64% (4.55% for charging skills).',
        imageUrl: '/images/skills/sk11.png'
    },
    {
        id: 'sk12',
        name: 'Furious Charge',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases might damage by 3.94% when signature skill activates, up to 5 stacks.',
        imageUrl: '/images/skills/sk12.png'
    },
    {
        id: 'sk13',
        name: 'Efficient Harvest',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Increases gathering speed for all resources by 14.35%.',
        imageUrl: '/images/skills/sk13.png'
    },
    {
        id: 'sk14',
        name: 'Sowing Discord',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: 'After normal attack, deals strategy damage and steals strategy from enemy commander.',
        imageUrl: '/images/skills/sk14.png'
    },
    {
        id: 'sk15',
        name: 'Windfall',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases gathering speed and extra resource yield by 2.05%.',
        imageUrl: '/images/skills/sk15.png'
    },
    {
        id: 'sk16',
        name: 'War Tactic',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals strategy damage and recovers troop units.',
        imageUrl: '/images/skills/sk16.png'
    },
    {
        id: 'sk17',
        name: 'Double Attack',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Enters double attack state and boosts might, strategy, and armor.',
        imageUrl: '/images/skills/sk17.png'
    },
    {
        id: 'sk18',
        name: 'Crushing Impact',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals strategy damage and reduces enemy commander might.',
        imageUrl: '/images/skills/sk18.png'
    },
    {
        id: 'sk19',
        name: 'Armor Piercer',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: 'After normal attack, deals might damage and reduces all enemy armor.',
        imageUrl: '/images/skills/sk19.png'
    },
    {
        id: 'sk20',
        name: 'Roar of Victory',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals might damage and increases rage by 7.17.',
        imageUrl: '/images/skills/sk20.png'
    },
    {
        id: 'sk21',
        name: 'Weak Spot Attack',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals might damage and increases hero damage by 6.06%.',
        imageUrl: '/images/skills/sk21.png'
    },
    {
        id: 'sk22',
        name: 'Deception',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals 1 instance of strategy damage to the enemy troop.',
        imageUrl: '/images/skills/sk22.png'
    },
    {
        id: 'sk23',
        name: 'Boulder Trap',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Enters charging state; deals strategy damage after 3s.',
        imageUrl: '/images/skills/sk23.png'
    },
    {
        id: 'sk24',
        name: 'Ultimate Strategy',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals 1 instance of strategy damage to the enemy troop.',
        imageUrl: '/images/skills/sk24.png'
    },
    {
        id: 'sk25',
        name: 'Flash of Inspiration',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: '17.17% chance to skip charging state for active skills.',
        imageUrl: '/images/skills/sk25.png'
    },
    {
        id: 'sk26',
        name: 'Strategy Master’s Gift',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases strategy damage and signature active skill activation chance.',
        imageUrl: '/images/skills/sk26.png'
    },
    {
        id: 'sk27',
        name: 'Triple Offensive',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Every 9s, triggers might damage, strategy damage, or increased damage taken.',
        imageUrl: '/images/skills/sk27.png'
    },
    {
        id: 'sk28',
        name: 'Act of Mercy',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'Might damage after attack; damage increases as target units fall.',
        imageUrl: '/images/skills/sk28.png'
    },
    {
        id: 'sk29',
        name: 'Blaze Impact',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals strategy damage and inflicts burn effect for 3s.',
        imageUrl: '/images/skills/sk29.png'
    },
    {
        id: 'sk30',
        name: 'Conflagration',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals strategy damage and inflicts burn effect for 6s.',
        imageUrl: '/images/skills/sk30.png'
    },
    {
        id: 'sk31',
        name: 'Organized Retreat',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Gathering speed boost; converts lost units and increases retreat speed.',
        imageUrl: '/images/skills/sk31.png'
    },
    {
        id: 'sk32',
        name: 'Mettle',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: 'Recovers units after every 12 normal attacks taken.',
        imageUrl: '/images/skills/sk32.png'
    },
    {
        id: 'sk33',
        name: 'Fortification',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals might damage to the enemy troop.',
        imageUrl: '/images/skills/sk33.png'
    },
    {
        id: 'sk34',
        name: 'Tenacity',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Recovers troop units every 9s (armor bonus).',
        imageUrl: '/images/skills/sk34.png'
    },
    {
        id: 'sk35',
        name: 'Darkness Strike',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Charging; deals might damage and reduces enemy healing for 6s.',
        imageUrl: '/images/skills/sk35.png'
    },
    {
        id: 'sk36',
        name: 'Peaceful Haven',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Reduces troop damage taken for 3s after recovery.',
        imageUrl: '/images/skills/sk36.png'
    },
    {
        id: 'sk37',
        name: 'Maneuver',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: '16.72% chance for commander to skip charging state.',
        imageUrl: '/images/skills/sk37.png'
    },
    {
        id: 'sk38',
        name: 'Immortal Army',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Recovers units and has chance to purify attribute debuffs.',
        imageUrl: '/images/skills/sk38.png'
    },
    {
        id: 'sk39',
        name: 'Counterattack',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: '15% chance to immediately counterattack when hit.',
        imageUrl: '/images/skills/sk39.png'
    },
    {
        id: 'sk40',
        name: 'Vigilance',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: '15% chance to counterattack and inflict rout effect.',
        imageUrl: '/images/skills/sk40.png'
    },
    {
        id: 'sk41',
        name: 'Fearless Retribution',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: '20% chance to counterattack and recovers units every 6s.',
        imageUrl: '/images/skills/sk41.png'
    },
    {
        id: 'sk42',
        name: 'Forceful Retaliation',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: '20% chance to counterattack and increases hero’s might.',
        imageUrl: '/images/skills/sk42.png'
    },
    {
        id: 'sk43',
        name: 'Bloodthirst',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals might damage and recovers troop units.',
        imageUrl: '/images/skills/sk43.png'
    },
    {
        id: 'sk44',
        name: 'Tactical Pursuit',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals both might and strategy damage.',
        imageUrl: '/images/skills/sk44.png'
    },
    {
        id: 'sk45',
        name: 'Shield Slam',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals might damage (might and armor bonus).',
        imageUrl: '/images/skills/sk45.png'
    },
    {
        id: 'sk46',
        name: 'Earth Crush',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals might damage and inflicts rout effect for 6s.',
        imageUrl: '/images/skills/sk46.png'
    },
    {
        id: 'sk47',
        name: 'Suppression',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals strategy damage and reduces enemy commander stats.',
        imageUrl: '/images/skills/sk47.png'
    },
    {
        id: 'sk48',
        name: 'Sunder',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: 'After normal attack, deals might damage and inflicts rout.',
        imageUrl: '/images/skills/sk48.png'
    },
    {
        id: 'sk49',
        name: 'War Drums',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Every 9s, increases all your heroes’ armor and strategy.',
        imageUrl: '/images/skills/sk49.png'
    },
    {
        id: 'sk50',
        name: 'Righteous Judgement',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Charging; deals might damage and reduces enemy might/strategy.',
        imageUrl: '/images/skills/sk50.png'
    },
    {
        id: 'sk51',
        name: 'Warrior’s Hymn',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases next hero’s might and critical strike rate.',
        imageUrl: '/images/skills/sk51.png'
    },
    {
        id: 'sk52',
        name: 'Fearless Frontrunner',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases hero’s siege; converts lost units during siege.',
        imageUrl: '/images/skills/sk52.png'
    },
    {
        id: 'sk53',
        name: 'Prayer For Harvest',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Recovers your troop’s units (strategy bonus).',
        imageUrl: '/images/skills/sk53.png'
    },
    {
        id: 'sk54',
        name: 'Protracted Battle',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Recovers units after every 6 normal attacks launched.',
        imageUrl: '/images/skills/sk54.png'
    },
    {
        id: 'sk55',
        name: 'Critical Insight',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases critical strike rates and reduces enemy armor.',
        imageUrl: '/images/skills/sk55.png'
    },
    {
        id: 'sk56',
        name: 'Fatal Blow',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals might damage (can deal critical strikes).',
        imageUrl: '/images/skills/sk56.png'
    },
    {
        id: 'sk57',
        name: 'Berserker',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'When normal attack deals critical strike, increases hero might.',
        imageUrl: '/images/skills/sk57.png'
    },
    {
        id: 'sk58',
        name: 'Siege and Plunder',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals damage to city defense and increases hero’s siege.',
        imageUrl: '/images/skills/sk58.png'
    },
    {
        id: 'sk59',
        name: 'Siege Breaker',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals damage to city defenses (siege bonus).',
        imageUrl: '/images/skills/sk59.png'
    },
    {
        id: 'sk60',
        name: 'Mighty Strike',
        type: 'Active',
        rarity: HeroRarity.ELITE,
        description: 'Deals might damage to the enemy troop.',
        imageUrl: '/images/skills/sk60.png'
    },
    {
        id: 'sk61',
        name: 'Double Strike',
        type: 'Triggered',
        rarity: HeroRarity.ELITE,
        description: 'After normal attack, deals might damage to the enemy troop.',
        imageUrl: '/images/skills/sk61.png'
    },
    {
        id: 'sk62',
        name: 'Rapid Gathering',
        type: 'Passive',
        rarity: HeroRarity.ELITE,
        description: 'Increases gathering speed for all resources by 8.20%.',
        imageUrl: '/images/skills/sk62.png'
    },
    {
        id: 'sk63',
        name: 'Rest and Recover',
        type: 'Active',
        rarity: HeroRarity.ELITE,
        description: 'Recovers your troop’s units (strategy bonus).',
        imageUrl: '/images/skills/sk63.png'
    },
    {
        id: 'sk64',
        name: 'Prudent Handling',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Increases gathering speed and extra resource yield.',
        imageUrl: '/images/skills/sk64.png'
    },
    {
        id: 'sk65',
        name: 'Surprise Attack',
        type: 'Active',
        rarity: HeroRarity.ELITE,
        description: 'Deals strategy damage to the enemy troop.',
        imageUrl: '/images/skills/sk65.png'
    },
    {
        id: 'sk66',
        name: 'Focused Mind',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Chance for troop to obtain control immunity during charging state.',
        imageUrl: '/images/skills/sk66.png'
    },
    {
        id: 'sk67',
        name: 'Fervor',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Boosts attributes and rage for the first 18s of battle.',
        imageUrl: '/images/skills/sk67.png'
    },
    {
        id: 'sk68',
        name: 'Critical Blade',
        type: 'Passive',
        rarity: HeroRarity.ELITE,
        description: 'Increases the hero’s critical strike rate by 1.35%.',
        imageUrl: '/images/skills/sk68.png'
    },
    {
        id: 'sk69',
        name: 'Pacifying Strike',
        type: 'Triggered',
        rarity: HeroRarity.EPIC,
        description: 'After normal attack, deals might damage and reduces enemy rage.',
        imageUrl: '/images/skills/sk69.png'
    },
    {
        id: 'sk70',
        name: 'Calm in Peril',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Gathering boost; reduces damage and converts units if attacked.',
        imageUrl: '/images/skills/sk1.png'
    },
    {
        id: 'sk71',
        name: 'Load Boost',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Increases gathering speed and troop load.',
        imageUrl: '/images/skills/sk71.png'
    },
    {
        id: 'sk72',
        name: 'Fast Retreat',
        type: 'Passive',
        rarity: HeroRarity.EPIC,
        description: 'Increases gathering speed and retreat speed.',
        imageUrl: '/images/skills/sk72.png'
    },
    {
        id: 'sk73',
        name: 'Executor',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases activation chance and potential skill damage boost.',
        imageUrl: '/images/skills/sk73.png'
    },
    {
        id: 'sk74',
        name: 'Battle Roar',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Deals might damage and increases hero damage for 6s.',
        imageUrl: '/images/skills/sk74.png'
    },
    {
        id: 'sk75',
        name: 'War Elephant',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Every 9s, deals might damage with a chance to reduce damage taken.',
        imageUrl: '/images/skills/sk75.png'
    },
    {
        id: 'sk76',
        name: 'Ripper Tiger',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals might damage and increases critical strike rate.',
        imageUrl: '/images/skills/sk76.png'
    },
    {
        id: 'sk77',
        name: 'Pay in Blood',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'After normal attack, deals might damage and recovers units.',
        imageUrl: '/images/skills/sk77.png'
    },
    {
        id: 'sk78',
        name: 'Dark Flag',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases might of strongest ally and reduces enemy armor after attack.',
        imageUrl: '/images/skills/sk78.png'
    },
    {
        id: 'sk79',
        name: 'Entrenchment',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Steadfast state; recovers units and reduces damage taken.',
        imageUrl: '/images/skills/sk79.png'
    },
    {
        id: 'sk80',
        name: 'Supplies Transportation',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases gathering speed and troop load.',
        imageUrl: '/images/skills/sk80.png'
    },
    {
        id: 'sk81',
        name: 'Flame of Genesis',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Stacks strategy bonus; increases damage for every 3 signature skills.',
        imageUrl: '/images/skills/sk81.png'
    },
    {
        id: 'sk82',
        name: 'Golden Odyssey',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'Recovers units and increases commander damage after taking 12 hits.',
        imageUrl: '/images/skills/sk82.png'
    },
    {
        id: 'sk83',
        name: 'Enraged Strike',
        type: 'Active',
        rarity: HeroRarity.EPIC,
        description: 'Deals strategy damage and increases troop rage.',
        imageUrl: '/images/skills/sk83.png'
    },
    {
        id: 'sk84',
        name: 'Owl’s Lament',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Recovers units every 6s; chance to recover units on taking skill damage.',
        imageUrl: '/images/skills/sk84.png'
    },
    {
        id: 'sk85',
        name: 'Conquering Iron Hoof',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'Strategy damage after normal attack; deals stacking additional damage.',
        imageUrl: '/images/skills/sk85.webp'
    },
    {
        id: 'sk86',
        name: 'Raging Bloodline',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'After 3 signature skills, boosts ally might, damage, and crit protection.',
        imageUrl: '/images/skills/sk86.webp'
    },
    {
        id: 'sk87',
        name: 'Child of Prophecy',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'Counterattack chance; guarantees crit every 4th trigger and crit protection.',
        imageUrl: '/images/skills/sk87.webp'
    },
    {
        id: 'sk88',
        name: 'Tempered Steel',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Recovers units and reduces damage taken after triggering critical strikes.',
        imageUrl: '/images/skills/sk88.webp'
    },
    {
        id: 'sk89',
        name: 'Rending Covenant',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Double attack state after 12 hits; secondary strike damage boost.',
        imageUrl: '/images/skills/sk89.webp'
    },
    {
        id: 'sk90',
        name: 'Borrowing the East Wind',
        type: 'Passive',
        rarity: HeroRarity.LEGENDARY,
        description: 'Increases commander skill damage and activation chance.',
        imageUrl: '/images/skills/sk90.webp'
    },
    {
        id: 'sk91',
        name: 'Deadly Dragonthron',
        type: 'Triggered',
        rarity: HeroRarity.LEGENDARY,
        description: 'Counterattack chance; ignores defense and boosts ally damage every 4th trigger.',
        imageUrl: '/images/skills/sk91.webp'
    },
    {
        id: 'sk92',
        name: 'Holy Roman Empire',
        type: 'Active',
        rarity: HeroRarity.LEGENDARY,
        description: 'Might damage every 6s; stacking turn-based damage boost.',
        imageUrl: '/images/skills/sk92.webp'
    },
    {
        id: 'sk93',
        name: 'Dragon Manifestation',
        type: 'Secondary Strike',
        rarity: HeroRarity.LEGENDARY,
        description: 'After a normal attack, it alternates between these effects: (1) ',
        imageUrl: ''
    },
];

export const RINGS: Ring[] = [
    {
        id: 'r1',
        name: 'Sacred Sage',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Damage/Attack +10.8%, Health +5.4%. Silent Oath: Turn-based skills damage & healing +55% (Blocks Active Skills).',
        imageUrl: '/images/rings/r1.png'
    },
    {
        id: 'r2',
        name: 'Everflame Wings',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Damage/Attack/Defense +10.8%. Silencing Flame: Burns enemies every 9s, 30% chance to Silence.',
        imageUrl: '/images/rings/r2.png'
    },
    {
        id: 'r3',
        name: 'Messenger of Destruction',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Damage/Attack/Defense +10.8%. Perception: Normal attack damage -20%, Passive skill damage +75%.',
        imageUrl: '/images/rings/r3.png'
    },
    {
        id: 'r4',
        name: 'Skyward Knight',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Commander Damage +10.8%, Attack/Defense +16.2%. Boosts Commander damage and Skill activation.',
        imageUrl: '/images/rings/r4.png'
    },
    {
        id: 'r5',
        name: 'Lord of the Eastern Heavens',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Commander Damage +10.8%, Attack +16.2%. Decree: Normal attack damage +100%, Active skill damage -25%.',
        imageUrl: '/images/rings/r5.png'
    },
    {
        id: 'r6',
        name: 'Radiant Guardian',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Normal Attack Damage +26.5%, Attack/Defense +10.8%. Increases Secondary Strike chance & grants Double Attack.',
        imageUrl: '/images/rings/r6.png'
    },
    {
        id: 'r7',
        name: 'Azure Moon',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Skill Damage +10.8%, Attack +13.5%. Foreboding: Charges for 3s to deal massive Strategy Damage.',
        imageUrl: '/images/rings/r7.png'
    },
    {
        id: 'r8',
        name: 'Effulgent Sun',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Skill Damage +10.8%, Attack +13.5%. Onslaught: Charges for 3s to deal massive Might Damage.',
        imageUrl: '/images/rings/r8.png'
    },
    {
        id: 'r9',
        name: 'Lofty Mountain',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Commander Damage +10.8%, Attack +21.6%. Early damage reduction followed by late damage boost.',
        imageUrl: '/images/rings/r9.png'
    },
    {
        id: 'r10',
        name: 'Scorching Flame',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Commander Damage +10.8%, Rage Recovery +16.2%. Heroic Moment: Commander Skills boost all Hero Might by 22%.',
        imageUrl: '/images/rings/r10.png'
    },
    {
        id: 'r11',
        name: 'Tranquil Water',
        rarity: HeroRarity.LEGENDARY,
        bonus: 'Skill Damage Reduction +10.8%, Def/HP boost. Reduces troop damage taken by 40% for first 18s.',
        imageUrl: '/images/rings/r11.png'
    },
    {
        id: 'r12',
        name: 'Ring of Bear',
        rarity: HeroRarity.EPIC,
        bonus: 'Commander Might Damage +8.8%, Attack +15.4%. Trading Armor for massive Commander Might.',
        imageUrl: '/images/rings/r12.png'
    },
    {
        id: 'r13',
        name: 'Ring of Rhino',
        rarity: HeroRarity.EPIC,
        bonus: 'Damage Reduction +6.6%, Defense +11%. Breach: Deals significant damage to wall durability.',
        imageUrl: '/images/rings/r13.png'
    },
    {
        id: 'r14',
        name: 'Ring of Crow',
        rarity: HeroRarity.EPIC,
        bonus: 'Attack +17.6%, Defense +13.2%. Twist of Fate: Steals Might, Strategy, and Armor from enemy commander.',
        imageUrl: '/images/rings/r14.png'
    },
    {
        id: 'r15',
        name: 'Ring of Seahorse',
        rarity: HeroRarity.EPIC,
        bonus: 'Defense +17.6%, Health +6.6%. Unyielding Faith: Reduces strategy damage taken when hit hard.',
        imageUrl: '/images/rings/r15.png'
    },
    {
        id: 'r16',
        name: 'Ring of Shark',
        rarity: HeroRarity.EPIC,
        bonus: 'Normal Attack Damage +13.2%, Attack +15.4%. Punisher: Stacking reduction of target recovery effects.',
        imageUrl: '/images/rings/r16.png'
    },
    {
        id: 'r17',
        name: 'Ring of Badger',
        rarity: HeroRarity.EPIC,
        bonus: 'Damage Reduction +6.6%, Defense +11%. Reduces early Normal/Secondary Strike damage taken.',
        imageUrl: '/images/rings/r17.png'
    },
    {
        id: 'r18',
        name: 'Ring of Elephant',
        rarity: HeroRarity.EPIC,
        bonus: 'Defense +17.6%, Health +6.6%. Siege Master: Massive boost to Hero Siege stat.',
        imageUrl: '/images/rings/r18.png'
    },
    {
        id: 'r19',
        name: 'Ring of Serpent',
        rarity: HeroRarity.EPIC,
        bonus: 'Attack +17.6%, Defense +13.2%. Boosts Strategy based on Might.',
        imageUrl: '/images/rings/r19.png'
    },
    {
        id: 'r20',
        name: 'Ring of Deer',
        rarity: HeroRarity.EPIC,
        bonus: 'Commander Damage +6.16%. Coercion: Weakens random enemy and buffs ally damage.',
        imageUrl: '/images/rings/r20.png'
    },
    {
        id: 'r21',
        name: 'Ring of Falcon',
        rarity: HeroRarity.EPIC,
        bonus: 'Healing +15.4%, Defense +13.2%. Blessing: Randomly recovers units or reduces damage every 9s.',
        imageUrl: '/images/rings/r21.png'
    },
    {
        id: 'r22',
        name: 'Ring of Night Wolf',
        rarity: HeroRarity.EPIC,
        bonus: 'Commander Damage +8.8%, Attack +13.2%. Periodic damage boost to Normal attacks/Secondary strikes.',
        imageUrl: '/images/rings/r22.png'
    },
    {
        id: 'r23',
        name: 'Ring of Boar',
        rarity: HeroRarity.EPIC,
        bonus: 'Attack +17.6%, Defense +13.2%. Burning Will: Boosts Passive skill damage when low on health.',
        imageUrl: '/images/rings/r23.png'
    },
    {
        id: 'r24',
        name: 'Ring of Lion',
        rarity: HeroRarity.EPIC,
        bonus: 'Attack +17.6%, Defense +13.2%. Increases Hero Might, Strategy, and Armor by 65.',
        imageUrl: '/images/rings/r24.png'
    },
    {
        id: 'r25',
        name: 'Ring of Daisy',
        rarity: HeroRarity.RARE,
        bonus: 'Attack/Defense +6.8%. Double Strike: Might damage after normal attacks.',
        imageUrl: '/images/rings/r25.png'
    },
    {
        id: 'r26',
        name: 'Ring of Iris',
        rarity: HeroRarity.RARE,
        bonus: 'Attack/Defense +6.8%. Increases Critical Strike Rate by 5.5%.',
        imageUrl: '/images/rings/r26.png'
    },
    {
        id: 'r27',
        name: 'Ring of Rose',
        rarity: HeroRarity.RARE,
        bonus: 'Attack/Defense +6.8%. Periodic Strategy Damage to enemy troop.',
        imageUrl: '/images/rings/r27.png'
    },
    {
        id: 'r28',
        name: 'Ring of Clover',
        rarity: HeroRarity.RARE,
        bonus: 'Attack/Defense +6.8%. Chance to reduce troop damage taken.',
        imageUrl: '/images/rings/r28.png'
    },
    {
        id: 'r29',
        name: 'Ring of Hyacinth',
        rarity: HeroRarity.RARE,
        bonus: 'Defense +6.8%, Health +3.4%. Increases Hero XP obtained by 25%.',
        imageUrl: '/images/rings/r29.png'
    },
    {
        id: 'r30',
        name: 'Ring of Lily',
        rarity: HeroRarity.RARE,
        bonus: 'Defense +6.8%, Health +3.4%. Periodic troop unit recovery.',
        imageUrl: '/images/rings/r30.png'
    },
    {
        id: 'r31',
        name: 'Ring of Laurel',
        rarity: HeroRarity.RARE,
        bonus: 'Attack/Defense +6.8%. Boosts Hero Siege stat by 89.',
        imageUrl: '/images/rings/r31.png'
    },
    {
        id: 'r32',
        name: 'Ring of Sunflower',
        rarity: HeroRarity.RARE,
        bonus: 'Defense +6.8%, Health +3.4%. Extra resources when gathering.',
        imageUrl: '/images/rings/r32.png'
    },
    {
        id: 'r33',
        name: 'Ring of Tulip',
        rarity: HeroRarity.RARE,
        bonus: 'Attack/Defense +6.8%. Periodic Might Damage to enemy troop.',
        imageUrl: '/images/rings/r33.png'
    },
    {
        id: 'r34',
        name: 'Ring of Violet',
        rarity: HeroRarity.RARE,
        bonus: 'Attack +6.8%, Defense +3.4%. Increases gathering speed by 20%.',
        imageUrl: '/images/rings/r34.png'
    },
];

export const PROVEN_LINEUPS: ProvenLineup[] = [
    {
        id: 'p1',
        name: 'Warrior Swordsmen',
        type: TroopType.SWORDSMEN,
        heroIds: ['h6', 'h28', 'h15'],
        reasoning: 'Damage: 415,974'
    },
    {
        id: 'p2',
        name: 'Tactician Swordsmen',
        type: TroopType.SWORDSMEN,
        heroIds: ['h9', 'h28', 'h25'],
        reasoning: 'Damage: 411,732'
    },
    {
        id: 'p3',
        name: 'Third Place',
        type: TroopType.SWORDSMEN,
        heroIds: ['h9', 'h28', 'h15'],
        reasoning: 'Damage: 359,147'
    },
    {
        id: 'p5',
        name: 'Champion Cavalry',
        type: TroopType.CAVALRY,
        heroIds: ['h1','l15','l16'],
        reasoning: 'Lu Bu acts as the primary damage dealer, utilizing his \'Ripper Tiger\' and Critical Strike specialty. Vlad III adds sustain and damage via \'Deadly Dragonthron\', while Zhao Hun serves as the tank buffer with \'Dragon Manifestation\'.'
    },
    {
        id: 'p6',
        name: 'Second Place',
        type: TroopType.CAVALRY,
        heroIds: ['l16','h1','l15'],
        reasoning: 'Damage: 435,588'
    },
    {
        id: 'p8',
        name: 'Third Place',
        type: TroopType.CAVALRY,
        heroIds: ['h1','h16','l15'],
        reasoning: 'Damage: 428,281'
    },
    {
        id: 'p9',
        name: 'First Place',
        type: TroopType.ARCHERS,
        heroIds: ['h9','h25','l11'],
        reasoning: 'Damage: 844,811'
    },
    {
        id: 'p10',
        name: 'Second Place',
        type: TroopType.ARCHERS,
        heroIds: ['h12','l11','h25'],
        reasoning: 'Damage: 550,240'
    },
    {
        id: 'p11',
        name: 'Third Place',
        type: TroopType.ARCHERS,
        heroIds: ['h12','l11','l8'],
        reasoning: 'Damage: 477,157'
    },
    {
        id: 'p12',
        name: 'First Place',
        type: TroopType.PIKEMEN,
        heroIds: ['e5','h20','l15'],
        reasoning: ''
    },
    {
        id: 'p13',
        name: 'Second Place',
        type: TroopType.PIKEMEN,
        heroIds: ['l3','h21','h20'],
        reasoning: ''
    },
    {
        id: 'p14',
        name: 'Third Place',
        type: TroopType.PIKEMEN,
        heroIds: ['l3','h21','e4'],
        reasoning: ''
    },



];
