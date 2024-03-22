// @ts-ignore
import { Item as ImportSDK } from "github.com/octarine-public/wrapper/index"

import { DOTAScriptInventorySlot } from "../../Enums/DOTAScriptInventorySlot"
import { EShareAbility } from "../../Enums/EShareAbility"
import type { Ability } from "./Ability"
import type { Unit } from "./Unit"

export declare class Item extends Ability {
	/**
	 * @description The slot the item is in
	 *
	 * @return {DOTAScriptInventorySlot}
	 */
	public get ItemSlot(): DOTAScriptInventorySlot
	/**
	 * @description The time at which the item is enabled. Example: the item was moved to backpack and returned
	 *
	 * @return {number}
	 */
	public get EnableTime(): number
	/**
	 * @description The sharability of the item
	 *
	 * @returns {EShareAbility}
	 */
	public get Shareability(): EShareAbility
	/**
	 * @description Indicates whether the item can be dropped
	 *
	 * @return {boolean}
	 */
	public get IsDroppable(): boolean
	/**
	 * @description The time at which the item was assembled.
	 *
	 * @return {number}
	 */
	public get AssembledTime(): number
	/**
	 * @description Indicates whether the item can be used out of the inventory.
	 *
	 * @return {boolean}
	 */
	public get CanBeUsedOutOfInventory(): boolean
	/**
	 * @description The initial number of charges for the item.
	 *
	 * @return {number}
	 */
	public get InitialCharges(): number
	/**
	 * @description Indicates whether the item can be alerted.
	 *
	 * @return {boolean}
	 */
	public get IsAlertable(): boolean
	/**
	 * @description Indicates whether the item is cast on pickup.
	 *
	 * @return {boolean}
	 */
	public get IsCastedOnPickup(): boolean
	/**
	 * @description Indicates whether the item is combinable.
	 *
	 * @return {boolean}
	 */
	public get IsCombinable(): boolean
	/**
	 * @description Indicates whether the item is locked and cannot be combined.
	 *
	 * @return {boolean}
	 */
	public get IsCombineLocked(): boolean
	/**
	 * @description Indicates whether the item can be disassembled.
	 *
	 * @return {boolean}
	 */
	public get IsDisassemblable(): boolean
	/**
	 * @description Check if the item is killable.
	 *
	 * @return {boolean}
	 */
	public get IsKillable(): boolean
	/**
	 * @description Indicates whether the item is permanent.
	 *
	 * @return {boolean}
	 */
	public get IsPermanent(): boolean
	/**
	 * @description Returns whether the item is purchasable.
	 *
	 * @return {boolean}
	 */
	public get IsPurchasable(): boolean
	/**
	 * @description Returns whether the item was purchased while player dead.
	 *
	 * @return {boolean}
	 */
	public get IsPurchasedWhileDead(): boolean
	/**
	 * @description Returns whether the item is a recipe
	 *
	 * @return {boolean}
	 */
	public get IsRecipe(): boolean
	/**
	 * @description True if the item requires charges, false otherwise.
	 *
	 * @return {boolean}
	 */
	public get RequiresCharges(): boolean
	/**
	 * @description Returns whether the item is sellable.
	 *
	 * @return {boolean}
	 */
	public get IsSellable(): boolean
	/**
	 * @description Returns whether the item is stackable.
	 *
	 * @return {boolean}
	 */
	public get IsStackable(): boolean
	/**
	 * @description Returns the player owner ID of the item.
	 *
	 * @return {number | -1}
	 */
	public get PlayerOwnerID(): number
	/**
	 * @description Returns the player owner ID of the item.
	 * @deprecated Use Item#PlayerOwnerID
	 *
	 * @return {number | -1}
	 */
	public get PurchaserID(): number
	/**
	 * @description {number} Returns the purchase time of the item.
	 *
	 * @return {number}
	 */
	public get PurchaseTime(): number
	/**
	 * @description Returns the secondary charges of the item.
	 *
	 * @return {number}
	 */
	public get SecondaryCharges(): number
	/**
	 * @description Indicates whether the item is a neutral drop.
	 *
	 * @return {boolean}
	 */
	public get IsNeutralDrop(): boolean
	/**
	 * @description Returns the current charges of the item.
	 *
	 * @return {number}
	 */
	public get ItemCurrentCharges(): number
	/**
	 * @description The purchaser of the item.
	 *
	 * @return {Nullable<Unit>}
	 */
	public get Purchaser(): Nullable<Unit>
	/**
	 * @description Get the texture path of the item.
	 *
	 * @return {string}
	 * @example
	 * const itemPath = item.TexturePath;
	 * console.log(itemPath); // "panorama/images/items/tpscroll_png.vtex_c"
	 */
	public get TexturePath(): string
	/**
	 * @description Returns the cooldown of the item.
	 *
	 * @return {number}
	 */
	public get Cooldown(): number
	/**
	 * @description Indicates whether the item is ready.
	 *
	 * @return {boolean}
	 */
	public get IsReady(): boolean
	/**
	 * @description Indicates whether the item can be used.
	 *
	 * @return {boolean}
	 */
	public get CanBeUsable(): boolean
	/**
	 * @description Returns the remaining time for a sale. The remaining time in seconds.
	 *
	 * @return {number}
	 */
	public get SaleRemainingTime(): number
	/**
	 * @description Check if the Item is muted.
	 *
	 * @return {boolean}
	 */
	public get IsMuted(): boolean
	/**
	 * @description Returns the cost of the item.
	 *
	 * @return {number}
	 */
	public get Cost(): number
	public get EffectName(): string
	public get IsDisplayingCharges(): boolean
	public get IsHidingCharges(): boolean
	public get GroundModelName(): string
	public get ShouldDisplayCharges(): boolean
	public get SpellAmplification(): number
	public get CurrentCharges(): number
	public DisassembleItem(queue?: boolean): void
	public MoveItem(slot: DOTAScriptInventorySlot): void
	public DropAtFountain(): void
	public EjectFromStash(): void
	public SellItem(): void
	public ItemLock(): void
	public ItemUnlock(): void
	public CanBeCasted(bonusMana?: number): boolean
}

/**
 * @ignore
 * @internal
 */
export const CItem = ImportSDK as unknown as typeof Item
