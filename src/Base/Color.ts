// @ts-ignore
import { Color as ImportSDK } from "github.com/octarine-public/wrapper/index"

export declare class Color {
	/**
	 * @description Return new instance Black color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Black;
	 * console.log(color); // Color(0, 0, 0, 255)
	 */
	public static get Black(): Color
	/**
	 * @description Return new instance White color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.White;
	 * console.log(color); // Color(255, 255, 255, 255)
	 */
	public static get White(): Color
	/**
	 * @description Return new instance Red color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Red;
	 * console.log(color); // Color(255, 0, 0, 255)
	 */
	public static get Red(): Color
	/**
	 * @description Return new instance Green color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Green;
	 * console.log(color); // Color(0, 255, 0, 255)
	 */
	public static get Green(): Color
	/**
	 * @description Return new instance Blue color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Blue;
	 * console.log(color); // Color(0, 0, 255, 255)
	 */
	public static get Blue(): Color
	/**
	 * @description Return new instance RoyalBlue color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.RoyalBlue;
	 * console.log(color); // Color(78, 121, 248)
	 */
	public static get RoyalBlue(): Color
	/**
	 * @description Return new instance Yellow color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Yellow;
	 * console.log(color); // Color(255, 255, 0, 255)
	 */
	public static get Yellow(): Color
	/**
	 * @description Return new instance Orange color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Orange;
	 * console.log(color); // Color(255, 128, 0, 255)
	 */
	public static get Orange(): Color
	/**
	 * @description Return new instance Fuchsia color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Fuchsia;
	 * console.log(color); // Color(255, 0, 255, 255)
	 */
	public static get Fuchsia(): Color
	/**
	 * @description Return new instance Aqua color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Aqua;
	 * console.log(color); // Color(0, 255, 255, 255)
	 */
	public static get Aqua(): Color
	/**
	 * @description Return new instance BlackGray color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.BlackGray;
	 * console.log(color); // Color(90, 90, 90, 255)
	 */
	public static get BlackGray(): Color
	/**
	 * @description Return new instance Gray color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.Gray;
	 * console.log(color); // Color(128, 128, 128, 255)
	 */
	public static get Gray(): Color
	/**
	 * @description Return new instance LightGray color
	 *
	 * @return {Color}
	 * @example
	 * const color = Color.LightGray;
	 * console.log(color); // Color(190, 190, 190, 255)
	 */
	public static get LightGray(): Color
	/**
	 * @description Player color | Index arr (TeamSlot)
	 *
	 * @return {Array<Color>}
	 * @example
	 * const colors = Color.PlayerColorRadiant[TeamSlot];
	 * console.log(colors);
	 */
	public static get PlayerColorDire(): Color[]
	/**
	 * @description Player color | Index arr (TeamSlot)
	 *
	 * @return {Array<Color>}
	 * @example
	 * const colors = Color.PlayerColorRadiant[TeamSlot];
	 * console.log(colors);
	 */
	public static get PlayerColorRadiant(): Color[]
	/**
	 * @description Creates a Color instance from a 32-bit unsigned integer. (reverse toUint32)
	 *
	 * @param {number} num - The 32-bit unsigned integer
	 * @return {Color}
	 * @example
	 * const color = Color.fromUint32(0xFF0000FF);
	 * console.log(color); // Color(255, 0, 0, 255)
	 */
	public static fromUint32(num: number): Color

	/**
	 * @description Creates a new Color instance.
	 *
	 * @param r - The red value (default is 0)
	 * @param g - The green value (default is 0)
	 * @param b - The blue value (default is 0)
	 * @param a - The alpha value (default is 255)
	 */
	constructor(r?: number, g?: number, b?: number, a?: number)

	/**
	 * @description Convert the color channels to a 32-bit unsigned integer.
	 *
	 * @return {number}
	 * @example
	 * const num = Color.fromUint32(0xFF0000FF);
	 * console.log(num); // 0xFF0000FF
	 */
	public toUint32(): number
	/**
	 * @description Converts the color to an array of numbers representing the RGBA values.
	 *
	 * @return {Array<number>}
	 * @example
	 * const arr = Color.fromUint32(0xFF0000FF).toArray();
	 * console.log(arr); // [255, 0, 0, 255]
	 */
	public toArray(): [number, number, number, number]
	/**
	 * @description A method that creates a deep copy of the Color object.
	 *
	 * @return {Color}
	 * @example
	 * const clone = new Color(255, 0, 0, 255).Clone();
	 * console.log(clone); // Color(255, 0, 0, 255)
	 */
	public Clone(): Color
	/**
	 * @description Copies the color values to the given Color object.
	 *
	 * @param {Color} col - the Color object to copy the values to
	 * @return {Color}
	 * @example
	 * const color = new Color(255, 0, 0, 255)
	 * const color2 = new Color(0, 0, 0, 0).CopyTo(color)
	 * console.log(color); // Color(0, 0, 0, 0)
	 */
	public CopyTo(col: Color): Color
	/**
	 * Copy the values from the given color to this color.
	 *
	 * @param {Color} col - The color to copy values from.
	 * @return {Color}
	 * @example
	 * const color = new Color(255, 0, 0, 255);
	 * const color2 = new Color(0, 0, 0, 0).CopyFrom(color);
	 * console.log(color); // Color(255, 0, 0, 255);
	 */
	public CopyFrom(col: Color): Color

	/**
	 * @description Compare this Color with another Color for equality.
	 *
	 * @param {Color} col - The Color to compare with.
	 * @return {boolean}
	 * @example
	 * const color = new Color(255, 0, 0, 255);
	 * const color2 = new Color(255, 0, 0, 255);
	 * const isEqual = color.Equals(color2);
	 * console.log(isEqual); // true
	 */
	public Equals(col: Color): boolean
	/**
	 * @description Set the value of the 'r' property.
	 *
	 * @note !!! This function modifies the current Color and NOT return a new one Color
	 * @param {number} r - the new value for the 'r' property
	 * @return {Color}
	 * @example
	 * const color = new Color(255, 0, 0, 255).SetR(100);
	 * console.log(color); // Color(100, 0, 0, 255)
	 */
	public SetR(r: number): Color
	/**
	 * @description Set the value of the 'g' property.
	 *
	 * @note !!! This function modifies the current Color and NOT return a new one Color
	 * @param {number} g - the new value for the 'g' property
	 * @return {Color}
	 * @example
	 * const color = new Color(255, 0, 0, 255).SetG(100);
	 * console.log(color); // Color(255, 100, 0, 255)
	 */
	public SetG(g: number): Color
	/**
	 * @description Set the value of the 'b' property.
	 *
	 * @note !!! This function modifies the current Color and NOT return a new one Color
	 * @param {number} b - the new value for the 'b' property
	 * @return {Color}
	 * @example
	 * const color = new Color(255, 0, 0, 255).SetB(100);
	 * console.log(color); // Color(255, 0, 100, 255)
	 */
	public SetB(b: number): Color
	/**
	 * @description Set the value of the 'a' property.
	 *
	 * @note !!! This function modifies the current Color and NOT return a new one Color
	 * @param {number} a - the new value for the 'a' property
	 * @return {Color}
	 * @example
	 * const color = new Color(255, 0, 0, 100).SetA(100);
	 * console.log(color); // Color(255, 0, 0, 100)
	 */
	public SetA(a: number): Color
	/**
	 * @description Set the color values for the object.
	 *
	 * @note !!! This function modifies the current Color and NOT return a new one Color
	 * @param {number} r - the red color value (default 0)
	 * @param {number} g - the green color value (default 0)
	 * @param {number} b - the blue color value (default 0)
	 * @param {number} a - the alpha (transparency) value (default 255)
	 * @return {Color}
	 * @example
	 * const color = new Color().SetColor(255, 0, 0, 255);
	 * console.log(color); // Color(255, 0, 0, 255)
	 */
	public SetColor(r?: number, g?: number, b?: number, a?: number): Color
}

/**
 * @ignore
 * @internal
 */
export const CColor = ImportSDK as unknown as typeof Color
