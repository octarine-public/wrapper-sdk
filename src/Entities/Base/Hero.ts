// @ts-ignore
import { Hero as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Unit } from "./Unit"

export declare class Hero extends Unit {}

/**
 * @ignore
 * @internal
 */
export const CHero = ImportSDK as unknown as typeof Hero
