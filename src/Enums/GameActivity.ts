export const enum GameActivity {
	ACT_DOTA_IDLE = 1500,
	ACT_DOTA_IDLE_RARE = 1501,
	ACT_DOTA_RUN = 1502,
	ACT_DOTA_ATTACK = 1503,
	ACT_DOTA_ATTACK2 = 1504,
	ACT_DOTA_ATTACK_EVENT = 1505,
	ACT_DOTA_DIE = 1506,
	ACT_DOTA_FLINCH = 1507,
	ACT_DOTA_FLAIL = 1508,
	ACT_DOTA_DISABLED = 1509,
	ACT_DOTA_CAST_ABILITY_1 = 1510,
	ACT_DOTA_CAST_ABILITY_2 = 1511,
	ACT_DOTA_CAST_ABILITY_3 = 1512,
	ACT_DOTA_CAST_ABILITY_4 = 1513,
	ACT_DOTA_CAST_ABILITY_5 = 1514,
	ACT_DOTA_CAST_ABILITY_6 = 1515,
	ACT_DOTA_OVERRIDE_ABILITY_1 = 1516,
	ACT_DOTA_OVERRIDE_ABILITY_2 = 1517,
	ACT_DOTA_OVERRIDE_ABILITY_3 = 1518,
	ACT_DOTA_OVERRIDE_ABILITY_4 = 1519,
	ACT_DOTA_CHANNEL_ABILITY_1 = 1520,
	ACT_DOTA_CHANNEL_ABILITY_2 = 1521,
	ACT_DOTA_CHANNEL_ABILITY_3 = 1522,
	ACT_DOTA_CHANNEL_ABILITY_4 = 1523,
	ACT_DOTA_CHANNEL_ABILITY_5 = 1524,
	ACT_DOTA_CHANNEL_ABILITY_6 = 1525,
	ACT_DOTA_CHANNEL_END_ABILITY_1 = 1526,
	ACT_DOTA_CHANNEL_END_ABILITY_2 = 1527,
	ACT_DOTA_CHANNEL_END_ABILITY_3 = 1528,
	ACT_DOTA_CHANNEL_END_ABILITY_4 = 1529,
	ACT_DOTA_CHANNEL_END_ABILITY_5 = 1530,
	ACT_DOTA_CHANNEL_END_ABILITY_6 = 1531,
	ACT_DOTA_CONSTANT_LAYER = 1532,
	ACT_DOTA_CAPTURE = 1533,
	ACT_DOTA_SPAWN = 1534,
	ACT_DOTA_KILLTAUNT = 1535,
	ACT_DOTA_TAUNT = 1536,
	ACT_DOTA_THIRST = 1537,
	ACT_DOTA_CAST_DRAGONBREATH = 1538,
	ACT_DOTA_ECHO_SLAM = 1539,
	ACT_DOTA_CAST_ABILITY_1_END = 1540,
	ACT_DOTA_CAST_ABILITY_2_END = 1541,
	ACT_DOTA_CAST_ABILITY_3_END = 1542,
	ACT_DOTA_CAST_ABILITY_4_END = 1543,
	ACT_MIRANA_LEAP_END = 1544,
	ACT_WAVEFORM_START = 1545,
	ACT_WAVEFORM_END = 1546,
	ACT_DOTA_CAST_ABILITY_ROT = 1547,
	ACT_DOTA_DIE_SPECIAL = 1548,
	ACT_DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
	ACT_DOTA_RATTLETRAP_POWERCOGS = 1550,
	ACT_DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
	ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
	ACT_DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
	ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
	ACT_DOTA_TINKER_REARM1 = 1555,
	ACT_DOTA_TINKER_REARM2 = 1556,
	ACT_DOTA_TINKER_REARM3 = 1557,
	ACT_TINY_AVALANCHE = 1558,
	ACT_TINY_TOSS = 1559,
	ACT_TINY_GROWL = 1560,
	ACT_DOTA_WEAVERBUG_ATTACH = 1561,
	ACT_DOTA_CAST_WILD_AXES_END = 1562,
	ACT_DOTA_CAST_LIFE_BREAK_START = 1563,
	ACT_DOTA_CAST_LIFE_BREAK_END = 1564,
	ACT_DOTA_NIGHTSTALKER_TRANSITION = 1565,
	ACT_DOTA_LIFESTEALER_RAGE = 1566,
	ACT_DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
	ACT_DOTA_SAND_KING_BURROW_IN = 1568,
	ACT_DOTA_SAND_KING_BURROW_OUT = 1569,
	ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
	ACT_DOTA_WHEEL_LAYER = 1571,
	ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
	ACT_DOTA_ALCHEMIST_CONCOCTION = 1573,
	ACT_DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
	ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
	ACT_DOTA_LIFESTEALER_INFEST = 1576,
	ACT_DOTA_LIFESTEALER_INFEST_END = 1577,
	ACT_DOTA_LASSO_LOOP = 1578,
	ACT_DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
	ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
	ACT_DOTA_CAST_COLD_SNAP = 1581,
	ACT_DOTA_CAST_GHOST_WALK = 1582,
	ACT_DOTA_CAST_TORNADO = 1583,
	ACT_DOTA_CAST_EMP = 1584,
	ACT_DOTA_CAST_ALACRITY = 1585,
	ACT_DOTA_CAST_CHAOS_METEOR = 1586,
	ACT_DOTA_CAST_SUN_STRIKE = 1587,
	ACT_DOTA_CAST_FORGE_SPIRIT = 1588,
	ACT_DOTA_CAST_ICE_WALL = 1589,
	ACT_DOTA_CAST_DEAFENING_BLAST = 1590,
	ACT_DOTA_VICTORY = 1591,
	ACT_DOTA_DEFEAT = 1592,
	ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
	ACT_DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
	ACT_DOTA_TELEPORT = 1595,
	ACT_DOTA_TELEPORT_END = 1596,
	ACT_DOTA_CAST_REFRACTION = 1597,
	ACT_DOTA_CAST_ABILITY_7 = 1598,
	ACT_DOTA_CANCEL_SIREN_SONG = 1599,
	ACT_DOTA_CHANNEL_ABILITY_7 = 1600,
	ACT_DOTA_LOADOUT = 1601,
	ACT_DOTA_FORCESTAFF_END = 1602,
	ACT_DOTA_POOF_END = 1603,
	ACT_DOTA_SLARK_POUNCE = 1604,
	ACT_DOTA_MAGNUS_SKEWER_START = 1605,
	ACT_DOTA_MAGNUS_SKEWER_END = 1606,
	ACT_DOTA_MEDUSA_STONE_GAZE = 1607,
	ACT_DOTA_RELAX_START = 1608,
	ACT_DOTA_RELAX_LOOP = 1609,
	ACT_DOTA_RELAX_END = 1610,
	ACT_DOTA_CENTAUR_STAMPEDE = 1611,
	ACT_DOTA_BELLYACHE_START = 1612,
	ACT_DOTA_BELLYACHE_LOOP = 1613,
	ACT_DOTA_BELLYACHE_END = 1614,
	ACT_DOTA_ROQUELAIRE_LAND = 1615,
	ACT_DOTA_ROQUELAIRE_LAND_IDLE = 1616,
	ACT_DOTA_GREEVIL_CAST = 1617,
	ACT_DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
	ACT_DOTA_GREEVIL_HOOK_START = 1619,
	ACT_DOTA_GREEVIL_HOOK_END = 1620,
	ACT_DOTA_GREEVIL_BLINK_BONE = 1621,
	ACT_DOTA_IDLE_SLEEPING = 1622,
	ACT_DOTA_INTRO = 1623,
	ACT_DOTA_GESTURE_POINT = 1624,
	ACT_DOTA_GESTURE_ACCENT = 1625,
	ACT_DOTA_SLEEPING_END = 1626,
	ACT_DOTA_AMBUSH = 1627,
	ACT_DOTA_ITEM_LOOK = 1628,
	ACT_DOTA_STARTLE = 1629,
	ACT_DOTA_FRUSTRATION = 1630,
	ACT_DOTA_TELEPORT_REACT = 1631,
	ACT_DOTA_TELEPORT_END_REACT = 1632,
	ACT_DOTA_SHRUG = 1633,
	ACT_DOTA_RELAX_LOOP_END = 1634,
	ACT_DOTA_PRESENT_ITEM = 1635,
	ACT_DOTA_IDLE_IMPATIENT = 1636,
	ACT_DOTA_SHARPEN_WEAPON = 1637,
	ACT_DOTA_SHARPEN_WEAPON_OUT = 1638,
	ACT_DOTA_IDLE_SLEEPING_END = 1639,
	ACT_DOTA_BRIDGE_DESTROY = 1640,
	ACT_DOTA_TAUNT_SNIPER = 1641,
	ACT_DOTA_DEATH_BY_SNIPER = 1642,
	ACT_DOTA_LOOK_AROUND = 1643,
	ACT_DOTA_CAGED_CREEP_RAGE = 1644,
	ACT_DOTA_CAGED_CREEP_RAGE_OUT = 1645,
	ACT_DOTA_CAGED_CREEP_SMASH = 1646,
	ACT_DOTA_CAGED_CREEP_SMASH_OUT = 1647,
	ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
	ACT_DOTA_INTRO_LOOP = 1649,
	ACT_DOTA_BRIDGE_THREAT = 1650,
	ACT_DOTA_DAGON = 1651,
	ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
	ACT_DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
	ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
	ACT_DOTA_NIAN_PIN_START = 1655,
	ACT_DOTA_NIAN_PIN_LOOP = 1656,
	ACT_DOTA_NIAN_PIN_END = 1657,
	ACT_DOTA_LEAP_STUN = 1658,
	ACT_DOTA_LEAP_SWIPE = 1659,
	ACT_DOTA_NIAN_INTRO_LEAP = 1660,
	ACT_DOTA_AREA_DENY = 1661,
	ACT_DOTA_NIAN_PIN_TO_STUN = 1662,
	ACT_DOTA_RAZE_1 = 1663,
	ACT_DOTA_RAZE_2 = 1664,
	ACT_DOTA_RAZE_3 = 1665,
	ACT_DOTA_UNDYING_DECAY = 1666,
	ACT_DOTA_UNDYING_SOUL_RIP = 1667,
	ACT_DOTA_UNDYING_TOMBSTONE = 1668,
	ACT_DOTA_WHIRLING_AXES_RANGED = 1669,
	ACT_DOTA_SHALLOW_GRAVE = 1670,
	ACT_DOTA_COLD_FEET = 1671,
	ACT_DOTA_ICE_VORTEX = 1672,
	ACT_DOTA_CHILLING_TOUCH = 1673,
	ACT_DOTA_ENFEEBLE = 1674,
	ACT_DOTA_FATAL_BONDS = 1675,
	ACT_DOTA_MIDNIGHT_PULSE = 1676,
	ACT_DOTA_ANCESTRAL_SPIRIT = 1677,
	ACT_DOTA_THUNDER_STRIKE = 1678,
	ACT_DOTA_KINETIC_FIELD = 1679,
	ACT_DOTA_STATIC_STORM = 1680,
	ACT_DOTA_MINI_TAUNT = 1681,
	ACT_DOTA_ARCTIC_BURN_END = 1682,
	ACT_DOTA_LOADOUT_RARE = 1683,
	ACT_DOTA_SWIM = 1684,
	ACT_DOTA_FLEE = 1685,
	ACT_DOTA_TROT = 1686,
	ACT_DOTA_SHAKE = 1687,
	ACT_DOTA_SWIM_IDLE = 1688,
	ACT_DOTA_WAIT_IDLE = 1689,
	ACT_DOTA_GREET = 1690,
	ACT_DOTA_TELEPORT_COOP_START = 1691,
	ACT_DOTA_TELEPORT_COOP_WAIT = 1692,
	ACT_DOTA_TELEPORT_COOP_END = 1693,
	ACT_DOTA_TELEPORT_COOP_EXIT = 1694,
	ACT_DOTA_SHOPKEEPER_PET_INTERACT = 1695,
	ACT_DOTA_ITEM_PICKUP = 1696,
	ACT_DOTA_ITEM_DROP = 1697,
	ACT_DOTA_CAPTURE_PET = 1698,
	ACT_DOTA_PET_WARD_OBSERVER = 1699,
	ACT_DOTA_PET_WARD_SENTRY = 1700,
	ACT_DOTA_PET_LEVEL = 1701,
	ACT_DOTA_CAST_BURROW_END = 1702,
	ACT_DOTA_LIFESTEALER_ASSIMILATE = 1703,
	ACT_DOTA_LIFESTEALER_EJECT = 1704,
	ACT_DOTA_ATTACK_EVENT_BASH = 1705,
	ACT_DOTA_CAPTURE_RARE = 1706,
	ACT_DOTA_AW_MAGNETIC_FIELD = 1707,
	ACT_DOTA_CAST_GHOST_SHIP = 1708,
	ACT_DOTA_FXANIM = 1709,
	ACT_DOTA_VICTORY_START = 1710,
	ACT_DOTA_DEFEAT_START = 1711,
	ACT_DOTA_DP_SPIRIT_SIPHON = 1712,
	ACT_DOTA_TRICKS_END = 1713,
	ACT_DOTA_ES_STONE_CALLER = 1714,
	ACT_DOTA_MK_STRIKE = 1715,
	ACT_DOTA_VERSUS = 1716,
	ACT_DOTA_CAPTURE_CARD = 1717,
	ACT_DOTA_MK_SPRING_SOAR = 1718,
	ACT_DOTA_MK_SPRING_END = 1719,
	ACT_DOTA_MK_TREE_SOAR = 1720,
	ACT_DOTA_MK_TREE_END = 1721,
	ACT_DOTA_MK_FUR_ARMY = 1722,
	ACT_DOTA_MK_SPRING_CAST = 1723,
	ACT_DOTA_NECRO_GHOST_SHROUD = 1724,
	ACT_DOTA_OVERRIDE_ARCANA = 1725,
	ACT_DOTA_SLIDE = 1726,
	ACT_DOTA_SLIDE_LOOP = 1727,
	ACT_DOTA_GENERIC_CHANNEL_1 = 1728,
	ACT_DOTA_GS_SOUL_CHAIN = 1729,
	ACT_DOTA_GS_INK_CREATURE = 1730,
	ACT_DOTA_TRANSITION = 1731,
	ACT_DOTA_BLINK_DAGGER = 1732,
	ACT_DOTA_BLINK_DAGGER_END = 1733,
	ACT_DOTA_CUSTOM_TOWER_ATTACK = 1734,
	ACT_DOTA_CUSTOM_TOWER_IDLE = 1735,
	ACT_DOTA_CUSTOM_TOWER_DIE = 1736,
	ACT_DOTA_CAST_COLD_SNAP_ORB = 1737,
	ACT_DOTA_CAST_GHOST_WALK_ORB = 1738,
	ACT_DOTA_CAST_TORNADO_ORB = 1739,
	ACT_DOTA_CAST_EMP_ORB = 1740,
	ACT_DOTA_CAST_ALACRITY_ORB = 1741,
	ACT_DOTA_CAST_CHAOS_METEOR_ORB = 1742,
	ACT_DOTA_CAST_SUN_STRIKE_ORB = 1743,
	ACT_DOTA_CAST_FORGE_SPIRIT_ORB = 1744,
	ACT_DOTA_CAST_ICE_WALL_ORB = 1745,
	ACT_DOTA_CAST_DEAFENING_BLAST_ORB = 1746,
	ACT_DOTA_NOTICE = 1747,
	ACT_DOTA_CAST_ABILITY_2_ALLY = 1748,
	ACT_DOTA_SHUFFLE_L = 1749,
	ACT_DOTA_SHUFFLE_R = 1750,
	ACT_DOTA_OVERRIDE_LOADOUT = 1751,
	ACT_DOTA_TAUNT_SPECIAL = 1752,
	ACT_DOTA_TELEPORT_START = 1753,
	ACT_DOTA_GENERIC_CHANNEL_1_START = 1754,
	ACT_DOTA_CUSTOM_TOWER_IDLE_RARE = 1755,
	ACT_DOTA_CUSTOM_TOWER_TAUNT = 1756,
	ACT_DOTA_CUSTOM_TOWER_HIGH_FIVE = 1757,
	ACT_DOTA_ATTACK_SPECIAL = 1758,
	ACT_DOTA_TRANSITION_IDLE = 1759,
	ACT_DOTA_PIERCE_THE_VEIL = 1760,
	ACT_DOTA_RUN_RARE = 1761,
	ACT_DOTA_VIPER_DIVE = 1762,
	ACT_DOTA_VIPER_DIVE_END = 1763,
	ACT_DOTA_MK_STRIKE_END = 1764
}