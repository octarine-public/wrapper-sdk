//@ts-ignore
import { npc_dota_hero_shadow_demon as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Hero } from "../Base/Hero"

export declare class npc_dota_hero_shadow_demon extends Hero {}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const c_npc_dota_hero_shadow_demon =
	ImportSDK as unknown as typeof npc_dota_hero_shadow_demon
