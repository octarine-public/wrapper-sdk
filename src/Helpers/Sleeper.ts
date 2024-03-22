// @ts-ignore
import { Sleeper as ImportSDK } from "github.com/octarine-public/wrapper/index"

/**
 * @note Sleeper by hrtime()
 * @description Sleeper is a class that allows you to sleep for a specified amount of time.
 */
export declare class Sleeper {
	/**
	 * @return {Sleeper}
	 */
	public FullReset(): Sleeper
	/**
	 * @param {any} key - the key to be reset
	 * @return {void}
	 */
	public ResetKey(key: any): void
	/**
	 * @description Check if the given key is currently sleeping.
	 *
	 * @param {any} key - the key to check for sleep status
	 * @return {boolean}
	 */
	public Sleeping(key: any): boolean
	/**
	 * @description Returns the start time for the given key from SleepDB.
	 * The start time for the given key, or 0 if the key is not found
	 *
	 * @param {any} key - the key for which to retrieve the start time
	 * @return {number}
	 */
	public StartTime(key: any): number
	/**
	 * @description Sleep for a specified amount of time.
	 *
	 * @param {number} ms - the number of milliseconds to sleep
	 * @param {any} key - the key to associate with the sleep time
	 * @return {number}
	 */
	public Sleep(ms: number, key: any): number
	/**
	 * @description Calculate the remaining sleep time based on the provided key.
	 *
	 * @param {any} key - The key used to retrieve the end time of the sleep.
	 * @return {number}
	 */
	public RemainingSleepTime(key: any): number
}
/**
 * @ignore
 * @internal
 */
export const CSleeper = ImportSDK as unknown as typeof Sleeper
