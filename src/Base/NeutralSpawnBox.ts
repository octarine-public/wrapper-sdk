// @ts-ignore
import { NeutralSpawnBox as ImportSDK } from "github.com/octarine-public/wrapper/index"

import { NeutralSpawnerType } from "../Enums/NeutralSpawnerType"
import type { QAngle } from "./QAngle"
import type { Vector2 } from "./Vector2"
import type { Vector3 } from "./Vector3"

export declare class NeutralSpawnBox {
	/** @hidden */
	constructor()
	/**
	 * @description Get the angles of the neutral spawn box.
	 */
	public get Angles(): QAngle
	/**
	 * @description Get the stack end time of the neutral spawn box.
	 *
	 * @return {number | -1}
	 * @example
	 * const stackEnd = neutralSpawnBox.StackEnd;
	 * console.log(stackEnd); // 56 seconds or -1 if not set
	 */
	public get StackEnd(): number
	/**
	 * @description Get the stack start time of the neutral spawn box.
	 *
	 * @return {number | -1}
	 * @example
	 * const stackStart = neutralSpawnBox.StackStart;
	 * console.log(stackStart); // 54 seconds or -1 if not set
	 */
	public get StackStart(): number
	/**
	 * @description Get the minimum bounds.
	 *
	 * @return {Vector3}
	 */
	public get MinBounds(): Vector3
	/**
	 * @description Get the maximum bounds.
	 *
	 * @return {Vector3}
	 */
	public get MaxBounds(): Vector3
	/**
	 * @description Get the center point of the bounding box.
	 *
	 * @return {Vector3}
	 */
	public get Center(): Vector3
	/**
	 * @description Get the spawn box origin position.
	 */
	public get SpawnBoxOrigin(): Vector3
	/**
	 * @description Get the type of the camp.
	 *
	 * @return {NeutralSpawnerType}
	 * @example
	 * const campType = neutralSpawnBox.CampType;
	 * console.log(campType); // NeutralSpawnerType.Small (0)
	 */
	public get CampType(): NeutralSpawnerType
	/**
	 * @description Get the name of the camp.
	 *
	 * @return {string}
	 * @example
	 * const campName = neutralSpawnBox.CampName;
	 * console.log(campName); // "neutralcamp_evil_6" or "neutralcamp_good_6"
	 */
	public get CampName(): string
	/**
	 * @description Checks if the given vector is within the bounds of the current spawn box.
	 *
	 * @param {Vector3} vec - The vector to check.
	 * @return {boolean}
	 */
	public Includes(vec: Vector3): boolean
	/**
	 * @description Checks if a given 2D vector is within the bounds of the current spawn box.
	 *
	 * @param {Vector2} vec - The 2D vector to check.
	 * @return {boolean}
	 */
	public Includes2D(vec: Vector2): boolean
}

/**
 * @ignore
 * @internal
 */
export const CNeutralSpawnBox = ImportSDK as unknown as typeof NeutralSpawnBox
