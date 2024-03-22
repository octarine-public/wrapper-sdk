// @ts-ignore
import { QAngle as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Vector3 } from "./Vector3"

export declare class QAngle extends Vector3 {
	/**
	 * @description Creates a new QAngle instance.
	 *
	 * @param x - The x coordinate value (default is 0)
	 * @param y - The y coordinate value (default is 0)
	 * @param z - The z coordinate value (default is 0)
	 */
	constructor(x?: number, y?: number, z?: number)
}

/**
 * @ignore
 * @internal
 */
export const CQAngle = ImportSDK as unknown as typeof QAngle
