// @ts-ignore
import { GameSleeper as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Sleeper } from "./Sleeper"

/**
 * @note Sleeper by Game.RawGameTime
 * @description GameSleeper is a class that allows you to sleep for a specified amount of time in a game.
 */
export declare class GameSleeper extends Sleeper {}
/**
 * @ignore
 * @internal
 */
export const CGameSleeper = ImportSDK as unknown as typeof GameSleeper
