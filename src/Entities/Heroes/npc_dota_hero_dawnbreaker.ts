//@ts-ignore
import { npc_dota_hero_dawnbreaker as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Hero } from "../Base/Hero"

export declare class npc_dota_hero_dawnbreaker extends Hero {
	public get AttackState(): number
}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const c_npc_dota_hero_dawnbreaker =
	ImportSDK as unknown as typeof npc_dota_hero_dawnbreaker
