// @ts-ignore
import { Vector2 as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { ProjectionInfo } from "./ProjectionInfo"
import type { Vector3 } from "./Vector3"

export declare class Vector2 {
	/**
	 * @description Create a new Vector2 from the given angle.
	 *
	 * @param {number} angle - The angle in radians
	 * @return {Vector2}
	 * @example
	 * // Create a Vector2 from a 45 degree angle
	 * const vector = Vector2.FromAngle(Math.PI / 4);
	 * console.log(vector); // Vector2(0.70710678118654746, 0.70710678118654746, 0)
	 */
	public static FromAngle(angle: number): Vector2
	/**
	 * @description Create a new Vector2 from a string representation.
	 *
	 * @param {string} str - the string representation of the Vector2
	 * @return {Vector2}
	 *
	 * @example
	 * const vector = Vector2.FromString("1 2");
	 * console.log(vector); // Vector2(1, 2)
	 */
	public static FromString(str: string): Vector2
	/**
	 * Creates a new Vector2 from polar coordinates.
	 *
	 * @param {number} radial - the radial distance
	 * @param {number} polar - the polar angle
	 * @return {Vector2}
	 * @example
	 * // Create a Vector2 from polar coordinates
	 * const vector = Vector2.FromPolarCoordinates(5, Math.PI/4);
	 * console.log(vector); // Vector2(3.5355339059327378, 3.5355339059327373, 0)
	 */
	public static FromPolarCoordinates(radial: number, polar: number): Vector2
	/**
	 * @description Get the center of an array of Vector2 objects.
	 *
	 * @param {Array<Vector2>} array - the array of Vector2 objects
	 * @return {Vector2}
	 * @example
	 * // Get the center of an array of Vector2 objects
	 * const center = Vector2.GetCenter([new Vector2(1, 0), new Vector2(0, 2), new Vector2(0, 3)]);
	 * console.log(center); // Vector2(0.3333333333333333, 1.6666666666666666)
	 */
	public static GetCenter(array: Vector2[]): Vector2
	/**
	 * @description Calculates the center type of the given array using the provided callback function.
	 *
	 * @param {Array<T>} array - the input array
	 * @param {(value: T) => Vector2} callback - the callback function to calculate the center type
	 * @return {Vector2}
	 * @example
	 * // Calculates the center type of the given array using the provided callback function.
	 * const center = Vector2.GetCenterType([new Vector2(1, 0, 0), new Vector2(0, 2), new Vector2(0, 3)], center => center.Add(new Vector2(1, 1)));
	 * console.log(center); // Vector2(1.3333333333333333, 2.6666666666666667)
	 */
	public static GetCenterType<T>(array: T[], callback: (value: T) => Vector2): Vector2
	/**
	 * @description Creates a new Vector2 instance with the same x, y values as the input Vector2.
	 *
	 * @param {Vector2} vec - The input Vector2 to copy from
	 * @return {Vector2}
	 * @example
	 * // Creates a new Vector2 instance with the same x, y values as the input Vector2
	 * const copy = Vector2.CopyFrom(new Vector2(1, 2, 3));
	 * console.log(copy); // Vector2(1, 2, 3)
	 */
	public static CopyFrom(vec: Vector2): Vector2
	/**
	 * Convert a 3D vector to a 2D vector.
	 *
	 * @param {Vector3} vec - The 3D vector to convert
	 * @return {Vector2}
	 * @example
	 * // Convert a 3D vector to a 2D vector
	 * const vec = Vector2.FromVector3(new Vector3(1, 2, 3));
	 * console.log(vec); // Vector2(1, 2)
	 */
	public static FromVector3(vec: Vector3): Vector2
	/**
	 * @description Create a new Vector2 from the given array.
	 *
	 * @param {ArrayLike<number>} array - The array containing the x, y values.
	 * @return {Vector2}
	 * @example
	 * // Create a Vector2 from an array
	 * const vec = Vector2.fromArray([1, 2]);
	 * console.log(vec); // Vector2(1, 2)
	 */
	public static fromArray(array: number[]): Vector2

	/**
	 * @description Creates a new Vector2 instance.
	 *
	 * @param x - The x coordinate value (default is 0)
	 * @param y - The y coordinate value (default is 0)
	 */
	constructor(x?: number, y?: number)

	/**
	 * @description Get the angle of the vector in radians.
	 *
	 * @return {number}
	 * @example
	 * // Get the angle of the vector
	 * const angle = new Vector2(1, 2).Angle;
	 * console.log(angle); // 1.1071487177940904
	 */
	public get Angle(): number
	/**
	 * @description Returns the polar for vector angle (in Degrees).
	 *
	 * @return {number}
	 * @example
	 * // Get the angle of the vector
	 * const polar = new Vector2(1, 2).Polar;
	 * console.log(polar); // 169.91557353255848
	 */
	public get Polar(): number
	/**
	 * @description Check if Vector2 of the valid.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if Vector2 of the valid
	 * const isValid = new Vector2(1, 2).IsValid;
	 * const isValid2 = new Vector2(NaN, NaN).IsValid;
	 * const isValid3 = new Vector2(1, Infinity).IsValid;
	 * console.log(isValid, isValid2, isValid3); // true false false
	 */
	public get IsValid(): boolean
	/**
	 * @description Check if Vector2 of the finite.
	 *
	 * @return {boolean}
	 * @example
	 * // Check if Vector2 of the finite
	 * const isFinite = new Vector2(1, 2).IsFinite; // true
	 * const isFinite2 = new Vector2(NaN, NaN).IsFinite; // false
	 * const isFinite3 = new Vector2(1, Infinity).IsFinite.IsFinite; // false
	 * console.log(isFinite, isFinite2, isFinite3); // true false false
	 */
	public get IsFinite(): boolean
	/**
	 * @description Get the length of the vector
	 *
	 * @return {number}
	 * @example
	 * // Get the squared length of the vector
	 * const squaredLength = new Vector2(1, 2).Length;
	 * console.log(squaredLength); // 2.23606797749979
	 */
	public get Length(): number
	/**
	 * @description Get the squared length of the vector.
	 *
	 * @return {number}
	 * @example
	 * // Get the squared length of the vector
	 * const squaredLength = new Vector2(1, 2).LengthSqr;
	 * console.log(squaredLength); // 5
	 */
	public get LengthSqr(): number
	/**
	 * @description Sets all components of the vector to zero.
	 *
	 * @return {Vector2}
	 * @example
	 * // Set all x, y components of the vector to zero
	 * const vec = new Vector2(1, 2, 3).toZero();
	 * console.log(vec); // Vector2(0, 0)
	 */
	public toZero(): Vector2
	/**
	 * @description Convert the Vector2 coordinates to an array.
	 *
	 * @return {Array<number>}
	 * @example
	 * // Convert the object's coordinates to an array
	 * const array = new Vector2(1, 2).toArray();
	 * console.log(array); // [1, 2]
	 */
	public toArray(): [number, number]
	/**
	 * @description Calculate the absolute values of each component of the vector.
	 *
	 * @return {Vector2}
	 * @example
	 * // Calculate the absolute values of each component of the vector
	 * const absVec = new Vector2(1, -2).Abs();
	 * console.log(absVec); // Vector2(1, 2)
	 */
	public Abs(): Vector2
	/**
	 * @description Convert radians to degrees using a specific formula.
	 *
	 * @return {Vector2}
	 * @example
	 * // Convert radians to degrees
	 * const degrees = new Vector2(1, 2).RadiansToDegrees();
	 * console.log(degrees); // Vector2(57.29577951308232, 114.59155902616464)
	 */
	public RadiansToDegrees(): Vector2
	/**
	 * @description Convert degrees to radians by multiplying with PI and dividing by 180.
	 *
	 * @return {Vector2}
	 * @example
	 * // Convert degrees to radians
	 * const radians = new Vector2(100, 200).DegreesToRadians();
	 * console.log(radians); // Vector2(1.7453292519943295, 3.490658503988659)
	 */
	public DegreesToRadians(): Vector2
	/**
	 * @description Clone the current vector.
	 *
	 * @return {Vector2}
	 * @example
	 * // Clone the current vector
	 * const vecClone = new Vector2(1, 2).Clone();
	 * console.log(vecClone); // Vector2(1, 2)
	 */
	public Clone(): Vector2
	/**
	 * @description Negates the x, y components of the vector.
	 *
	 * @return {Vector2}
	 * @example
	 * // Negate the x, y components of the vector
	 * const vec = new Vector2(1, 2).Negate();
	 * console.log(vec); // Vector2(-1, -2)
	 */
	public Negate(): Vector2
	/**
	 * @description Invalidates the vector by setting x, y to NaN.
	 *
	 * @return {Vector2}
	 * @example
	 * // Invalidate the vector
	 * const vec = new Vector2(1, 2).Invalidate();
	 * console.log(vec); // Vector2(NaN, NaN)
	 */
	public Invalidate(): Vector2
	/**
	 * @description Calculate the square root of each component of the Vector2.
	 *
	 * @return {Vector2}
	 * @example
	 * // Calculate the square root of each component of the vector
	 * const vec = new Vector2(1, 2).SquareRoot();
	 * console.log(vec); // Vector2(1, 1.4142135623730951)
	 */
	public SquareRoot(): Vector2
	/**
	 * @description Check if the given vector is equal to the current vector.
	 *
	 * @param {Vector2} vec - The vector to compare with
	 * @return {boolean}
	 * @example
	 * // Check if the given vector is equal to the current vector
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(1, 2);
	 * const isEqual = vec2.Equals(vec1);
	 * console.log(isEqual); // true
	 */
	public Equals(vec: Vector2): boolean
	/**
	 * @description Check if the vector is approximately zero within a given tolerance.
	 *
	 * @param {number} tolerance - the tolerance value for checking if the vector is zero (default is 0.01)
	 * @return {boolean}
	 * @example
	 * // Check if the vector is approximately zero
	 * const vec = new Vector2(0, 0);
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
	 * const vec = new Vector2(1, 2);
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
	 * const vec = new Vector2(1, 2);
	 * const isLessThan1 = vec.IsLengthLessThan(10);
	 * const isLessThan2 = vec.IsLengthLessThan(2);
	 * console.log(isLessThan1); // true
	 * console.log(isLessThan2); // false
	 */
	public IsLengthLessThan(val: number): boolean
	/**
	 * @description Check if the given vector is within a specified range.
	 *
	 * @param {Vector2} vec - the vector to check against
	 * @param {number} range - the range to check within
	 * @return {boolean}
	 * @example
	 * const vec = new Vector2(1, 2).IsInRange(new Vector2(4, 5), 1);
	 * const vec2 = new Vector2(1, 2).IsInRange(new Vector2(1, 2), 1);
	 * console.log(vec, vec2); // false true
	 */
	public IsInRange(vec: Vector2, range: number): boolean
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
	 * const vec = new Vector2(1, 2);
	 * const isInside = vec.IsUnderRectangle(0, 0, 10, 10);
	 * console.log(isInside); // true
	 */
	public IsUnderRectangle(x: number, y: number, width: number, height: number): boolean
	/**
	 * @description Copy the values of this Vector2 to the provided vector.
	 *
	 * @param {Vector2} vec - The vector to copy to.
	 * @return {Vector2}
	 * @example
	 * // Copy the values of this Vector2 to the provided vector
	 * const vec1 = new Vector2();
	 * const vec2 = new Vector2(1, 2).CopyTo(vec1);
	 * console.log(vec1); // Vector2(1, 2)
	 */
	public CopyTo(vec: Vector2): Vector2
	/**
	 * @description Copy the values from the provided Vector2 to this Vector2.
	 *
	 * @param {Vector2} vec - The Vector2 to copy from
	 * @return {Vector2}
	 * @example
	 * // Copy the values from the provided Vector2 to this Vector2
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2().CopyFrom(vec1);
	 * console.log(vec2); // Vector2(1, 2)
	 */
	public CopyFrom(vec: Vector2): Vector2
	/**
	 * @description Generates a random Vector2 within the specified range.
	 *
	 * @param {number} minVal - the minimum value of the range
	 * @param {number} maxVal - the maximum value of the range
	 * @return {Vector2}
	 * @example
	 * // Generates a random Vector2 within the specified range
	 * const vector = new Vector2(0, 0).Random(0, 10); // random values from x, y
	 * console.log(vector); // Vector2(4, 4)
	 */
	public Random(minVal: number, maxVal: number): Vector2
	/**
	 * @description Returns a new Vector2 with the minimum values of the current Vector2 and the input vector or number.
	 *
	 * @param {Vector2 | number} vec - The vector or number to compare with the current Vector2.
	 * @return {Vector2}
	 * @example
	 * // Returns a new Vector2 with the minimum values
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(2, 1);
	 * const min = vec1.Min(vec2);
	 * console.log(min); // Vector2(1, 1)
	 */
	public Min(vec: Vector2 | number): Vector2
	/**
	 * @description Returns a new Vector2 with the maximum values of the current Vector2 and the input vector or number.
	 *
	 * @param {Vector2 | number} vec - The vector or number to compare with the current Vector2.
	 * @return {Vector2}
	 * @example
	 * // Returns a new Vector2 with the maximum values
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(2, 1);
	 * const max = vec1.Max(vec2);
	 * console.log(max); // Vector2(2, 2)
	 */
	public Max(vec: Vector2 | number): Vector2
	/**
	 * @description Ceil function that rounds up the x, y values of a Vector2.
	 *
	 * @param {number} count - the number of decimal places to round up to (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Ceil the Vector2 to 2 decimal places
	 * const vec = new Vector2(1.2345, 2.3456).Ceil(2);
	 * console.log(vec); // Vector2(1.24, 2.35)
	 */
	public Ceil(count: number): Vector2
	/**
	 * @description CeilForThis function that rounds up the x, y values of a Vector2.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} count - the number of decimal places to round up to (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Ceil the Vector2 to 2 decimal places
	 * const vec = new Vector2(1.2345, 2.3456).CeilForThis(2);
	 * console.log(vec); // Vector2(1.24, 2.35)
	 */
	public CeilForThis(count: number): Vector2
	/**
	 * @description Rounds the vector to the specified number of decimal places.
	 *
	 * @param {number} count - the number of decimal places to round to (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Round the Vector2 to 2 decimal places
	 * const vec = new Vector2(1.2345, 2.3456, 3.4567).Round(2);
	 * console.log(vec); // Vector2(1.23, 2.35)
	 */
	public Round(count: number): Vector2
	/**
	 * @description Rounds the vector components to a specified count.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} count - the number of decimal places to round to (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Round the Vector2 to 2 decimal places
	 * const vec = new Vector2(1.2345, 2.3456).RoundForThis(2);
	 * console.log(vec); // Vector2(1.23, 2.35)
	 */
	public RoundForThis(count: number): Vector2
	/**
	 * @description A function to round the x, y coordinates to a specific decimal place.
	 *
	 * @param {number} count - the number of decimal places to round to (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Round the Vector2 down to the nearest multiple of 10^2
	 * const vec = new Vector2(1.2345, 2.3456).Floor();
	 * console.log(vec); // Vector2(1, 2)
	 */
	public Floor(count: number): Vector2
	/**
	 * @description A function to round the x, y coordinates to a specific decimal place.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} count - the number of decimal places to round to (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Round the Vector2 to 2 decimal places
	 * const vec = new Vector2(1.2345, 2.3456).FloorForThis();
	 * console.log(vec); // Vector2(1, 2)
	 */
	public FloorForThis(count: number): Vector2
	/**
	 * @description SetVector function sets the x, y values of the Vector2 object.
	 *
	 * @param {number} x - The x coordinate value (default is 0)
	 * @param {number} y - The y coordinate value (default is 0)
	 * @return {Vector2}
	 * @example
	 * // Set the x, y values of the Vector2 object
	 * const vec = new Vector2();
	 * vec.SetVector(1, 2);
	 * console.log(vec); // Vector2(1, 2)
	 */
	public SetVector(x: number, y: number): Vector2
	/**
	 * @description Set the x coordinate of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} num - The new value for the x coordinate
	 * @return {Vector2}
	 * @example
	 * // Set the x coordinate of the vector
	 * const vec = new Vector2();
	 * vec.SetX(1);
	 * console.log(vec); // Vector2(1, 0)
	 */
	public SetX(num: number): Vector2
	/**
	 * @description Set the y coordinate of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} num - The new value for the y coordinate
	 * @return {Vector2}
	 * @example
	 * // Set the y coordinate of the vector
	 * const vec = new Vector2();
	 * vec.SetY(1);
	 * console.log(vec); // Vector2(0, 1)
	 */
	public SetY(num: number): Vector2
	/**
	 * @description Normalize the vector.
	 *
	 * @param {number} scalar - the scaling factor (default is 1)
	 * @return {Vector2}
	 * @example
	 * // Normalize the vector
	 * const vec = new Vector2(1, 2).Normalize();
	 * console.log(vec); // Vector2(0.4472135954999579, 0.8944271909999159)
	 */
	public Normalize(scalar: number): Vector2
	/**
	 * @description Cross product of this vector and the input vector.
	 *
	 * @param {Vector2} vec - The input vector
	 * @return {number} The result of the cross product
	 * @example
	 * // Cross product of two vectors
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * const result = vec1.Cross(vec2);
	 * console.log(result); // -3
	 */
	public Cross(vec: Vector2): number
	/**
	 * @description A function that calculates the dot product of this vector and another vector.
	 *
	 * @param {Vector2} vec - The other vector to calculate the dot product with.
	 * @return {number}
	 * @example
	 * // Calculate the dot product of two vectors
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * const result = vec1.Dot(vec2);
	 * console.log(result); // 14
	 */
	public Dot(vec: Vector2): number
	/**
	 * @description Scale the vector to the specified scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - The scalar value to scale the vector by.
	 * @return {Vector2}
	 * @example
	 * // Scale the vector
	 * const vec = new Vector2(1, 2).ScaleTo(2);
	 * console.log(vec); // Vector2(0.8944271909999159, 1.7888543819998317)
	 */
	public ScaleTo(scalar: number): Vector2
	/**
	 * @description Divide the vector by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - The scalar value to divide by
	 * @return {Vector2}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector2(1, 2).DivideTo(2);
	 * console.log(vec); // Vector2(1.118033988749895, 2.23606797749979)
	 */
	public DivideTo(scalar: number): Vector2
	/**
	 * @description Clamp the vector between the minimum and maximum values.
	 *
	 * @param {Vector2} min - the minimum values for each axis
	 * @param {Vector2} max - the maximum values for each axis
	 * @return {Vector2}
	 * @example
	 * // Clamp the vector
	 * const min = new Vector2(1, 2);
	 * const max = new Vector2(4, 5);
	 * const result = new Vector2(1, 2).Clamp(min, max);
	 * console.log(result); // Vector2(1, 2)
	 */
	public Clamp(min: Vector2, max: Vector2): Vector2
	/**
	 * @description Add two Vector2 objects together.
	 *
	 * @param {Vector2} vec - The Vector2 to add to this Vector2.
	 * @return {Vector2}
	 * @example
	 * // Add two Vector2 objects
	 * const vec = new Vector2(1, 2).Add(new Vector2(4, 5));
	 * console.log(vec); // Vector2(5, 7)
	 */
	public Add(vec: Vector2): Vector2
	/**
	 * @description Add two Vector2 objects together.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {Vector2} vec - The Vector2 to add to this Vector2.
	 * @return {Vector2}
	 * @example
	 * // Add two Vector2 objects
	 * const vec = new Vector2(1, 2).Add(new Vector2(4, 5));
	 * console.log(vec); // Vector2(5, 7)
	 */
	public AddForThis(vec: Vector2): Vector2
	/**
	 * @description Add a scalar value to the current vector.
	 *
	 * @param {number} scalar - the scalar value to add
	 * @return {Vector2}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector2(1, 2).AddScalar(2);
	 * console.log(vec); // Vector2(3, 4)
	 */
	public AddScalar(scalar: number): Vector2
	/**
	 * @description Add a scalar value to the current vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the scalar value to add
	 * @return {Vector2}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector2(1, 2).AddScalarForThis(2);
	 * console.log(vec); // Vector2(3, 4)
	 */
	public AddScalarForThis(scalar: number): Vector2
	/**
	 * @description Add a scalar value to the x component of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the scalar value to add to the x component
	 * @return {Vector2}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector2(1, 2).AddScalarX(2);
	 * console.log(vec); // Vector2(3, 2)
	 */
	public AddScalarX(scalar: number): Vector2
	/**
	 * @description Add a scalar value to the y component of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the scalar value to add to the y component
	 * @return {Vector2}
	 * @example
	 * // Add a scalar
	 * const vec = new Vector2(1, 2).AddScalarY(2);
	 * console.log(vec); // Vector2(1, 4)
	 */
	public AddScalarY(scalar: number): Vector2
	/**
	 * @description Subtract a vector from the current vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {Vector2} vec - The vector to subtract from the current vector.
	 * @return {Vector2} A new Vector2 with the result of the subtraction.
	 * @example
	 * // Subtract two Vector2 objects
	 * const vec = new Vector2(1, 2).Subtract(new Vector2(4, 5));
	 * console.log(vec); // Vector2(-3, -3)
	 */
	public Subtract(vec: Vector2): Vector2
	/**
	 * @description Subtract a vector from the current vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {Vector2} vec - The vector to subtract from the current vector.
	 * @return {Vector2} A new Vector2 with the result of the subtraction.
	 * @example
	 * // Subtract two Vector2 objects
	 * const vec = new Vector2(1, 2).SubtractForThis(new Vector2(4, 5));
	 * console.log(vec); // Vector2(-3, -3)
	 */
	public SubtractForThis(vec: Vector2): Vector2
	/**
	 * @description Subtract a scalar value from each component of the vector.
	 *
	 * @param {number} scalar - The value to subtract from each vector component
	 * @return {Vector2} A new Vector2 with the scalar subtracted from each component
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector2(1, 2).SubtractScalar(2);
	 * console.log(vec); // Vector2(-1, 0)
	 */
	public SubtractScalar(scalar: number): Vector2
	/**
	 * @description Subtract a scalar value from each component of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - The value to subtract from each vector component
	 * @return {Vector2}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector2(1, 2).SubtractScalarForThis(2);
	 * console.log(vec); // Vector2(-1, 0)
	 */
	public SubtractScalarForThis(scalar: number): Vector2
	/**
	 * @description Subtract a scalar value from the x component of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - The value to subtract from the x component.
	 * @return {Vector2}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector2(1, 2).SubtractScalarX(2);
	 * console.log(vec); // Vector2(-1, 2)
	 */
	public SubtractScalarX(scalar: number): Vector2
	/**
	 * @description Subtract a scalar value from the y component of the vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - The value to subtract from the y component.
	 * @return {Vector2}
	 * @example
	 * // Subtract a scalar
	 * const vec = new Vector2(1, 2).SubtractScalarY(2);
	 * console.log(vec); // Vector2(1, 0)
	 */
	public SubtractScalarY(scalar: number): Vector2
	/**
	 * @description Multiply the current vector by another vector.
	 *
	 * @param {Vector2} vec - The vector to multiply with
	 * @return {Vector2}
	 * @example
	 * // Multiply two Vector2 objects
	 * const vec = new Vector2(1, 2).Multiply(new Vector2(4, 5));
	 * console.log(vec); // Vector2(4, 10)
	 */
	public Multiply(vec: Vector2): Vector2
	/**
	 * @description Multiply this vector by the values of another vector.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {Vector2} vec - The vector to multiply with.
	 * @return {Vector2}
	 * @example
	 * // Multiply two Vector2 objects
	 * const vec = new Vector2(1, 2).MultiplyForThis(new Vector2(4, 5));
	 * console.log(vec); // Vector2(4, 10)
	 */
	public MultiplyForThis(vec: Vector2): Vector2
	/**
	 * @description Multiply the vector by a scalar.
	 *
	 * @param {number} scalar - the value to multiply the vector by
	 * @return {Vector2}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector2(1, 2).MultiplyScalar(2);
	 * console.log(vec); // Vector2(2, 4)
	 */
	public MultiplyScalar(scalar: number): Vector2
	/**
	 * @description Multiply the vector by a scalar.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the value to multiply the vector by
	 * @return {Vector2}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector2(1, 2).MultiplyScalar(2);
	 * console.log(vec); // Vector2(2, 4)
	 */
	public MultiplyScalarForThis(scalar: number): Vector2
	/**
	 * @description Multiply the vector's x component by the given scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the value by which to multiply the x component
	 * @return {Vector2}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector2(1, 2).MultiplyScalarX(2);
	 * console.log(vec); // Vector2(2, 2)
	 */
	public MultiplyScalarX(scalar: number): Vector2
	/**
	 * @description Multiply the vector's y component by the given scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the value by which to multiply the y component
	 * @return {Vector2}
	 * @example
	 * // Multiply the vector
	 * const vec = new Vector2(1, 2).MultiplyScalarY(2);
	 * console.log(vec); // Vector2(1, 4)
	 */
	public MultiplyScalarY(scalar: number): Vector2
	/**
	 * @description Divide the current vector by the input vector element-wise.
	 *
	 * @param {Vector2} vec - The vector to divide by.
	 * @return {Vector2}
	 * @example
	 * // Divide two Vector2 objects
	 * const vec = new Vector2(4, 10).Divide(new Vector2(2, 5));
	 * console.log(vec); // Vector2(2, 2)
	 */
	public Divide(vec: Vector2): Vector2
	/**
	 * @description Divide the current vector by the input vector element-wise.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {Vector2} vec - The vector to divide by.
	 * @return {Vector2}
	 * @example
	 * // Divide two Vector2 objects
	 * const vec = new Vector2(4, 10).DivideForThis(new Vector2(2, 5));
	 * console.log(vec); // Vector2(2, 2)
	 */
	public DivideForThis(vec: Vector2): Vector2
	/**
	 * @description Divide the vector by a scalar value.
	 *
	 * @param {number} scalar - the value to divide the vector by
	 * @return {Vector2}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector2(4, 10).DivideScalar(2);
	 * console.log(vec); // Vector2(2, 5)
	 */
	public DivideScalar(scalar: number): Vector2
	/**
	 * @description Divide the vector by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the value to divide the vector by
	 * @return {Vector2}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector2(4, 10).DivideScalarForThis(2);
	 * console.log(vec); // Vector2(2, 5)
	 */
	public DivideScalarForThis(scalar: number): Vector2
	/**
	 * @description Divide the vector's x component by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the scalar value to divide by
	 * @return {Vector2} the modified Vector2 instance
	 * @example
	 * // Divide the vector
	 * const vec = new Vector2(4, 10).DivideScalarX(2);
	 * console.log(vec); // Vector2(2, 10)
	 */
	public DivideScalarX(scalar: number): Vector2
	/**
	 * @description Divide the vector's y component by a scalar value.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {number} scalar - the scalar value to divide by
	 * @return {Vector2}
	 * @example
	 * // Divide the vector
	 * const vec = new Vector2(4, 10).DivideScalarY(2);
	 * console.log(vec); // Vector2(4, 5)
	 */
	public DivideScalarY(scalar: number): Vector2
	/**
	 * @description Multiply a vector by a scalar and then add another vector to the result.
	 *
	 * @param {Vector2} vec - the vector to be added
	 * @param {number} scalar - the scalar to multiply by
	 * @return {Vector2}
	 * @example
	 * // Multiply a vector
	 * const scalar = 2;
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * const vec = vec1.MultiplyAdd(vec2, scalar);
	 * console.log(vec); // Vector2(6, 9)
	 */
	public MultiplyAdd(vec: Vector2, scalar: number): Vector2
	/**
	 * @description Multiply a vector by a scalar and then add another vector to the result.
	 *
	 * @note !!! This function modifies the current Vector2 and NOT return a new one Vector2
	 * @param {Vector2} vec - the vector to be added
	 * @param {number} scalar - the scalar to multiply by
	 * @return {Vector2}
	 * @example
	 * // Multiply a vector
	 * const scalar = 2;
	 * const vec1 = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * const vec = vec1.MultiplyAdd(vec2, scalar);
	 * console.log(vec); // Vector2(6, 9)
	 */
	public MultiplyAddForThis(vec: Vector2, scalar: number): Vector2
	/**
	 * @description Calculate the distance from this vector to the given vector.
	 *
	 * @param {Vector2} vec - The vector to calculate the distance to.
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * console.log(vec.Distance(vec2)); // 4.242640687119285
	 */
	public Distance(vec: Vector2): number
	/**
	 * @description Calculates the squared distance between this vector and the input vector.
	 *
	 * @param {Vector2} vec - The input vector
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * console.log(vec.DistanceSqr(vec2)); // 18
	 */
	public DistanceSqr(vec: Vector2): number
	/**
	 * @description Calculates the polar angle of the vector.
	 *
	 * @param {boolean} radian - If true, the angle will be returned in radians. If false, the angle will be returned in degrees. (default is false)
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2).PolarAngle();
	 * const vec2 = new Vector2(1, 2).PolarAngle(true);
	 * console.log(vec); // 63.43494882292201
	 * console.log(vec2); // 1.1071487177940904
	 */
	public PolarAngle(radian?: boolean): number
	/**
	 * @description Calculate the rotation time based on the given rotation speed.
	 *
	 * @param {number} rotSpeed - the rotation speed
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2).RotationTime(1);
	 * console.log(vec); // 0.036904957259803015
	 */
	public RotationTime(rotSpeed: number): number
	/**
	 * @description Calculate the angle between two vectors.
	 *
	 * @param {Vector2} vec - The other vector to calculate the angle with.
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2).AngleBetweenVectors(new Vector2(4, 5));
	 * console.log(vec); // 12.094757077011309
	 */
	public AngleBetweenVectors(vec: Vector2): number
	/**
	 * @description Calculate the angle between two faces.
	 * The angle between the two vectors in radians
	 *
	 * @param {Vector2} front - the front vector
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2).AngleBetweenFaces(new Vector2(4, 5));
	 * console.log(vec); // 0.21109333322274684
	 */
	public AngleBetweenFaces(front: Vector2): number
	/**
	 * @description Find the rotation angle between two vectors.
	 *
	 * @param {Vector2} vec - the vector to find the rotation angle to
	 * @param {number} vecAngleRadian - the angle in radians to compare against (default is 0)
	 * @return {number}
	 * @example
	 * const vec = new Vector2(1, 2).FindRotationAngle(new Vector2(1, 0), 0.5);
	 * console.log(vec); // 2.0707963267948966
	 */
	public FindRotationAngle(vec: Vector2, vecAngleRadian?: number): number
	/**
	 * @description Project a vector onto a line segment defined by two points.
	 *
	 * @param {Vector2} segmentStart - the start point of the line segment
	 * @param {Vector2} segmentEnd - the end point of the line segment
	 * @return {ProjectionInfo} information about the projection
	 * @example
	 * const vec = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * const projection = vec.ProjectOn(vec2, vec);
	 * console.log(projection);
	 */
	public ProjectOn(segmentStart: Vector2, segmentEnd: Vector2): ProjectionInfo
	/**
	 * @description Calculate the squared distance between a segment and a point.
	 *
	 * @param {Vector2} segmentStart - the start point of the segment
	 * @param {Vector2} segmentEnd - the end point of the segment
	 * @param {boolean} onlyIfOnSegment - flag to indicate if the distance should only be calculated if the point is on the segment (default: false)
	 * @return {number} the squared distance between the segment and the point
	 * @example
	 * const vec = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * console.log(vec.DistanceSegmentSqr(vec2));
	 */
	public DistanceSegmentSqr(
		segmentStart: Vector2,
		segmentEnd: Vector2,
		onlyIfOnSegment?: boolean
	): number
	/**
	 * @description Calculate the distance between two points in a 2D space.
	 *
	 * @param {Vector2} segmentStart - the starting point of the segment
	 * @param {Vector2} segmentEnd - the ending point of the segment
	 * @param {boolean} onlyIfOnSegment - optional flag to check if the distance is only calculated if the point is on the segment (default: false)
	 * @return {number} the distance between the segmentStart and segmentEnd points
	 * @example
	 * const vec = new Vector2(1, 2);
	 * const vec2 = new Vector2(4, 5);
	 * console.log(vec.DistanceSegment(vec2));
	 */
	public DistanceSegment(
		segmentStart: Vector2,
		segmentEnd: Vector2,
		onlyIfOnSegment?: boolean
	): number
	/**
	 * @description Rotates the vector by the given angle.
	 *
	 * @param {number} angle - the angle by which the vector should be rotated
	 * @return {Vector2} the rotated vector
	 * @example
	 * const vec = new Vector2(1, 2).Rotated(0.5);
	 * console.log(vec); // Vector2(-0.08126851531803325, 2.2345906623849485)
	 */
	public Rotated(angle: number): Vector2
	/**
	 * @description A function that returns a perpendicular vector.
	 *
	 * @param {boolean} isX - determines if the vector is perpendicular to the x-axis (default is true)
	 * @return {Vector2}
	 * @example
	 * const vec = new Vector2(1, 2).Perpendicular();
	 * console.log(vec); // Vector2(-2, 1)
	 */
	public Perpendicular(isX?: boolean): Vector2
	/**
	 * @description Extends vector in the rotation direction by the distance.
	 *
	 * @param {Vector2} rotation - The vector representing the rotation. For ex. Entity#Forward
	 * @param {number} distance - The distance to apply along the rotation vector.
	 * @return {Vector2}
	 * @example
	 * const vec = new Vector2(1, 2).Rotation(new Vector2(1, 0), 1);
	 * console.log(vec); // Vector2(2, 2)
	 */
	public Rotation(rotation: Vector2, distance: number): Vector2
	/**
	 * @description Extends vector in the rotation direction by radian
	 *
	 * @param {Vector2} rotation - the rotation vector in degrees. For ex. Entity#Forward
	 * @param {number} distance - the distance for the rotation
	 * @return {Vector2}
	 * @example
	 * const vec = new Vector2(1, 2).RotationRad(new Vector2(1, 0, 0), 1);
	 * console.log(vec); // Vector2(1.0174532925199433, 2)
	 */
	public RotationRad(rotation: Vector2, distance: number): Vector2
	/**
	 * @description Extends vector in the rotation direction by angle
	 *
	 * @param angle for ex. Entity#RotationRad
	 * @param distance distance to be added
	 * @return {Vector2}
	 * @example
	 * const vec = new Vector2(1, 2).InFrontFromAngle(1, 1);
	 * console.log(vec); // Vector2(1.5403023058681398, 2.8414709848078967)
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector2
	/**
	 * @description Get the direction to the target vector the normalized direction vector to the target
	 *
	 * @param {Vector2} target - the target vector to calculate direction to
	 * @return {Vector2}
	 * @example
	 * const vec = new Vector2(1, 2, 3).GetDirectionTo(new Vector2(4, 5));
	 * console.log(vec); // Vector2(0.7071067811865476, 0.7071067811865476)
	 */
	public GetDirectionTo(target: Vector2): Vector2
	/**
	 * @description Extends the vector by a specified distance in the direction of the given vector.
	 *
	 * @param {Vector2} vec - The vector to extend towards.
	 * @param {number} distance - The distance to extend the vector.
	 * @return {Vector2}
	 * @example
	 * const vec = new Vector2(1, 2).Extend(new Vector2(4, 5), 1);
	 * console.log(vec); // Vector2(1.7071067811865475, 2.7071067811865475)
	 */
	public Extend(vec: Vector2, distance: number): Vector2
	/**
	 * @description Find the closest vector in the given array.
	 *
	 * @param {Array<Vector2>} vecs - array of Vector3 objects
	 * @return {Vector2} the closest vector
	 * @example
	 * const vec = new Vector2(1, 2).Closest([new Vector2(4, 5), new Vector3(7, 8)]);
	 * console.log(vec); // Vector2(4, 5)
	 */
	public Closest(vecs: Vector2[]): Vector2
}

/**
 * @ignore
 * @internal
 */
export const CVector2 = ImportSDK as unknown as typeof Vector2
