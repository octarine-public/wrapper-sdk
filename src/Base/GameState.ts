// @ts-ignore
import { GameState as ImportSDK } from "github.com/octarine-public/wrapper/index"

import { DOTAGameUIState } from "../Enums/DOTAGameUIState"
import { Flow } from "../Enums/Flow"
import { Team } from "../Enums/Team"

export declare interface GameState {
	/**
	 * @description Check event called when game is in draw.
	 *
	 * @return {boolean}
	 * @example
	 * // Check event called when game is in draw
	 * const isInDraw = GameState.IsInDraw;
	 * console.log(isInDraw); // false or true
	 */
	get IsInDraw(): boolean
	/**
	 * @description Check if game is connected.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if game is connected
	 * const isConnected = GameState.IsConnected;
	 * console.log(isConnected); // false or true
	 */
	get IsConnected(): boolean
	/**
	 * @description Check if input is captured.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if input is captured
	 * const isInputCaptured = GameState.IsInputCaptured;
	 * console.log(isInputCaptured); // false or true
	 */
	get IsInputCaptured(): boolean
	/**
	 * @description Current server tick.
	 *
	 * @return {number}
	 * @example
	 * // Returns the current server tick
	 * const currentTick = GameState.CurrentServerTick;
	 * console.log(currentTick); // 4333
	 */
	get CurrentServerTick(): number
	/**
	 * @description Current game time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the current game time in seconds
	 * const gameTime = GameState.RawGameTime;
	 * console.log(gameTime); // 62
	 */
	get RawGameTime(): number
	/**
	 * @description Current addon name.
	 *
	 * @return {string}
	 * @example
	 * // Returns the current addon name
	 * const addonName = GameState.AddonName;
	 * console.log(addonName); // "dota2"
	 */
	get AddonName(): string
	/**
	 * @description Current UI game state.
	 *
	 * @return {DOTAGameUIState}
	 * @example
	 * // Returns the current UI game state
	 * const uiState = GameState.UIState;
	 * console.log(uiState); // 2 (DOTAGameUIState.DOTA_GAME_UI_DOTA_INGAME)
	 */
	get UIState(): DOTAGameUIState
	/**
	 * @description Current local team.
	 *
	 * @return {Team}
	 * @example
	 * // Returns the current local team
	 * const localTeam = GameState.LocalTeam;
	 * console.log(localTeam); // 3 (Team.Dire)
	 */
	get LocalTeam(): Team
	/**
	 * @description Get the ping from the specified flow. (in milliseconds)
	 *
	 * @return {number}
	 * @example
	 * // Get the ping from the specified flow
	 * // equalent to GameState.GetLatency(Flow.IN) + GameState.GetLatency(Flow.OUT) * 1000
	 * const ping = GameState.Ping;
	 * console.log(ping); // 333
	 */
	get Ping(): number
	/**
	 * @description Get the average ping from the specified flow. (in milliseconds)
	 *
	 * @return {number}
	 * @example
	 * // Get the average ping from the specified flow
	 * // equalent to GameState.GetAvgLatency(Flow.IN) + GameState.GetAvgLatency(Flow.OUT) * 1000
	 * const ping = GameState.AvgPing;
	 * console.log(ping); // 333
	 */
	get AvgPing(): number
	/**
	 * @description Get the latency from the specified flow. (in seconds)
	 *
	 * @param flow - The flow to get the latency from. (default: Flow.IN)
	 * @return {number}
	 * @example
	 * // Get the latency from the specified flow
	 * const latency = GameState.GetLatency(Flow.IN);
	 * console.log(latency); // 0.0333
	 */
	GetLatency(flow?: Flow): number
	/**
	 * @description Get the average latency from the specified flow. (in seconds)
	 *
	 * @param flow - The flow to get the latency from. (default: Flow.IN)
	 * @return {number}
	 * @example
	 * // Get the average latency from the specified flow
	 * const latency = GameState.GetAvgLatency(Flow.IN);
	 * console.log(latency); // 0.0333
	 */
	GetAvgLatency(flow?: Flow): number
	/**
	 * @description Execute a command.
	 *
	 * @param command - The command to execute
	 * @see https://dota2.fandom.com/wiki/List_of_Console_Commands
	 * @example
	 * // Execute a command
	 * // see https://dota2.fandom.com/wiki/List_of_Console_Commands
	 * GameState.ExecuteCommand("say hi"); // Dota chat will say "hi"
	 */
	ExecuteCommand(command: string): void
}

/**
 * @ignore
 * @internal
 */
export const CGameState = ImportSDK as unknown as GameState
