// @ts-ignore
import { invoker_deafening_blast as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Ability } from "../../Base/Ability"

export declare class invoker_deafening_blast extends Ability {
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
export const c_invoker_deafening_blast =
	ImportSDK as unknown as typeof invoker_deafening_blast
