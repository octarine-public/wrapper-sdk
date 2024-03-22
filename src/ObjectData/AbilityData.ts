// @ts-ignore
import { AbilityData as ImportSDK } from "github.com/octarine-public/wrapper/index"

import { ABILITY_TYPES } from "../Enums/ABILITY_TYPES"
import { DAMAGE_TYPES } from "../Enums/DAMAGE_TYPES"
import { DOTA_ITEM_DISASSEMBLE } from "../Enums/DOTA_ITEM_DISASSEMBLE"
import { GameActivity } from "../Enums/GameActivity"
import { SPELL_IMMUNITY_TYPES } from "../Enums/SPELL_IMMUNITY_TYPES"

// WIP: TODO
export declare class AbilityData {
	/**
	 * @description Get AbilityData by ability name
	 *
	 * @param {string} abilityName
	 * @return {Nullable<AbilityData>}
	 */
	public static GetAbilityByName(abilityName: string): Nullable<AbilityData>
	/**
	 * @description Get ability name by ability ID
	 *
	 * @param {string} abilityID - the ID of the ability
	 * @return {Nullable<string>}
	 */
	public static GetAbilityNameByID(abilityID: number): Nullable<string>

	/**
	 * @description Get item recipe name by item name
	 *
	 * @param {string} itemName
	 * @return {Nullable<string>}
	 */
	public static GetItemRecipeName(itemName: string): Nullable<string>

	/**
	 * @description Get ability behavior (DOTA_ABILITY_BEHAVIOR bitmask)
	 *
	 * @return {number}
	 */
	public get AbilityBehavior(): number
	/**
	 * @description Get ability type
	 *
	 * @return {ABILITY_TYPES}
	 */
	public get AbilityType(): ABILITY_TYPES
	/**
	 * @description Get ability max level
	 *
	 * @return {number}
	 */
	public get MaxLevel(): number
	/**
	 * @description Get ability texture path
	 *
	 * @return {string}
	 */
	public get TexturePath(): string
	/**
	 * @description Get ability target flags (DOTA_UNIT_TARGET_FLAGS bitmask)
	 *
	 * @return {number}
	 */
	public get TargetFlags(): number
	/**
	 * @description Get ability target team (DOTA_UNIT_TARGET_TEAM bitmask)
	 *
	 * @return {number}
	 */
	public get TargetTeam(): number
	/**
	 * @description Get ability target type (DOTA_UNIT_TARGET_TYPE bitmask)
	 *
	 * @return {number}
	 */
	public get TargetType(): number
	/**
	 * @description Get ability shared cooldown name
	 *
	 * @return {string}
	 */
	public get SharedCooldownName(): string
	/**
	 * @description Get ability model name
	 *
	 * @return {string}
	 */
	public get ModelName(): string
	/**
	 * @description Get ability alternate model name
	 *
	 * @return {string}
	 */
	public get AlternateModelName(): string
	/**
	 * @description Check if the ability is an item
	 *
	 * @return {boolean}
	 */
	public get IsItem(): boolean
	/**
	 * @description Check if the ability is granted by scepter
	 *
	 * @return {boolean}
	 */
	public get IsGrantedByScepter(): boolean
	/**
	 * @description Get ability ID
	 *
	 * @return {number}
	 */
	public get ID(): number
	/**
	 * @description Get ability effect name
	 *
	 * @return {string}
	 */
	public get EffectName(): string
	/**
	 * @description Get ability cost
	 *
	 * @return {number}
	 */
	public get Cost(): number
	/**
	 * @description Check if the ability is purchasable
	 *
	 * @return {boolean}
	 */
	public get Purchasable(): boolean
	/**
	 * @description Get ability damage type
	 *
	 * @return {DAMAGE_TYPES}
	 */
	public get DamageType(): DAMAGE_TYPES
	/**
	 * @description Get ability levels between upgrades
	 *
	 * @return {number}
	 */
	public get LevelsBetweenUpgrades(): number
	/**
	 * @description Get ability required level
	 *
	 * @return {number}
	 */
	public get RequiredLevel(): number
	/**
	 * @description Get ability immunity type
	 *
	 * @return {SPELL_IMMUNITY_TYPES}
	 */
	public get AbilityImmunityType(): SPELL_IMMUNITY_TYPES
	/**
	 * @description Get item is display charges
	 *
	 * @return {boolean}
	 */
	public get ItemDisplayCharges(): boolean
	/**
	 * @description Get item is hide charges
	 *
	 * @return {boolean}
	 */
	public get ItemHideCharges(): boolean
	/**
	 * @description Get ability max cooldown
	 *
	 * @return {Array<number>}
	 */
	public get MaxCooldownCache(): number[]
	/**
	 * @description Get ability max duration
	 *
	 * @return {Array<number>}
	 */
	public get MaxDurationCache(): number[]
	/**
	 * @description Get ability is secret shop
	 *
	 * @return {boolean}
	 */
	public get SecretShop(): boolean
	/**
	 * @description Get ability requirements
	 *
	 * @return {Array<Array<string>>}
	 */
	public get ItemRequirements(): string[][]
	/**
	 * @description Get ability result
	 *
	 * @return {Nullable<string>}
	 */
	public get ItemResult(): Nullable<string>
	/**
	 * @description Get ability stock
	 *
	 * @return {number}
	 */
	public get ItemStockTime(): number
	/**
	 * @description Get ability has shard
	 *
	 * @return {boolean}
	 */
	public get HasShardUpgrade(): boolean
	/**
	 * @description Get ability has scepter
	 *
	 * @return {boolean}
	 */
	public get HasScepterUpgrade(): boolean
	/**
	 * @description Get ability is neutral
	 *
	 * @return {boolean}
	 */
	public get ItemIsNeutralDrop(): boolean
	/**
	 * @description Get ability suggested
	 *
	 * @return {number}
	 */
	public get ShouldBeSuggested(): number
	/**
	 * @description Get ability cast animation
	 *
	 * @return {Nullable<GameActivity>}
	 */
	public get CastAnimation(): Nullable<GameActivity>
	/**
	 * @description Get ability linked ability
	 *
	 * @return {string}
	 */
	public get LinkedAbility(): string
	/**
	 * @description Get ability should be initially suggested
	 *
	 * @return {boolean}
	 */
	public get ShouldBeInitiallySuggested(): boolean
	/**
	 * @description Get ability stock
	 *
	 * @return {Nullable<number>}
	 */
	public get ItemStockInitial(): Nullable<number>
	/**
	 * @description Get ability disassemble rule
	 *
	 * @return {DOTA_ITEM_DISASSEMBLE}
	 */
	public get ItemDisassembleRule(): DOTA_ITEM_DISASSEMBLE
	/**
	 * @description Get ability AOE is increase
	 *
	 * @return {boolean}
	 */
	public get AffectedByAOEIncrease(): boolean

	/**
	 * @description Get special value
	 *
	 * @param {string} specialName - the name of the special value to retrieve
	 * @param {number} level - the level to determine the special value
	 * @param {string} abilityName - optional ability name to further specify the special value
	 * @return {number}
	 */
	public GetSpecialValue(
		specialName: string,
		level: number,
		abilityName?: string
	): number

	public GetCastRange(level: number): number

	/**
	 * @description Get the health cost based on the level provided.
	 *
	 * @param {number} level - The level for which to retrieve the health cost.
	 * @return {number}
	 */
	public GetHealthCost(level: number): number

	public GetManaCost(level: number): number
}

/**
 * @ignore
 * @internal
 */
export const CAbilityData = ImportSDK as unknown as typeof AbilityData
