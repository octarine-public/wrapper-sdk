// @ts-ignore
import { Vector4 as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Quaternion } from "./Quaternion"
import type { Vector3 } from "./Vector3"

export declare class Vector4 {
	/**
	 * Creates a Vector4 object from an array-like object.
	 *
	 * @description A new Vector4 instance with components from the
	 * 	array-like object, defaulting to 0 for any undefined indices.
	 * @param {ArrayLike<number>} array - An array-like object containing
	 *     up to four numerical elements.
	 * @return {Vector4}
	 */
	public static fromArray(array: ArrayLike<number>): Vector4
	/**
	 * Converts a string of space-separated numbers into a
	 * Vector4 object.
	 *
	 * @description A new Vector4 object with the parsed float values from the string.
	 * @param {string} str - The string to convert.
	 * @return {Vector4}
	 */
	public static FromString(str: string): Vector4
	/**
	 * Creates a Vector4 from a Vector3 with a w value of 0.
	 *
	 * @description A new Vector4 with the w value set to 0
	 * @param {Vector3} vec - The Vector3 to convert
	 * @return {Vector4}
	 */
	public static FromVector3(vec: Vector3): Vector4
	/**
	 * Initializes a new instance of a 4D point.
	 *
	 * @param {number} x - The x coordinate. Default is 0.
	 * @param {number} y - The y coordinate. Default is 0.
	 * @param {number} z - The z coordinate. Default is 0.
	 * @param {number} w - The w coordinate. Default is 0.
	 */
	constructor(x?: number, y?: number, z?: number, w?: number)

	/**
	 * Checks if the current value is both not NaN and finite.
	 *
	 * @return {boolean}
	 */
	public get IsValid(): boolean
	/**
	 * Checks if the vector components are finite numbers.
	 *
	 * @return {boolean}
	 */
	public get IsFinite(): boolean
	/**
	 * Checks if the vector components are within a tolerance of zero.
	 *
	 * @param {number} [tolerance=0.01] - The threshold to consider as zero.
	 * @return {boolean}
	 */
	public IsZero(tolerance?: number): boolean
	/**
	 * Resets the components of the vector to zero.
	 *
	 * @return {Vector4}
	 */
	public toZero(): Vector4
	/**
	 * Invalidates the components of the vector by setting
	 * each to NaN and returns the modified vector.
	 *
	 * @description The current instance with all components set to NaN.
	 * @return {Vector4}
	 */
	public Invalidate(): Vector4
	/**
	 * Negates the vector components.
	 *
	 * @description The current instance with negated components.
	 * @return {Vector4}
	 */
	public Negate(): Vector4
	/**
	 * Calculates the squared length of a 4D vector.
	 * @description The sum of the squares of the vector's components.
	 * @return {number}
	 */
	public get LengthSqr(): number
	/**
	 * Calculates the length of a vector from its squared
	 * length property.
	 * @description The square root of the vector's squared length.
	 * @return {number}
	 */
	public get Length(): number
	/**
	 * @description Checks if the current vector is equal to the given vector.
	 *
	 * @param {Vector4} vec - The vector to compare with.
	 * @return {boolean}
	 */
	public Equals(vec: Vector4): boolean
	/**
	 * Returns a new Vector4 with the smallest values from the
	 * current vector and the input, which can be a number or
	 * another Vector4.
	 *
	 * @description A new vector with the minimum components.
	 *
	 * @param {Vector4 | number} vec - The second vector to
	 * compare to, or a number to compare each component against.
	 * @return {Vector4}
	 */
	public Min(vec: Vector4 | number): Vector4
	/**
	 * Creates a new Vector4 where each component is the maximum value
	 * of the corresponding components of the current instance and the
	 * input vector or number.
	 *
	 * @description  A new Vector4 instance with the maximum values.
	 * @param {Vector4 | number} vec - A Vector4 instance or a number to
	 *                                 compare with the current instance's
	 *                                 components.
	 * @return {Vector4}
	 */
	public Max(vec: Vector4 | number): Vector4
	/**
	 * Clamps the vector components to the specified
	 * min and max values.
	 *
	 * @param {Vector4 | number} min - The lower bounds to
	 *                                 clamp to, or the value to
	 *                                 clamp each component if
	 *                                 a number is provided.
	 * @param {Vector4 | number} max - The upper bounds to
	 *                                 clamp to, or the value to
	 *                                 clamp each component if
	 *                                 a number is provided.
	 * @return {Vector4}
	 */
	public Clamp(min: Vector4 | number, max: Vector4 | number): Vector4
	/**
	 * Calculates the square root of each component of the
	 * vector and returns a new Vector4 instance with the
	 * results.
	 *
	 * @return {Vector4}
	 */
	public SquareRoot(): Vector4
	/**
	 * Returns a new Vector4 instance with the absolute
	 * values of the current vector's components.
	 *
	 * @return {Vector4}
	 */
	public Abs(): Vector4
	/**
	 * Rounds up the components of the vector to the nearest
	 * integer, optionally at a specified decimal place.
	 *
	 * @description A new Vector4 instance with the rounded values.
	 * @param {number} count - The number of decimal places to round up to. Default is 0.
	 * @return {Vector4}
	 */
	public Ceil(count?: number): Vector4
	/**
	 * Rounds up the components of the vector to the nearest
	 * integer, optionally at a specified decimal precision.
	 *
	 * @param {number} count - The number of decimal places to
	 * preserve. Defaults to 0, rounding to the nearest whole
	 * number.
	 * @return {Vector4}
	 */
	public CeilForThis(count?: number): Vector4
	/**
	 * Rounds the components of the vector to a specified
	 * number of decimal places.
	 *
	 * @param {number} count - The number of decimal places
	 * to round to. Default is 0.
	 * @return {Vector4}
	 */
	public Round(count?: number): Vector4
	/**
	 * Rounds the components of the vector to a specified
	 * number of decimal places.
	 *
	 * @description The vector with its components rounded to the specified number of decimal places.
	 * @param {number} count - The number of decimal places to round
	 *                         to. Default is 0.
	 * @return {Vector4}
	 */
	public RoundForThis(count?: number): Vector4
	/**
	 * Rounds down the components of the vector to the nearest
	 * integer less than or equal to them, at a specific decimal
	 * place defined by count.
	 *
	 * @description  A new Vector4 instance with each component
	 * rounded down to the nearest value at the specified precision.
	 * @param {number} count - The number of decimal places to round (default is 0).
	 * to. Defaults to 0, which means rounding to an integer.
	 * @return {Vector4}
	 */
	public Floor(count?: number): Vector4
	/**
	 * Floors the components of the vector to a specified
	 * number of decimal places.
	 *
	 * @description The vector with its components floored.
	 * @param {number} count - The number of decimal places to floor
	 *                         to. Defaults to 0 if not provided.
	 * @return {Vector4}
	 */
	public FloorForThis(count?: number): Vector4
	/**
	 * Adds the components of the provided vector to the
	 * components of the current vector and returns the
	 * result as a new Vector4 instance.
	 *
	 * @description A new vector resulting from the component-wise addition
	 * @param {Vector4} vec - The vector to add to the current vector
	 * @return {Vector4}
	 */
	public Add(vec: Vector4): Vector4
	/**
	 * Adds the components of the given vector to this vector.
	 *
	 * @param {Vector4} vec - The vector to be added to this one.
	 * @return {Vector4} This vector after addition.
	 */
	public AddForThis(vec: Vector4): Vector4
	/**
	 * Adds a scalar value to each component of a 4D vector.
	 *
	 * @description A new Vector4 instance with the result.
	 * @param {number} scalar - The scalar value to add.
	 * @return {Vector4}
	 */
	public AddScalar(scalar: number): Vector4
	/**
	 * Adds a scalar value to each component of the vector.
	 *
	 * @param {number} scalar - The scalar to add to x, y, z, w.
	 * @return {Vector4}
	 */
	public AddScalarForThis(scalar: number): Vector4
	/**
	 * Subtracts the provided Vector4 from this vector.
	 *
	 * @description A new vector representing the difference.
	 * @param {Vector4} vec - The vector to subtract.
	 * @return {Vector4}
	 */
	public Subtract(vec: Vector4): Vector4
	/**
	 * Subtracts the components of the provided vector from
	 * the components of the `this` vector.
	 *
	 * @param {Vector4} vec - The vector to subtract from `this`.
	 * @return {Vector4}
	 */
	public SubtractForThis(vec: Vector4): Vector4
	/**
	 * Subtracts the given scalar from each component of the vector.
	 *
	 * @description  A new vector with the scalar subtracted from each component.
	 * @param {number} scalar - The scalar to subtract from each vector component.
	 * @return {Vector4}
	 */
	public SubtractScalar(scalar: number): Vector4
	/**
	 * Subtracts a scalar value from each component of the vector.
	 *
	 * @param {number} scalar - The scalar value to subtract.
	 * @return {Vector4}
	 */
	public SubtractScalarForThis(scalar: number): Vector4
	/**
	 * Multiplies the components of this vector by another
	 * Vector4's components.
	 *
	 * @param {Vector4} vec - The vector to multiply with.
	 * @return {Vector4}
	 */
	public Multiply(vec: Vector4): Vector4
	/**
	 * Multiplies the properties of the current Vector4
	 * instance by the corresponding properties of
	 * the provided Vector4.
	 *
	 * @param {Vector4} vec - The Vector4 to multiply with.
	 * @return {Vector4}
	 */
	public MultiplyForThis(vec: Vector4): Vector4
	/**
	 * Multiplies each component of the vector by a scalar.
	 *
	 * @param {number} scalar - The number to multiply with.
	 * @return {Vector4}
	 */
	public MultiplyScalar(scalar: number): Vector4
	/**
	 * Multiplies each component of the vector by a scalar.
	 *
	 * @param {number} scalar - The number to multiply by.
	 * @return {Vector4}
	 */
	public MultiplyScalarForThis(scalar: number): Vector4
	/**
	 * Divides the components of the current vector by
	 * the corresponding components of the provided vector.
	 *
	 * @param {Vector4} vec - The vector to divide by
	 * @return {Vector4}
	 */
	public Divide(vec: Vector4): Vector4
	/**
	 * Divides the components of the current Vector4 by the
	 * components of the provided Vector4.
	 *
	 * @param {Vector4} vec - The Vector4 by which to divide.
	 * @return {Vector4}
	 */
	public DivideForThis(vec: Vector4): Vector4
	/**
	 * Divides each component of the vector by a scalar.
	 *
	 * @param {number} scalar - The number to divide by.
	 * @return {Vector4}
	 */
	public DivideScalar(scalar: number): Vector4
	/**
	 * Divides each component of the vector by a scalar.
	 *
	 * @param {number} scalar - The number to divide by.
	 * @return {Vector4}
	 */
	public DivideScalarForThis(scalar: number): Vector4
	/**
	 * Linearly interpolates between this vector and a
	 * target vector by a given scalar amount.
	 *
	 * @param {Vector4} target - The target vector to interpolate towards.
	 * @param {number} amount - The interpolation factor between 0 and 1.
	 * @return {Vector4}
	 */
	public Lerp(target: Vector4, amount: number): Vector4
	/**
	 * Interpolates between the current vector and the
	 * provided vector by a given scalar amount.
	 *
	 * @param {Vector4} vec - The vector to interpolate towards.
	 * @param {number} amount - The ratio of interpolation.
	 * @return {Vector4}
	 */
	public LerpForThis(vec: Vector4, amount: number): Vector4
	/**
	 * Interpolates between the vector and the target
	 * vector using a smoothstep easing function.
	 *
	 * @param {Vector4} vec - The target vector for
	 *                        interpolation.
	 * @param {number} amount - The interpolation
	 *                          factor between 0 and 1.
	 * @return {Vector4}
	 */
	public SmoothStep(vec: Vector4, amount: number): Vector4
	/**
	 * Interpolates between this vector and the provided vector using
	 * a smooth step function based on the given amount.
	 *
	 * @param {Vector4} vec - The target vector to interpolate towards.
	 * @param {number} amount - The interpolation coefficient (0-1).
	 * @return {Vector4}
	 */
	public SmoothStepForThis(vec: Vector4, amount: number): Vector4
	/**
	 * Calculates the interpolated value at the given fraction
	 * of the way between two values, using Hermite spline
	 * interpolation. The tension and bias of the spline are
	 * defined by the tangents provided.
	 *
	 * @param {Vector4} tan1 - The tangent of the first value
	 * @param {Vector4} val2 - The second value to interpolate
	 * @param {Vector4} tan2 - The tangent of the second value
	 * @param {number} amt - The weight of the second value
	 * @return {Vector4}
	 */
	public Hermite(tan1: Vector4, val2: Vector4, tan2: Vector4, amt: number): Vector4
	/**
	 * Calculates the barycentric coordinates by interpolating
	 * two vectors with given weights and then adding them.
	 *
	 * @param {Vector4} v2 - The second vector for interpolation
	 * @param {Vector4} v3 - The third vector for interpolation
	 * @param {number} a1 - The weight for the second vector
	 * @param {number} a2 - The weight for the third vector
	 * @return {Vector4}
	 */
	public Barycentric(v2: Vector4, v3: Vector4, a1: number, a2: number): Vector4
	/**
	 * Transforms the vector by a given rotation.
	 *
	 * @description The rotated vector with original w component
	 * @param {Quaternion} rotation - The rotation to apply to the vector
	 * @return {Vector4}
	 */
	public Transform(rotation: Quaternion): Vector4
	/**
	 * Copies the values from a given Vector4 into this vector.
	 *
	 * @param {Vector4} vec - The source vector to copy from.
	 * @return {Vector4}
	 */
	public CopyFrom(vec: Vector4): Vector4
	/**
	 * Copies the values from the given Vector4 into this vector.
	 *
	 * @param {Vector4} vec - The source vector to copy from.
	 * @return {Vector4}
	 */
	public CopyTo(vec: Vector4): Vector4
	/**
	 * Converts the vector properties to an array.
	 *
	 * @description An array of the vector's x, y, z, and w values.
	 * @return {Array<number>}
	 */
	public toArray(): [number, number, number, number]

	public Clone(): Vector4
}

/**
 * @ignore
 * @internal
 */
export const CVector4 = ImportSDK as unknown as typeof Vector4
