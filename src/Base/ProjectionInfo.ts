/* eslint-disable @typescript-eslint/naming-convention */
// @ts-ignore
import { ProjectionInfo as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Vector2 } from "./Vector2"

export declare class ProjectionInfo {
	/**
	 * @description Creates a new ProjectionInfo instance.
	 *
	 * @param SegmentPoint - the point on the segment
	 * @param LinePoint - the point on the line
	 */
	constructor(SegmentPoint: Vector2, LinePoint: Vector2)
	/**
	 * @description Check if the current point is on the segment.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if the current point is on the segment
	 * const vec = new Vector2(1, 2);
	 * const vec2 = new Vector2(3, 4);
	 * const isOnSegment = new ProjectionInfo(vec, vec2).IsOnSegment;
	 * const isOnSegment2 = new ProjectionInfo(vec2, vec2).IsOnSegment;
	 * console.log(isOnSegment); // false
	 * console.log(isOnSegment2); // true
	 */
	public get IsOnSegment(): boolean
}

/**
 * @ignore
 * @internal
 */
export const CProjectionInfo = ImportSDK as unknown as typeof ProjectionInfo
