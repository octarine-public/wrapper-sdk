//@ts-ignore
import { npc_dota_hero_juggernaut as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Hero } from "../Base/Hero"

export declare class npc_dota_hero_juggernaut extends Hero {}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const c_npc_dota_hero_juggernaut =
	ImportSDK as unknown as typeof npc_dota_hero_juggernaut
