//@ts-ignore
import { npc_dota_hero_primal_beast as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Hero } from "../Base/Hero"

export declare class npc_dota_hero_primal_beast extends Hero {}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const c_npc_dota_hero_primal_beast =
	ImportSDK as unknown as typeof npc_dota_hero_primal_beast
