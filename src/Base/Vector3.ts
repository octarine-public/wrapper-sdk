// @ts-ignore
import { Vector2 as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Vector2 } from "./Vector2"

export declare class Vector3 {
	/**
	 * @description Create a new Vector3 from the given angle.
	 *
	 * @param {number} angle - The angle in radians
	 * @return {Vector3}
	 * @example
	 * // Create a Vector3 from a 45 degree angle
	 * const vector = Vector3.FromAngle(Math.PI / 4);
	 * console.log(vector); // Vector3(0.70710678118654746, 0.70710678118654746, 0)
	 */
	public static FromAngle(angle: number): Vector3
	/**
	 * @description Create a new Vector3 from a string representation.
	 *
	 * @param {string} str - the string representation of the Vector3
	 * @return {Vector3}
	 *
	 * @example
	 * const vector = Vector3.FromString("1 2 3");
	 * console.log(vector); // Vector3(1, 2, 3)
	 */
	public static FromString(str: string): Vector3
	/**
	 * Creates a new Vector3 from polar coordinates.
	 *
	 * @param {number} radial - the radial distance
	 * @param {number} polar - the polar angle
	 * @return {Vector3}
	 * @example
	 * // Create a Vector3 from polar coordinates
	 * const vector = Vector3.FromPolarCoordinates(5, Math.PI/4);
	 * console.log(vector); // Vector3(3.5355339059327378, 3.5355339059327373, 0)
	 */
	public static FromPolarCoordinates(radial: number, polar: number): Vector3
	/**
	 * @description Calculates the center type of the given array using the provided callback function.
	 *
	 * @param {Array<T>} array - the input array
	 * @param {(value: T) => Vector3} callback - the callback function to calculate the center type
	 * @return {Vector3}
	 * @example
	 * // Calculates the center type of the given array using the provided callback function.
	 * const center = Vector3.GetCenterType([new Vector3(1, 0, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 3)], center => center.Add(new Vector3(1, 1, 1)));
	 * console.log(center); // Vector3(1.3333333333333333, 1.6666666666666667, 2)
	 */
	public static GetCenterType<T>(array: T[], callback: (value: T) => Vector3): Vector3
	/**
	 * @description Get the center of an array of Vector3 objects.
	 *
	 * @param {Array<Vector3>} array - the array of Vector3 objects
	 * @return {Vector3}
	 * @example
	 * // Get the center of an array of Vector3 objects
	 * const center = Vector3.GetCenter([new Vector3(1, 0, 0), new Vector3(0, 2, 0), new Vector3(0, 0, 3)]);
	 * console.log(center); // Vector3(0.3333333333333333, 0.6666666666666666, 1)
	 */
	public static GetCenter(array: Vector3[]): Vector3
	/**
	 * @description Creates a new Vector3 instance with the same x, y, and z values as the input Vector3.
	 *
	 * @param {Vector3} vec - The input Vector3 to copy from
	 * @return {Vector3}
	 * @example
	 * // Creates a new Vector3 instance with the same x, y, and z values as the input Vector3
	 * const copy = Vector3.CopyFrom(new Vector3(1, 2, 3));
	 * console.log(copy); // Vector3(1, 2, 3)
	 */
	public static CopyFrom(vec: Vector3): Vector3
	/**
	 * Convert a 2D vector to a 3D vector by adding a z-coordinate of 0.
	 *
	 * @param {Vector2} vec - The 2D vector to convert
	 * @return {Vector3}
	 * @example
	 * // Convert a 2D vector to a 3D vector
	 * const vec3 = Vector3.FromVector2(new Vector2(1, 2));
	 * console.log(vec3); // Vector3(1, 2, 0)
	 */
	public static FromVector2(vec: Vector2): Vector3
	/**
	 * @description Create a new Vector3 from the given array.
	 *
	 * @param {ArrayLike<number>} array - The array containing the x, y, and z values.
	 * @return {Vector3}
	 * @example
	 * // Create a Vector3 from an array
	 * const vec = Vector3.fromArray([1, 2, 3]);
	 * console.log(vec); // Vector3(1, 2, 3)
	 */
	public static fromArray(array: ArrayLike<number>): Vector3

	/**
	 * @description Creates a new Vector3 instance.
	 *
	 * @param x - The x coordinate value (default is 0)
	 * @param y - The y coordinate value (default is 0)
	 * @param z - The z coordinate value (default is 0)
	 */
	constructor(x?: number, y?: number, z?: number)

	/**
	 * @description Get the angle of the vector in radians.
	 *
	 * @return {number}
	 * @example
	 * // Get the angle of the vector
	 * const angle = new Vector3(1, 2, 3).Angle;
	 * console.log(angle); // 1.1071487177940904
	 */
	public get Angle(): number
	/**
	 * @description Returns the polar for vector angle (in Degrees).
	 *
	 * @return {number}
	 * @example
	 * // Get the angle of the vector
	 * const polar = new Vector3(1, 2, 3).Polar;
	 * console.log(polar); // 169.91557353255848
	 */
	public get Polar(): number
	/**
	 * @description Check if Vector3 of the valid.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if Vector3 of the valid
	 * const isValid = new Vector3(1, 2, 3).IsValid;
	 * const isValid2 = new Vector3(NaN, NaN, NaN).IsValid;
	 * const isValid3 = new Vector3(1, 2, Infinity).IsValid;
	 * console.log(isValid, isValid2, isValid3); // true false false
	 */
	public get IsValid(): boolean
	/**
	 * @description Check if Vector3 of the finite.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if Vector3 of the finite
	 * const isFinite = new Vector3(1, 2, 3).IsFinite; // true
	 * const isFinite2 = new Vector3(NaN, NaN, NaN).IsFinite; // false
	 * const isFinite3 = new Vector3(1, 2, Infinity).IsFinite.IsFinite; // false
	 * console.log(isFinite, isFinite2, isFinite3); // true false false
	 */
	public get IsFinite(): boolean
	/**
	 * @description Get the length of the vector
	 *
	 * @return {number}
	 * @example
	 * // Get the squared length of the vector
	 * const squaredLength = new Vector3(1, 2, 3).Length;
	 * console.log(squaredLength); // 3.7416573867739413
	 */
	public get Length(): number
	/**
	 * @description Get the squared length of the vector.
	 *
	 * @return {number}
	 * @example
	 * // Get the squared length of the vector
	 * const squaredLength = new Vector3(1, 2, 3).LengthSqr;
	 * console.log(squaredLength); // 14
	 */
	public get LengthSqr(): number
	/**
	 * @description Get the length of the vector in 2D space.
	 *
	 * @return {number}
	 * @example
	 * // Get the length of the vector in 2D space
	 * const length2D = new Vector3(1, 2, 3).Length2D; // 2.23606797749979
	 */
	public get Length2D(): number
	/**
	 * @description Get the length of the vector squared. This operation is cheaper than Length.
	 *
	 * @return {number}
	 * @example
	 * // Get the length of the vector squared
	 * const squaredLength = new Vector3(1, 2, 3).LengthSqr2D; // 50
	 */
	public get LengthSqr2D(): number
	/**
	 * @description Sets all components of the vector to zero.
	 *
	 * @return {Vector3}
	 * @example
	 * // Set all x, y, and z components of the vector to zero
	 * const vec = new Vector3(1, 2, 3).toZero();
	 * console.log(vec); // Vector3(0, 0, 0)
	 */
	public toZero(): Vector3
	/**
	 * @description Convert the Vector3 coordinates to an array.
	 *
	 * @return {Array<number>}
	 * @example
	 * // Convert the Vector3 coordinates to an array
	 * const array = new Vector3(1, 2, 3).toArray();
	 * console.log(array); // [1, 2, 3]
	 */
	public toArray(): [number, number, number]
	/**
	 * @description Calculate the absolute values of each component of the vector.
	 *
	 * @return {Vector3}
	 * @example
	 * // Calculate the absolute values of each component of the vector
	 * const absVec = new Vector3(1, -2, 3).Abs();
	 * console.log(absVec); // Vector3(1, 2, 3)
	 */
	public Abs(): Vector3
	/**
	 * @description Convert radians to degrees using a specific formula.
	 *
	 * @return {Vector3}
	 * @example
	 * // Convert radians to degrees
	 * const degrees = new Vector3(1, 2, 3).RadiansToDegrees();
	 * console.log(degrees); // Vector3(57.29577951308232, 114.59155902616464, 171.897441639247)
	 */
	public RadiansToDegrees(): Vector3
	/**
	 * @description Convert degrees to radians by multiplying with PI and dividing by 180.
	 *
	 * @return {Vector3}
	 * @example
	 * // Convert degrees to radians
	 * const radians = new Vector3(100, 200, 300).DegreesToRadians();
	 * console.log(radians); // Vector3(1.7453292519943295, 3.490658503988659, 5.235987755982989)
	 */
	public DegreesToRadians(): Vector3
	/**
	 * @description Clone the current vector.
	 *
	 * @return {Vector3}
	 * @example
	 * // Clone the current vector
	 * const clone = new Vector3(1, 2, 3).Clone();
	 * console.log(clone); // Vector3(1, 2, 3)
	 */
	public Clone(): Vector3
	/**
	 * @description Negates the x, y, and z components of the vector.
	 *
	 * @return {Vector3}
	 * @example
	 * // Negate the x, y, and z components of the vector
	 * const negated = new Vector3(1, 2, 3).Negate();
	 * console.log(negated); // Vector3(-1, -2, -3)
	 */
	public Negate(): Vector3
	/**
	 * @description Invalidates the vector by setting x, y, and z to NaN.
	 *
	 * @return {Vector3}
	 * @example
	 * // Invalidate the vector
	 * const invalidated = new Vector3(1, 2, 3).Invalidate();
	 * console.log(invalidated); // Vector3(NaN, NaN, NaN)
	 */
	public Invalidate(): Vector3
	/**
	 * @description Calculate the square root of each component of the Vector3.
	 *
	 * @return {Vector3}
	 * @example
	 * // Calculate the square root of each component of the vector
	 * const sqrt = new Vector3(1, 2, 3).SquareRoot();
	 * console.log(sqrt); // Vector3(1, 1.4142135623730951, 1.7320508075688772)
	 */
	public SquareRoot(): Vector3
	/**
	 * @description Check if the given vector is equal to the current vector.
	 *
	 * @param {Vector3} vec - The vector to compare with
	 * @return {boolean}
	 * @example
	 * // Check if the given vector is equal to the current vector
	 * const vec1 = new Vector3(5, 5, 5);
	 * const vec2 = new Vector3(5, 5, 5);
	 * const isEqual = vec2.Equals(vec1);
	 * console.log(isEqual); // true
	 */
	public Equals(vec: Vector3): boolean
	/**
	 * @description Check if the vector is approximately zero within a given tolerance.
	 *
	 * @param {number} tolerance - the tolerance value for checking if the vector is zero (default is 0.01)
	 * @return {boolean}
	 * @example
	 * // Check if the vector is approximately zero
	 * const vec = new Vector3(0, 0, 0);
	 * const isZero = vec.IsZero();
	 * console.log(isZero); // true
	 */
	public IsZero(tolerance?: number): boolean
	/**
	 * @description Check if the length is greater than a specified value.
	 *
	 * @param {number} val - the value to compare the length against
	 * @return {boolean}
	 * @example
	 * // Check if the length is greater than 0
	 * const vec = new Vector3(1, 2, 3);
	 * const isGreaterThan1 = vec.IsLengthGreaterThan(0);
	 * const isGreaterThan2 = vec.IsLengthGreaterThan(4);
	 * console.log(isGreaterThan1); // true
	 * console.log(isGreaterThan2); // false
	 */
	public IsLengthGreaterThan(val: number): boolean
	/**
	 * @description Check if the length is less than a given value.
	 *
	 * @param {number} val - the value to compare the length against
	 * @return {boolean}
	 * @example
	 * // Check if the length is less than 10
	 * const vec = new Vector3(1, 2, 3);
	 * const isLessThan1 = vec.IsLengthLessThan(10);
	 * const isLessThan2 = vec.IsLengthLessThan(2);
	 * console.log(isLessThan1); // true
	 * console.log(isLessThan2); // false
	 */
	public IsLengthLessThan(val: number): boolean
	/**
	 * @description Check if the given vector is within a specified range.
	 *
	 * @param {Vector3} vec - the vector to check against
	 * @param {number} range - the range to check within
	 * @return {boolean}
	 * @example
	 * const vec = new Vector3(1, 2, 3).IsInRange(new Vector3(4, 5, 6), 1);
	 * const vec2 = new Vector3(1, 2, 3).IsInRange(new Vector3(1, 2, 3), 1);
	 * console.log(vec, vec2); // false true
	 */
	public IsInRange(vec: Vector3, range: number): boolean
	/**
	 * @description Check if a point is located inside a rectangle defined by the given parameters.
	 *
	 * @param {number} x - the x-coordinate of the point
	 * @param {number} y - the y-coordinate of the point
	 * @param {number} width - the width of the rectangle
	 * @param {number} height - the height of the rectangle
	 * @return {boolean}
	 * @example
	 * // Check if a point is located inside a rectangle
	 * const isInside = new Vector3(1, 2, 3).IsUnderRectangle(0, 0, 10, 10);
	 * console.log(isInside); // true
	 */
	public IsUnderRectangle(x: number, y: number, width: number, height: number): boolean
	/**
	 * @description Generates a random Vector3 within the specified range.
	 *
	 * @param {number} minVal - the minimum value of the range
	 * @param {number} maxVal - the maximum value of the range
	 * @return {Vector3}
	 * @example
	 * // Generates a random Vector3 within the specified range
	 * const vector = new Vector3(0, 0, 0).Random(0, 10); // random values from x, y, and z
	 * console.log(vector); // Vector3(4, 4, 4)
	 */
	public Random(minVal: number, maxVal: number): Vector3
	/**
	 * @description Returns a new Vector3 with the minimum values of the current Vector3 and the input vector or number.
	 *
	 * @param {Vector3 | number} vec - The vector or number to compare with the current Vector3.
	 * @return {Vector3}
	 * @example
	 * // Returns a new Vector3 with the minimum values of the current Vector3 and the input vector or number.
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(2, 1, 4);
	 * const min = vec1.Min(vec2);
	 * console.log(min); // Vector3(1, 1, 3)
	 */
	public Min(vec: Vector3 | number): Vector3
	/**
	 * @description Returns a new Vector3 with the maximum values of the current Vector3 and the input vector or number.
	 *
	 * @param {Vector3 | number} vec - The vector or number to compare with the current Vector3.
	 * @return {Vector3}
	 * @example
	 * // Returns a new Vector3 with the maximum values
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(2, 1, 4);
	 * const max = vec1.Max(vec2);
	 * console.log(max); // Vector3(2, 2, 4)
	 */
	public Max(vec: Vector3 | number): Vector3
	/**
	 * @description Ceil function that rounds up the x, y, and z values of a Vector3.
	 *
	 * @param {number} count - the number of decimal places to round up to (default is 0)
	 * @return {Vector3}
	 * @example
	 * // Ceil the Vector3 to 2 decimal places
	 * const vec = new Vector3(1.2345, 2.3456, 3.4567).Ceil(2);
	 * console.log(vec); // Vector3(1.24, 2.35, 3.46)
	 */
	public Ceil(count?: number): Vector3
	/**
	 * @description CeilForThis function that rounds up the x, y, and z values of a Vector3.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} count - the number of decimal places to round up to (default is 0)
	 * @return {Vector3}
	 * @example
	 * // Ceil the Vector3 to 2 decimal places
	 * const vec = new Vector3(1.2345, 2.3456, 3.4567).CeilForThis(2);
	 * console.log(vec); // Vector3(1.24, 2.35, 3.46)
	 */
	public CeilForThis(count?: number): Vector3
	/**
	 * @description Rounds the vector to the specified number of decimal places.
	 *
	 * @param {number} count - the number of decimal places to round to (default is 0)
	 * @return {Vector3}
	 * @example
	 * // Round the Vector3 to 2 decimal places
	 * const vec = new Vector3(1.2345, 2.3456, 3.4567).Round(2);
	 * console.log(vec); // Vector3(1.23, 2.35, 3.46)
	 */
	public Round(count?: number): Vector3
	/**
	 * @description Rounds the vector components to a specified count.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} count - the number of decimal places to round to (default is 0)
	 * @return {Vector3}
	 * @example
	 * // Round the Vector3 to 2 decimal places
	 * const vec = new Vector3(1.2345, 2.3456, 3.4567).RoundForThis(2);
	 * console.log(vec); // Vector3(1.23, 2.35, 3.46)
	 */
	public RoundForThis(count?: number): Vector3
	/**
	 * @description A function to round the x, y, and z coordinates to a specific decimal place.
	 *
	 * @param {number} count - the number of decimal places to round to
	 * @return {Vector3}
	 * @example
	 * // Round the Vector3 down to the nearest multiple of 10^2
	 * const vec = new Vector3(1.2345, 2.3456, 3.4567).Floor();
	 * console.log(vec); // Vector3(1, 2, 3)
	 */
	public Floor(count?: number): Vector3
	/**
	 * @description A function to round the x, y, and z coordinates to a specific decimal place.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} count - the number of decimal places to round to
	 * @return {Vector3}
	 * @example
	 * // Round the Vector3 to 2 decimal places
	 * const vec = new Vector3(1.2345, 2.3456, 3.4567).FloorForThis();
	 * console.log(vec); // Vector3(1, 2, 2)
	 */
	public FloorForThis(count?: number): Vector3
	/**
	 * @description Linearly interpolates between this vector and a
	 * target vector by a given scalar amount.
	 *
	 * @param {Vector3} target - The target vector to interpolate towards.
	 * @param {number} amount - The interpolation factor between 0 and 1.
	 * @return {Vector3}
	 * @example
	 * // Lerp the Vector3
	 * const vec = new Vector3(1, 2, 3).Lerp(new Vector3(2, 1, 4), 0.5);
	 * console.log(vec); // Vector3(1.5, 1.5, 3.5)
	 */
	public Lerp(target: Vector3, amount: number): Vector3
	/**
	 * @description Interpolates between the current vector and the
	 * provided vector by a given scalar amount.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {Vector3} vec - The vector to interpolate towards.
	 * @param {number} amount - The ratio of interpolation.
	 * @return {Vector3}
	 * @example
	 * // Lerp the Vector3
	 * const vec = new Vector3(1, 2, 3).LerpForThis(new Vector3(2, 1, 4), 0.5);
	 * console.log(vec); // Vector3(1.5, 1.5, 3.5)
	 */
	public LerpForThis(vec: Vector3, amount: number): Vector3
	/**
	 * @description Interpolates between the vector and the target
	 * vector using a smoothstep easing function.
	 *
	 * @param {Vector3} vec - The target vector for
	 *                        interpolation.
	 * @param {number} amount - The interpolation
	 *                          factor between 0 and 1.
	 * @return {Vector3}
	 * @example
	 * // SmoothStep the Vector3
	 * const vec = new Vector3(1, 2, 3).SmoothStep(new Vector3(2, 1, 4), 0.5);
	 * console.log(vec); // Vector3(1.5, 1.5, 3.5)
	 */
	public SmoothStep(vec: Vector3, amount: number): Vector3
	/**
	 * @description Copy the values of this Vector3 to the provided vector.
	 *
	 * @param {Vector3} vec - The vector to copy to.
	 * @return {Vector3}
	 * @example
	 * // Copy the values of this Vector3 to the provided vector
	 * const vec1 = new Vector3();
	 * const vec2 = new Vector3(1, 2, 3).CopyTo(vec1);
	 * console.log(vec1); // Vector3(1, 2, 3)
	 */
	public CopyTo(vec: Vector3): Vector3
	/**
	 * @description Copy the values from the provided Vector3 to this Vector3.
	 *
	 * @param {Vector3} vec - The Vector3 to copy from
	 * @return {Vector3}
	 * @example
	 * // Copy the values from the provided Vector3 to this Vector3
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3().CopyFrom(vec1);
	 * console.log(vec2); // Vector3(1, 2, 3)
	 */
	public CopyFrom(vec: Vector3): Vector3
	/**
	 * @description SetVector function sets the x, y, and z values of the Vector3 object.
	 *
	 * @param {number} x - The x coordinate value (default is 0)
	 * @param {number} y - The y coordinate value (default is 0)
	 * @param {number} z - The z coordinate value (default is 0)
	 * @return {Vector3}
	 * @example
	 * // Set the x, y, and z values of the Vector3 object
	 * const vec = new Vector3();
	 * vec.SetVector(1, 2, 3);
	 * console.log(vec); // Vector3(1, 2, 3)
	 */
	public SetVector(x: number, y: number, z: number): Vector3
	/**
	 * @description Set the x coordinate of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} num - The new value for the x coordinate
	 * @return {Vector3}
	 * @example
	 * // Set the x coordinate of the vector
	 * const vec = new Vector3();
	 * vec.SetX(1);
	 * console.log(vec); // Vector3(1, 0, 0)
	 */
	public SetX(num: number): Vector3
	/**
	 * @description Set the y coordinate of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} num - The new value for the y coordinate
	 * @return {Vector3}
	 * @example
	 * // Set the y coordinate of the vector
	 * const vec = new Vector3();
	 * vec.SetY(1);
	 * console.log(vec); // Vector3(0, 1, 0)
	 */
	public SetY(num: number): Vector3
	/**
	 * @description Set the z coordinate of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} num - The new value for the z coordinate
	 * @return {Vector3}
	 * @example
	 * // Set the z coordinate of the vector
	 * const vec = new Vector3();
	 * vec.SetZ(1);
	 * console.log(vec); // Vector3(0, 1, 0)
	 */
	public SetZ(num: number): Vector3
	/**
	 * @description Normalize the vector.
	 *
	 * @param {number} scalar - the scaling factor (default is 1)
	 * @return {Vector3}
	 * @example
	 * // Normalize the vector
	 * const vec = new Vector3(1, 2, 3).Normalize();
	 * console.log(vec); // Vector3(0.26726, 0.53452, 0.80178)
	 */
	public Normalize(scalar?: number): Vector3
	/**
	 * @description Cross product of two vectors.
	 *
	 * @param {Vector3} vec - The vector to compute the cross product with
	 * @return {Vector3}
	 * @example
	 * // Cross product of two vectors
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * const result = vec1.Cross(vec2);
	 * console.log(result); // Vector3(-3, 6, -3)
	 */
	public Cross(vec: Vector3): Vector3
	/**
	 * @description A function that calculates the dot product of this vector and another vector.
	 *
	 * @param {Vector3} vec - The other vector to calculate the dot product with.
	 * @return {number}
	 * @example
	 * // Calculate the dot product of two vectors
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * const result = vec1.Dot(vec2);
	 * console.log(result); // 32
	 */
	public Dot(vec: Vector3): number
	/**
	 * @description Scale the vector to the specified scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - The scalar value to scale the vector by.
	 * @return {Vector3}
	 * @example
	 * // Scale the vector
	 * const vec = new Vector3(1, 2, 3).ScaleTo(2);
	 * console.log(vec); // Vector3(0.5345224838248488, 1.0690449676496976, 1.6035674514745464)
	 */
	public ScaleTo(scalar: number): Vector3
	/**
	 * @description Divide the vector by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - The scalar value to divide by
	 * @return {Vector3}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector3(1, 2, 3).DivideTo(2);
	 * console.log(vec); // Vector3(1.8708286933869707, 3.7416573867739413, 5.612486080160912)
	 */
	public DivideTo(scalar: number): Vector3
	/**
	 * @description Clamp the vector between the minimum and maximum values.
	 *
	 * @param {Vector3} min - the minimum values for each axis
	 * @param {Vector3} max - the maximum values for each axis
	 * @return {Vector3}
	 * @example
	 * // Clamp the vector
	 * const min = new Vector3(1, 2, 3);
	 * const max = new Vector3(4, 5, 6);
	 * const result = new Vector3(1, 2, 3).Clamp(min, max);
	 * console.log(result); // Vector3(1, 2, 3)
	 */
	public Clamp(min: Vector3, max: Vector3): Vector3
	/**
	 * @description Add two Vector3 objects together.
	 *
	 * @param {Vector3} vec - The Vector3 to add to this Vector3.
	 * @return {Vector3}
	 * @example
	 * // Add two Vector3 objects
	 * const vec = new Vector3(1, 2, 3).Add(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(5, 7, 9)
	 */
	public Add(vec: Vector3): Vector3
	/**
	 * @description Add two Vector3 objects together.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {Vector3} vec - The Vector3 to add to this Vector3.
	 * @return {Vector3}
	 * @example
	 * // Add two Vector3 objects
	 * const vec = new Vector3(1, 2, 3).Add(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(5, 7, 9)
	 */
	public AddForThis(vec: Vector3): Vector3
	/**
	 * @description Add a scalar value to the current vector.
	 *
	 * @param {number} scalar - the scalar value to add
	 * @return {Vector3}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector3(1, 2, 3).AddScalar(2);
	 * console.log(vec); // Vector3(3, 4, 5)
	 */
	public AddScalar(scalar: number): Vector3
	/**
	 * @description Add a scalar value to the current vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to add
	 * @return {Vector3}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector3(1, 2, 3).AddScalarForThis(2);
	 * console.log(vec); // Vector3(3, 4, 5)
	 */
	public AddScalarForThis(scalar: number): Vector3
	/**
	 * @description Add a scalar value to the x component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to add to the x component
	 * @return {Vector3}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector3(1, 2, 3).AddScalarX(2);
	 * console.log(vec); // Vector3(3, 2, 3)
	 */
	public AddScalarX(scalar: number): Vector3
	/**
	 * @description Add a scalar value to the y component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to add to the y component
	 * @return {Vector3}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector3(1, 2, 3).AddScalarY(2);
	 * console.log(vec); // Vector3(1, 4, 3)
	 */
	public AddScalarY(scalar: number): Vector3
	/**
	 * @description Add a scalar value to the z component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to add to the z component
	 * @return {Vector3}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector3(1, 2, 3).AddScalarZ(2);
	 * console.log(vec); // Vector3(1, 2, 5)
	 */
	public AddScalarZ(scalar: number): Vector3
	/**
	 * @description Subtract a vector from the current vector.
	 *
	 * @param {Vector3} vec - The vector to subtract from the current vector.
	 * @return {Vector3} A new Vector3 with the result of the subtraction.
	 * @example
	 * // Subtract two Vector3 objects
	 * const vec = new Vector3(1, 2, 3).Subtract(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(-3, -3, -3)
	 */
	public Subtract(vec: Vector3): Vector3
	/**
	 * @description Subtract a vector from the current vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {Vector3} vec - The vector to subtract from the current vector.
	 * @return {Vector3} A new Vector3 with the result of the subtraction.
	 * @example
	 * // Subtract two Vector3 objects
	 * const vec = new Vector3(1, 2, 3).SubtractForThis(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(-3, -3, -3)
	 */
	public SubtractForThis(vec: Vector3): Vector3
	/**
	 * @description Subtract a scalar value from each component of the vector.
	 *
	 * @param {number} scalar - The value to subtract from each vector component
	 * @return {Vector3} A new Vector3 with the scalar subtracted from each component
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector3(1, 2, 3).SubtractScalar(2);
	 * console.log(vec); // Vector3(-1, 0, 1)
	 */
	public SubtractScalar(scalar: number): Vector3
	/**
	 * @description Subtract a scalar value from each component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - The value to subtract from each vector component
	 * @return {Vector3}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector3(1, 2, 3).SubtractScalarForThis(2);
	 * console.log(vec); // Vector3(-1, 0, 1)
	 */
	public SubtractScalarForThis(scalar: number): Vector3
	/**
	 * @description Subtract a scalar value from the x component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - The value to subtract from the x component.
	 * @return {Vector3}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector3(1, 2, 3).SubtractScalarX(2);
	 * console.log(vec); // Vector3(-1, 2, 3)
	 */
	public SubtractScalarX(scalar: number): Vector3
	/**
	 * @description Subtract a scalar value from the y component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - The value to subtract from the y component.
	 * @return {Vector3}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector3(1, 2, 3).SubtractScalarY(2);
	 * console.log(vec); // Vector3(1, 0, 3)
	 */
	public SubtractScalarY(scalar: number): Vector3
	/**
	 * @description Subtract a scalar value from the z component of the vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - The value to subtract from the z component.
	 * @return {Vector3}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector3(1, 2, 3).SubtractScalarZ(2);
	 * console.log(vec); // Vector3(1, 2, 1)
	 */
	public SubtractScalarZ(scalar: number): Vector3
	/**
	 * @description Multiply the current vector by another vector.
	 *
	 * @param {Vector3} vec - The vector to multiply with
	 * @return {Vector3}
	 * @example
	 * // Multiply two Vector3 objects
	 * const vec = new Vector3(1, 2, 3).Multiply(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(4, 10, 18)
	 */
	public Multiply(vec: Vector3): Vector3
	/**
	 * @description Multiply this vector by the values of another vector.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {Vector3} vec - The vector to multiply with.
	 * @return {Vector3}
	 * @example
	 * // Multiply two Vector3 objects
	 * const vec = new Vector3(1, 2, 3).MultiplyForThis(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(4, 10, 18)
	 */
	public MultiplyForThis(vec: Vector3): Vector3
	/**
	 * @description Multiply the vector by a scalar.
	 *
	 * @param {number} scalar - the value to multiply the vector by
	 * @return {Vector3}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector3(1, 2, 3).MultiplyScalar(2);
	 * console.log(vec); // Vector3(2, 4, 6)
	 */
	public MultiplyScalar(scalar: number): Vector3
	/**
	 * @description Multiply the vector by a scalar.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the value to multiply the vector by
	 * @return {Vector3}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector3(1, 2, 3).MultiplyScalar(2);
	 * console.log(vec); // Vector3(2, 4, 6)
	 */
	public MultiplyScalarForThis(scalar: number): Vector3
	/**
	 * @description Multiply the vector's x component by the given scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the value by which to multiply the x component
	 * @return {Vector3}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector3(1, 2, 3).MultiplyScalarX(2);
	 * console.log(vec); // Vector3(2, 2, 3)
	 */
	public MultiplyScalarX(scalar: number): Vector3
	/**
	 * @description Multiply the vector's y component by the given scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the value by which to multiply the y component
	 * @return {Vector3}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector3(1, 2, 3).MultiplyScalarY(2);
	 * console.log(vec); // Vector3(1, 4, 3)
	 */
	public MultiplyScalarY(scalar: number): Vector3
	/**
	 * @description Multiply the vector's y component by the given scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the value by which to multiply the y component
	 * @return {Vector3}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector3(1, 2, 3).MultiplyScalarZ(2);
	 * console.log(vec); // Vector3(1, 2, 6)
	 */
	public MultiplyScalarZ(scalar: number): Vector3
	/**
	 * @description Divide the current vector by the input vector element-wise.
	 *
	 * @param {Vector3} vec - The vector to divide by.
	 * @return {Vector3}
	 * @example
	 * // Divide two Vector3 objects
	 * const vec = new Vector3(4, 10, 18).Divide(new Vector3(2, 5, 3));
	 * console.log(vec); // Vector3(2, 2, 6)
	 */
	public Divide(vec: Vector3): Vector3
	/**
	 * @description Divide the current vector by the input vector element-wise.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {Vector3} vec - The vector to divide by.
	 * @return {Vector3}
	 * @example
	 * // Divide two Vector3 objects
	 * const vec = new Vector3(4, 10, 18).DivideForThis(new Vector3(2, 5, 3));
	 * console.log(vec); // Vector3(2, 2, 6)
	 */
	public DivideForThis(vec: Vector3): Vector3
	/**
	 * @description Divide the vector by a scalar value.
	 *
	 * @param {number} scalar - the value to divide the vector by
	 * @return {Vector3}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector3(4, 10, 18).DivideScalar(2);
	 * console.log(vec); // Vector3(2, 5, 9)
	 */
	public DivideScalar(scalar: number): Vector3
	/**
	 * @description Divide the vector by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the value to divide the vector by
	 * @return {Vector3}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector3(4, 10, 18).DivideScalarForThis(2);
	 * console.log(vec); // Vector3(2, 5, 9)
	 */
	public DivideScalarForThis(scalar: number): Vector3
	/**
	 * @description Divide the vector's x component by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to divide by
	 * @return {Vector3} the modified Vector3 instance
	 * @example
	 * // Divide the vector
	 * const vec = new Vector3(4, 10, 18).DivideScalarX(2);
	 * console.log(vec); // Vector3(2, 10, 18)
	 */
	public DivideScalarX(scalar: number): Vector3
	/**
	 * @description Divide the vector's y component by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to divide by
	 * @return {Vector3}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector3(4, 10, 18).DivideScalarY(2);
	 * console.log(vec); // Vector3(4, 5, 18)
	 */
	public DivideScalarY(scalar: number): Vector3
	/**
	 * @description Divide the vector's z component by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {number} scalar - the scalar value to divide by
	 * @return {Vector3}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector3(4, 10, 18).DivideScalarY(2);
	 * console.log(vec); // Vector3(4, 10, 9)
	 */
	public DivideScalarZ(scalar: number): Vector3
	/**
	 * @description Multiply a vector by a scalar and then add another vector to the result.
	 *
	 * @param {Vector3} vec - the vector to be added
	 * @param {number} scalar - the scalar to multiply by
	 * @return {Vector3}
	 * @example
	 * // Multiply a vector
	 * const scalar = 2;
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * const result = vec1.MultiplyAdd(vec2, scalar);
	 * console.log(result); // Vector3(6, 9, 12)
	 */
	public MultiplyAdd(vec: Vector3, scalar: number): Vector3
	/**
	 * @description Multiply a vector by a scalar and then add another vector to the result.
	 *
	 * @note !!! This function modifies the current Vector3 and NOT return a new one Vector3
	 * @param {Vector3} vec - the vector to be added
	 * @param {number} scalar - the scalar to multiply by
	 * @return {Vector3}
	 * @example
	 * // Multiply a vector
	 * const scalar = 2;
	 * const vec1 = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * const result = vec1.MultiplyAdd(vec2, scalar);
	 * console.log(result); // Vector3(6, 9, 12)
	 */
	public MultiplyAddForThis(vec: Vector3, scalar: number): Vector3
	/**
	 * @description Calculate the distance from this vector to the given vector.
	 *
	 * @param {Vector3} vec - The vector to calculate the distance to.
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * console.log(vec.Distance(vec2)); // 5.196152422706632
	 */
	public Distance(vec: Vector3): number
	/**
	 * @description Calculates the squared distance between this vector and the input vector.
	 *
	 * @param {Vector3} vec - The input vector
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * console.log(vec.DistanceSqr(vec2)); // 27
	 */
	public DistanceSqr(vec: Vector3): number
	/**
	 * @description Calculates the squared distance in 2D space between this vector and the input vector.
	 *
	 * @param {Vector3 | Vector2} vec - the input vector
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * console.log(vec.DistanceSqr2D(vec2)); // 18
	 */
	public DistanceSqr2D(vec: Vector3 | Vector2): number
	/**
	 * @description Calculate the 2D distance from the current vector to the input vector.
	 *
	 * @param {Vector3 | Vector2} vec - the input vector
	 * @return {number} the calculated 2D distance
	 * @example
	 * const vec = new Vector3(1, 2, 3);
	 * const vec2 = new Vector3(4, 5, 6);
	 * console.log(vec.Distance2D(vec2)); // 4.242640687119285
	 */
	public Distance2D(vec: Vector3 | Vector2): number
	/**
	 * @description A function that returns a perpendicular vector.
	 *
	 * @param {boolean} isX - determines if the vector is perpendicular to the x-axis (default is true)
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).Perpendicular();
	 * console.log(vec); // Vector3(-2, 1, 3)
	 */
	public Perpendicular(isX?: boolean): Vector3
	/**
	 * @description Calculates the polar angle of the vector.
	 *
	 * @param {boolean} radian - If true, the angle will be returned in radians. If false, the angle will be returned in degrees. (default is false)
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3).PolarAngle();
	 * const vec2 = new Vector3(1, 2, 3).PolarAngle(true);
	 * console.log(vec); // 63.43494882292201
	 * console.log(vec2); // 1.1071487177940904
	 */
	public PolarAngle(radian?: boolean): number
	/**
	 * @description A function that rotates a vector around the Z-axis by a given angle.
	 *
	 * @param {number} angle - The angle in radians to rotate the vector by.
	 * @return {Vector3} The rotated vector.
	 * @example
	 * const vec = new Vector3(1, 2, 3).Rotated(0.5);
	 * console.log(vec); // Vector3(-0.08126851531803325, 2.2345906623849485, 3)
	 */
	public Rotated(angle: number): Vector3
	/**
	 * @description Extends vector in the rotation direction by the distance.
	 *
	 * @param {Vector3} rotation - The vector representing the rotation. For ex. Entity#Forward
	 * @param {number} distance - The distance to apply along the rotation vector.
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).Rotation(new Vector3(1, 0, 0), 1);
	 * console.log(vec); // Vector3(2, 2, 3)
	 */
	public Rotation(rotation: Vector3, distance: number): Vector3
	/**
	 * @description Extends vector in the rotation direction by radian
	 *
	 * @param {Vector3} rotation - the rotation vector in degrees. For ex. Entity#Forward
	 * @param {number} distance - the distance for the rotation
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).RotationRad(new Vector3(1, 0, 0), 1);
	 * console.log(vec); // Vector3(1.0174532925199433, 2, 3)
	 */
	public RotationRad(rotation: Vector3, distance: number): Vector3
	/**
	 * @description Extends vector in the rotation direction by angle
	 *
	 * @param angle for ex. Entity#RotationRad
	 * @param distance distance to be added
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).InFrontFromAngle(1, 1);
	 * console.log(vec); // Vector3(1.5403023058681398, 2.8414709848078967, 3)
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector3
	/**
	 * @description Find the rotation angle between two vectors.
	 *
	 * @param {Vector3} vec - the vector to find the rotation angle to
	 * @param {number} vecAngleRadian - the angle in radians to compare against (default is 0)
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3).FindRotationAngle(new Vector3(1, 0, 0), 0.5);
	 * console.log(vec); // 2.0707963267948966
	 */
	public FindRotationAngle(vec: Vector3, vecAngleRadian?: number): number
	/**
	 * @description Calculate the rotation time based on the given rotation speed.
	 *
	 * @param {number} rotSpeed - the rotation speed
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3).RotationTime(1);
	 * console.log(vec); // 0.036904957259803015
	 */
	public RotationTime(rotSpeed: number): number
	/**
	 * @description Calculate the angle between two vectors.
	 *
	 * @param {Vector3} vec - The other vector to calculate the angle with.
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3).AngleBetweenVectors(new Vector3(4, 5, 6));
	 * console.log(vec); // 12.094757077011309
	 */
	public AngleBetweenVectors(vec: Vector3): number
	/**
	 * @description Calculate the angle between two faces.
	 * The angle between the two vectors in radians
	 *
	 * @param {Vector3} front - the front vector
	 * @return {number}
	 * @example
	 * const vec = new Vector3(1, 2, 3).AngleBetweenFaces(new Vector3(4, 5, 6));
	 * console.log(vec); // 0.2257261285527342
	 */
	public AngleBetweenFaces(front: Vector3): number
	/**
	 * @description Get the direction to the target vector the normalized direction vector to the target
	 *
	 * @param {Vector3} target - the target vector to calculate direction to
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).GetDirectionTo(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(0.5773502691896257, 0.5773502691896257, 0.5773502691896257)
	 */
	public GetDirectionTo(target: Vector3): Vector3
	/**
	 * @description Get the 2D direction to the target vector the normalized direction vector to the target
	 *
	 * @param {Vector3} target - The target vector
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).GetDirection2DTo(new Vector3(4, 5, 6));
	 * console.log(vec); // Vector3(0.7071067811865476, 0.7071067811865476, 0)
	 */
	public GetDirection2DTo(target: Vector3): Vector3
	/**
	 * @description Extends the vector by a specified distance in the direction of the given vector.
	 *
	 * @param {Vector3} vec - The vector to extend towards.
	 * @param {number} distance - The distance to extend the vector.
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).Extend(new Vector3(4, 5, 6), 1);
	 * console.log(vec); // Vector3(1.5773502691896257, 2.5773502691896257, 3.5773502691896257)
	 */
	public Extend(vec: Vector3, distance: number): Vector3
	/**
	 * Extends a 2D vector towards another vector by a specified distance.
	 *
	 * @param {Vector3} vec - The target vector to extend towards.
	 * @param {number} distance - The distance to extend the vector by.
	 * @return {Vector3}
	 * @example
	 * const vec = new Vector3(1, 2, 3).Extend2D(new Vector3(4, 5, 6), 1);
	 * console.log(vec); // Vector3(1.7071067811865476, 2.7071067811865476, 3)
	 */
	public Extend2D(vec: Vector3, distance: number): Vector3
	/**
	 * @description Find the closest vector in the given array.
	 *
	 * @param {Array<Vector3>} vecs - array of Vector3 objects
	 * @return {Vector3} the closest vector
	 * @example
	 * const vec = new Vector3(1, 2, 3).Closest([new Vector3(4, 5, 6), new Vector3(7, 8, 9)]);
	 * console.log(vec); // Vector3(4, 5, 6)
	 */
	public Closest(vecs: Vector3[]): Vector3
}
/**
 * @ignore
 * @internal
 */
export const CVector3 = ImportSDK as unknown as typeof Vector3
