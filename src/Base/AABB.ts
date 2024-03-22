/* eslint-disable @typescript-eslint/naming-convention */
// @ts-ignore
import { AABB as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Vector3 } from "./Vector3"

export declare class AABB {
	/**
	 * @param Base - (default: new Vector3(0, 0, 0))
	 * @param MinOffset - (default: new Vector3(0, 0, 0))
	 * @param MaxOffset - (default: new Vector3(0, 0, 0))
	 * @param DeltaZ - (default: 0)
	 */
	constructor(Base: Vector3, MinOffset: Vector3, MaxOffset: Vector3, DeltaZ: number)
	/**
	 * @description Get the minimum vector by adding the base, max offset, and delta Z.
	 *
	 * @return {Vector3}
	 */
	public get Min(): Vector3
	/**
	 * @description Get the minimum vector by adding the base, max offset, and delta Z.
	 *
	 * @return {Vector3}
	 */
	public get Max(): Vector3
	/**
	 * @description Get an array of points that form a bounding box around the AABB.
	 *
	 * @return {Array<Vector3>}
	 */
	public get Points(): Vector3[]
	// TODO world polygons
	// public get Polygon(): WorldPolygon

	/**
	 * @description Calculate the distance to the closest point in the Points array from the given vector.
	 *
	 * @param {Vector3} vec - The vector to calculate the distance from.
	 * @return {number}
	 */
	public Distance(vec: Vector3): number
	/**
	 * @description Sets the object's AABB based on the minimum and maximum Vector3 values provided.
	 *
	 * @param {Vector3} min - The minimum Vector3 value
	 * @param {Vector3} max - The maximum Vector3 value
	 * @return {AABB}
	 */
	public SetFromMinMax(min: Vector3, max: Vector3): AABB
}

/**
 * @ignore
 * @internal
 */
export const CAABB = ImportSDK as unknown as typeof AABB
