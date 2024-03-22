// @ts-ignore
import { GameRules as ImportSDK } from "github.com/octarine-public/wrapper/index"

import { DOTAGameMode } from "../Enums/DOTAGameMode"
import { DOTAGameState } from "../Enums/DOTAGameState"
import { DOTAHeroPickState } from "../Enums/DOTAHeroPickState"
import { Team } from "../Enums/Team"
import type { NeutralSpawnBox } from "./NeutralSpawnBox"
import type { StockInfo } from "./StockInfo"

export declare interface GameRules {
	/**
	 * @description Current game time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the current game time in seconds
	 * const gameTime = GameRules?.GameTime ?? 0;
	 * console.log(gameTime); // -80 at start game
	 */
	get GameTime(): number
	/**
	 * @description Current game time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the current game time in seconds
	 * const rawTime = GameRules?.RawGameTime ?? 0;
	 * console.log(rawTime); // 62
	 */
	get RawGameTime(): number
	/**
	 * @description Check if game is paused.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if game is paused
	 * const isPaused = GameRules?.IsPaused ?? false;
	 * console.log(isPaused); // false or true
	 */
	get IsPaused(): boolean
	/**
	 * @description Current rune cycle.
	 *
	 * @return {number}
	 * @example
	 * // Returns the current rune cycle
	 * const runeCycle = GameRules?.RuneCycle ?? 0;
	 * console.log(runeCycle);
	 */
	get RuneCycle(): number
	/**
	 * @description Total number of paused ticks.
	 *
	 * @return {number | Array<number>}
	 * @example
	 * // Returns the total number of paused ticks
	 * const totalPausedTicks = GameRules?.TotalPausedTicks ?? 0;
	 * console.log(totalPausedTicks);
	 */
	get TotalPausedTicks(): number | number[]
	/**
	 * @description Pause start tick.
	 *
	 * @return {number}
	 * @example
	 * // Returns the pause start tick
	 * const pauseStartTick = GameRules?.PauseStartTick ?? 0;
	 * console.log(pauseStartTick);
	 */
	get PauseStartTick(): number
	/**
	 * @description Expected number of players.
	 *
	 * @return {number}
	 * @example
	 * // Returns the expected number of players
	 * const expectedPlayers = GameRules?.ExpectedPlayers ?? 0;
	 * console.log(expectedPlayers);
	 */
	get ExpectedPlayers(): number
	/**
	 * @description Game mode.
	 *
	 * @return {DOTAGameMode}
	 * @example
	 * // Returns the game mode
	 * const gameMode = GameRules?.GameMode ?? DOTAGameMode.DOTA_GAMEMODE_NONE;
	 * console.log(gameMode);
	 */
	get GameMode(): DOTAGameMode
	/**
	 * @description Current game state.
	 *
	 * @return {DOTAGameState}
	 * @example
	 * // Returns the current game state
	 * const gameState = GameRules?.GameState ?? DOTAGameState.DOTA_GAMERULES_STATE_INIT;
	 * console.log(gameState);
	 */
	get GameState(): DOTAGameState
	/**
	 * @description Game start time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the game start time in seconds
	 * const gameStartTime = GameRules?.GameStartTime ?? 0;
	 * console.log(gameStartTime);
	 */
	get GameStartTime(): number
	/**
	 * @description Game load time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the game load time in seconds
	 * const gameLoadTime = GameRules?.GameLoadTime ?? 0;
	 * console.log(gameLoadTime);
	 */
	get GameLoadTime(): number
	/**
	 * @description State transition time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the state transition time in seconds
	 * const stateTransitionTime = GameRules?.StateTransitionTime ?? 0;
	 * console.log(stateTransitionTime);
	 */
	get StateTransitionTime(): number
	/**
	 * @description Hero pick state transition time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the hero pick state transition time in seconds
	 * const heroPickStateTransitionTime = GameRules?.HeroPickStateTransitionTime ?? 0;
	 * console.log(heroPickStateTransitionTime);
	 */
	get HeroPickStateTransitionTime(): number
	/**
	 * @description Glyph (Team Radiant) cooldown time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the glyph cooldown time in seconds
	 * const glyphCooldownTime = GameRules?.GlyphCooldownTime ?? 0;
	 * console.log(glyphCooldownTime);
	 */
	get GlyphCooldownRadiantTime(): number
	/**
	 * @description Glyph (Team Radiant) cooldown remaining time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the glyph cooldown remaining time in seconds
	 * const glyphCooldownTime = GameRules?.GlyphCooldownTime ?? 0;
	 * console.log(glyphCooldownTime);
	 */
	get GlyphCooldownRadiant(): number
	/**
	 * @description Glyph (Team Dire) cooldown time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the glyph cooldown time in seconds
	 * const glyphCooldownTime = GameRules?.GlyphCooldownTime ?? 0;
	 * console.log(glyphCooldownTime);
	 */
	get GlyphCooldownDireTime(): number
	/**
	 * @description Glyph (Team Dire) cooldown remaining time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the glyph cooldown remaining time in seconds
	 * const glyphCooldownTime = GameRules?.GlyphCooldownTime ?? 0;
	 * console.log(glyphCooldownTime);
	 */
	get GlyphCooldownDire(): number
	/**
	 * @description Scan (Team Radiant) cooldown time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the scan cooldown time in seconds
	 * const scanCooldownTime = GameRules?.ScanCooldownTime ?? 0;
	 * console.log(scanCooldownTime);
	 */
	get ScanCooldownRadiantTime(): number
	/**
	 * @description Scan (Team Radiant) cooldown remaining time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the scan cooldown remaining time in seconds
	 * const scanCooldownTime = GameRules?.ScanCooldownTime ?? 0;
	 * console.log(scanCooldownTime);
	 */
	get ScanCooldownRadiant(): number
	/**
	 * @description Scan (Team Dire) cooldown time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the scan cooldown time in seconds
	 * const scanCooldownTime = GameRules?.ScanCooldownTime ?? 0;
	 * console.log(scanCooldownTime);
	 */
	get ScanCooldownDireTime(): number
	/**
	 * @description Scan (Team Dire) cooldown remaining time in seconds.
	 *
	 * @return {number}
	 * @example
	 * // Returns the scan cooldown remaining time in seconds
	 * const scanCooldownTime = GameRules?.ScanCooldownTime ?? 0;
	 * console.log(scanCooldownTime);
	 */
	get ScanCooldownDire(): number
	/**
	 * @description Scan (Team Radiant) charges.
	 *
	 * @return {number}
	 * @example
	 * // Returns the scan charges
	 * const scanCharges = GameRules?.ScanChargesRadiant ?? 0;
	 * console.log(scanCharges);
	 */
	get ScanChargesRadiant(): number
	/**
	 * @description Scan (Team Dire) charges.
	 *
	 * @return {number}
	 * @example
	 * // Returns the scan charges
	 * const scanCharges = GameRules?.ScanChargesDire ?? 0;
	 * console.log(scanCharges);
	 */
	get ScanChargesDire(): number
	/**
	 * @description All draft phase.
	 *
	 * @return {number}
	 * @example
	 * // Returns the all draft phase
	 * const allDraftPhase = GameRules?.AllDraftPhase ?? 0;
	 * console.log(allDraftPhase);
	 */
	get AllDraftPhase(): number
	/**
	 * @description All draft radiant first.
	 *
	 * @return {boolean}
	 * @example
	 * // Returns the all draft phase
	 * const allDraftPhase = GameRules?.AllDraftPhase ?? 0;
	 * console.log(allDraftPhase);
	 */
	get AllDraftRadiantFirst(): boolean
	/**
	 * @description Loaded players.
	 *
	 * @return {number}
	 * @example
	 * // Returns the loaded players
	 * const loadedPlayers = GameRules?.LoadedPlayers ?? 0;
	 * console.log(loadedPlayers);
	 */
	get LoadedPlayers(): number
	/**
	 * @description Is nightstalker night.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if nightstalker night
	 * const isNightstalkerNight = GameRules?.IsNightstalkerNight ?? false;
	 */
	get IsNightstalkerNight(): boolean
	/**
	 * @description Is temporary night.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if temporary night
	 * const isTemporaryNight = GameRules?.IsTemporaryNight ?? false;
	 * console.log(isTemporaryNight);
	 */
	get IsTemporaryNight(): boolean
	/**
	 * @description Is temporary day.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if temporary day
	 * const isTemporaryDay = GameRules?.IsTemporaryDay ?? false;
	 * console.log(isTemporaryDay);
	 */
	get IsTemporaryDay(): boolean
	/**
	 * @description Active team.
	 *
	 * @note !!! Only is supported immortal draft
	 * @return {Team}
	 * @example
	 * // Returns the active team
	 * const activeTeam = GameRules?.ActiveTeam ?? Team.Dire;
	 * console.log(activeTeam);
	 */
	get PlayerDraftActiveTeam(): Team
	/**
	 * @description Match ID.
	 *
	 * @return {bigint}
	 * @example
	 * // Returns the match ID
	 * const matchID = GameRules?.MatchID ?? 0;
	 * console.log(matchID);
	 */
	get MatchID(): bigint
	/**
	 * @description Hero pick state.
	 *
	 * @return {DOTAHeroPickState}
	 * @example
	 * // Returns the hero pick state
	 * const heroPickState = GameRules?.HeroPickState ?? DOTAHeroPickState.DOTA_HERO_PICK_STATE_NONE;
	 * console.log(heroPickState);
	 */
	get HeroPickState(): DOTAHeroPickState
	/**
	 * @description Is in game.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if in game
	 * const isInGame = GameRules?.IsInGame ?? false;
	 * console.log(isInGame);
	 */
	get IsInGame(): boolean
	/**
	 * @description Is night game time.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if night game time
	 * const isNightGameTime = GameRules?.IsNightGameTime ?? false;
	 * console.log(isNightGameTime);
	 */
	get IsNightGameTime(): boolean
	/**
	 * @description Is night.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if night
	 * const isNight = GameRules?.IsNight ?? false;
	 * console.log(isNight);
	 */
	get IsNight(): boolean
	/**
	 * @description Is ban phase.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if ban phase
	 * const isBanPhase = GameRules?.IsBanPhase ?? false;
	 * console.log(isBanPhase);
	 */
	get IsBanPhase(): boolean
	/**
	 * @description Neutral spawn boxes.
	 *
	 * @return {Array<NeutralSpawnBox>}
	 * @example
	 * // Returns the neutral spawn boxes
	 * const neutralSpawnBoxes = GameRules?.NeutralSpawnBoxes ?? [];
	 * console.log(neutralSpawnBoxes);
	 */
	get NeutralSpawnBoxes(): NeutralSpawnBox[]
	/**
	 * @description Get all StockInfo instances.
	 *
	 * @return {Array<StockInfo>}
	 */
	get StockInfo(): StockInfo[]
}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const C_GameRules = ImportSDK as unknown as Nullable<GameRules>
