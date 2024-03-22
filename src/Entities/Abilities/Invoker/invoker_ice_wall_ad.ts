// @ts-ignore
import { invoker_ice_wall_ad as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Ability } from "../../Base/Ability"

/**
 * @classdesc Invoker's Ice Wall ability for Ability Draft Mode
 */
export declare class invoker_ice_wall_ad extends Ability {
	/**
	 * @description Get the value of the QuasLevel property.
	 *
	 * @return {number}
	 */
	public get QuasLevel(): number
	/**
	 * @description Get the value of the WexLevel property.
	 *
	 * @return {number}
	 */
	public get WexLevel(): number
	/**
	 * @description Get the value of the ExortLevel property.
	 *
	 * @return {number}
	 */
	public get ExortLevel(): number
}

/**
 * @ignore
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const c_invoker_ice_wall_ad = ImportSDK as unknown as typeof invoker_ice_wall_ad
