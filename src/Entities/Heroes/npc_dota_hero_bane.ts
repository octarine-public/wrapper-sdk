//@ts-ignore
import { npc_dota_hero_bane as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Hero } from "../Base/Hero"

export declare class npc_dota_hero_bane extends Hero {}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const c_npc_dota_hero_bane = ImportSDK as unknown as typeof npc_dota_hero_bane
