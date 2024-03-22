// @ts-ignore
import { StockInfo as ImportSDK } from "github.com/octarine-public/wrapper/index"

import { Team } from "../Enums/Team"
import type { AbilityData } from "../ObjectData/AbilityData"

export declare class StockInfo {
	/** @hidden */
	constructor()
	/**
	 * @description Get the ability ID
	 *
	 * @return {number}
	 * @example
	 * const abilityID = stockInfo.AbilityID;
	 * console.log(abilityID);
	 */
	public get AbilityID(): number
	/**
	 * @description Get the player ID
	 *
	 * @return {number}
	 * @example
	 * const playerID = stockInfo.PlayerID;
	 * console.log(playerID);
	 */
	public get PlayerID(): number
	/**
	 * @description Get InitStockDuration
	 *
	 * @return {number}
	 * @example
	 * const initStockDuration = stockInfo.InitStockDuration;
	 * console.log(initStockDuration);
	 */
	public get InitStockDuration(): number
	/**
	 * @description Get stock duration
	 *
	 * @return {number}
	 * @example
	 * const stockDuration = stockInfo.StockDuration;
	 * console.log(stockDuration);
	 */
	public get StockDuration(): number
	/**
	 * @description Get stock time in seconds
	 *
	 * @return {number}
	 * @example
	 * const stockTime = stockInfo.StockTime;
	 * console.log(stockTime);
	 */
	public get StockTime(): number
	/**
	 * @description Get max count
	 *
	 * @return {number}
	 * @example
	 * const maxCount = stockInfo.MaxCount;
	 * console.log(maxCount);
	 */
	public get MaxCount(): number
	/**
	 * @description Get team
	 *
	 * @return {Team}
	 * @example
	 * const team = stockInfo.Team;
	 * console.log(team); // 3 (Team.Dire)
	 */
	public get Team(): Team
	/**
	 * @description Get IsAvalible
	 *
	 * @return {boolean}
	 * @example
	 * const isAvalible = stockInfo.IsAvalible;
	 * console.log(isAvalible);
	 */
	public get IsAvalible(): boolean
	/**
	 * @description Get stock count
	 *
	 * @return {number}
	 * @example
	 * const stockCount = stockInfo.StockCount;
	 * console.log(stockCount);
	 */
	public get StockCount(): number
	/**
	 * @description Get player number
	 *
	 * @return {number}
	 * @example
	 * const playerNumber = stockInfo.PlayerNumber;
	 * console.log(playerNumber);
	 */
	public get PlayerNumber(): number
	/**
	 * @description Get bonus delayed stock count
	 *
	 * @return {number}
	 * @example
	 * const bonusDelayedStockCount = stockInfo.BonusDelayedStockCount;
	 * console.log(bonusDelayedStockCount);
	 */
	public get BonusDelayedStockCount(): number
	/**
	 * @description Get ability or item name
	 *
	 * @return {string}
	 * @example
	 * const abilityName = stockInfo.AbilityName;
	 * console.log(abilityName);
	 */
	public GetAbilityName(): string
	/**
	 * @description Get ability data
	 *
	 * @return {AbilityData}
	 * @example
	 * const abilityData = stockInfo.AbilityData;
	 * console.log(abilityData);
	 */
	public GetAbilityData(): AbilityData
}

/**
 * @ignore
 * @internal
 */
export const CStockInfo = ImportSDK as unknown as typeof StockInfo
