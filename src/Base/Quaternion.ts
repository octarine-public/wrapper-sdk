// @ts-ignore
import { Quaternion as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { Vector3 } from "./Vector3"

export declare class Quaternion {
	/**
	 * Creates a Quaternion from a given Vector3, assuming
	 * the w component is 0.
	 *
	 * @param {Vector3} vec - The vector with x, y, and z
	 *                        components.
	 * @return {Quaternion}
	 */
	public static FromQuaternion(vec: Vector3): Quaternion
	/**
	 * Creates a new Quaternion from a Vector3 and scalar.
	 *
	 * @param {Vector3} vec - The vector part of the quaternion
	 * @param {number} scalar - The scalar part of the quaternion
	 * @return {Quaternion}
	 */
	public static FromQuaternionScalar(vec: Vector3, scalar: number): Quaternion
	/**
	 * Creates a Quaternion from an axis vector and a rotation
	 * angle.
	 *
	 * @param {Vector3} axis - The axis of rotation.
	 * @param {number} angle - The rotation angle in radians.
	 * @return {Quaternion}
	 */
	public static FromAxisAngle(axis: Vector3, angle: number): Quaternion
	/**
	 * Creates a Quaternion from the yaw, pitch, and roll angles.
	 *
	 * @param {number} yaw - Rotation around the y-axis in radians
	 * @param {number} pitch - Rotation around the x-axis in radians
	 * @param {number} roll - Rotation around the z-axis in radians
	 * @return {Quaternion} A new Quaternion representing the
	 *                      specified yaw, pitch, and roll.
	 */
	public static FromYawPitchRoll(yaw: number, pitch: number, roll: number): Quaternion

	/**
	 * Quaternion constructor for representing rotations.
	 * @param x The x component. Default is 0.
	 * @param y The y component. Default is 0.
	 * @param z The z component. Default is 0.
	 * @param w The w component (real part). Default is 1.
	 */
	constructor(x?: number, y?: number, z?: number, w?: number)

	/**
	 * Calculates the squared length of a vector.
	 *
	 * @return {number}
	 */
	public get LengthSqr(): number
	/**
	 * Calculates the length of a vector from its squared length.
	 * @description  The square root of the vector's squared length.
	 * @return {number}
	 */
	public get Length(): number
	/**
	 * Computes the conjugate of this quaternion.
	 * @description A new quaternion that is the conjugate of the current instance.
	 * @return {Quaternion}
	 */
	public Conjugate(): Quaternion
	/**
	 *  The inverted quaternion.
	 *
	 * @description Inverts this quaternion by conjugating it and then dividing
	 * 				by the square of its length.
	 * @return {Quaternion}
	 */
	public Invert(): Quaternion
	/**
	 * Conjugates the quaternion by inverting the x, y,
	 * and z components. The conjugate of a quaternion
	 * represents the same rotation in the opposite
	 * direction.
	 *
	 * @return {Quaternion}
	 */
	public ConjugateForThis(): Quaternion
	/**
	 * Normalizes the Quaternion, optionally scaling it.
	 *
	 * @param {number} scalar - Scalar to multiply the Quaternion by
	 *                          after normalization. Default is 1.
	 * @description  A new normalized Quaternion if the length
	 *                      is not zero, otherwise returns itself.
	 * @return {Quaternion}
	 */
	public Normalize(scalar?: number): Quaternion
	/**
	 * Checks if this Quaternion is equal to another.
	 *
	 * @param {Quaternion} quat - The other quaternion to compare.
	 * @return {boolean}
	 */
	public Equals(quat: Quaternion): boolean
	/**
	 * Concatenates this Quaternion with another by
	 * performing component-wise multiplication and
	 * adding the cross products of both quaternions.
	 * The scalar parts are combined separately.
	 *
	 * @param {Quaternion} quat - The Quaternion to concatenate with this one.
	 * @return {Quaternion}
	 */
	public Concatenate(quat: Quaternion): Quaternion
	/**
	 * Calculates the dot product of two quaternions.
	 *
	 * @param {Quaternion} quat - The other quaternion to dot with.
	 * @return {number}
	 */
	public Dot(quat: Quaternion): number
	/**
	 * Adds the given quaternion to the current quaternion.
	 *
	 * @param {Quaternion} quat - The quaternion to add.
	 * @return {Quaternion}
	 */
	public Add(quat: Quaternion): Quaternion
	/**
	 * Adds the provided quaternion to the current instance,
	 * modifying its components.
	 *
	 * @param {Quaternion} quat - The quaternion to add to this one.
	 * @return {Quaternion}
	 */
	public AddForThis(quat: Quaternion): Quaternion
	/**
	 * Adds a scalar value to each component of the quaternion.
	 *
	 * @param {number} scalar - The scalar value to add to the quaternion.
	 * @return {Quaternion}
	 */
	public AddScalar(scalar: number): Quaternion
	/**
	 * Adds a scalar value to each component of the quaternion.
	 *
	 * @param {number} scalar - The scalar value to add.
	 * @return {Quaternion}
	 */
	public AddScalarForThis(scalar: number): Quaternion
	/**
	 * Subtracts the given quaternion from the current instance.
	 *
	 * @param {Quaternion} quat - The quaternion to subtract.
	 * @return {Quaternion}
	 */
	public Substract(quat: Quaternion): Quaternion
	/**
	 * Subtracts a scalar value from each component of the quaternion.
	 *
	 * @param {number} scalar - The scalar value to subtract.
	 * @return {Quaternion}
	 */
	public SubstractScalar(scalar: number): Quaternion
	/**
	 * Subtracts the given quaternion from the current
	 * instance component-wise and returns the updated
	 * instance.
	 *
	 * @param {Quaternion} quat - The quaternion to be
	 * subtracted from the current instance.
	 * @return {Quaternion}
	 */
	public SubstractForThis(quat: Quaternion): Quaternion
	/**
	 * Subtracts the provided scalar from each component
	 * of this quaternion and returns the modified
	 * quaternion.
	 *
	 * @param {number} scalar - The scalar to subtract.
	 * @return {Quaternion}
	 */
	public SubstractScalarForThis(scalar: number): Quaternion
	/**
	 * Multiplies this Quaternion by another, returning a new Quaternion.
	 *
	 * @param {Quaternion} quat - The Quaternion to multiply with.
	 * @return {Quaternion}
	 */
	public Multiply(quat: Quaternion): Quaternion
	/**
	 * Multiplies each component of the quaternion by a scalar.
	 *
	 * @param {number} scalar - The scalar to multiply with.
	 * @return {Quaternion}
	 */
	public MultiplyScalar(scalar: number): Quaternion
	/**
	 * Multiplies each component of the quaternion by a scalar.
	 *
	 * @param {number} scalar - The scalar value to multiply.
	 * @return {Quaternion}
	 */
	public MultiplyScalarForThis(scalar: number): Quaternion
	/**
	 * Calculates the cross product of this quaternion with another.
	 *
	 * @param {Quaternion} quat - The other quaternion to cross with
	 * @return {Quaternion}
	 */
	public Cross(quat: Quaternion): Quaternion
	/**
	 * Multiplies the current Quaternion instance by another,
	 * updating the instance with the result.
	 *
	 * @param {Quaternion} quat - The Quaternion to multiply with.
	 * @return {Quaternion}
	 */
	public MultiplyForThis(quat: Quaternion): Quaternion
	/**
	 * Divides this Quaternion by another by multiplying
	 * with the inverse of the provided Quaternion.
	 *
	 * @param {Quaternion} quat - The quaternion to divide by
	 * @return {Quaternion}
	 */
	public Divide(quat: Quaternion): Quaternion
	/**
	 * Divides each component of the quaternion by a scalar.
	 *
	 * @param {number} scalar - The scalar to divide by.
	 * @return {Quaternion}
	 */
	public DivideScalar(scalar: number): Quaternion
	/**
	 * Divides each component of this quaternion by
	 * the given scalar and returns the modified
	 * quaternion.
	 *
	 * @param {number} scalar - The number to divide by
	 * @return {Quaternion}
	 */
	public DivideScalarForThis(scalar: number): Quaternion
	/**
	 * Interpolates between the current quaternion and another
	 * quaternion by the given amount using linear interpolation.
	 *
	 * @param {Quaternion} quat - The target quaternion to interpolate
	 *                            towards.
	 * @param {number} amount - The interpolation factor between 0 and 1.
	 * @return {Quaternion}
	 */
	public Lerp(quat: Quaternion, amount: number): Quaternion
	/**
	 * Performs spherical linear interpolation between
	 * this quaternion and another quaternion by the
	 * given amount.
	 *
	 * @param {Quaternion} quat - The target quaternion.
	 * @param {number} amount - The interpolation factor.
	 * @return {Quaternion}
	 */
	public Slerp(quat: Quaternion, amount: number): Quaternion
	/**
	 * Creates a new Quaternion object with the same x, y,
	 * z, and w values as the current instance.
	 *
	 * @return {Quaternion}
	 */
	public Clone(): Quaternion
	/**
	 * Copies the values from the current Quaternion into
	 * another.
	 *
	 * @description The quaternion with copied values.
	 * @param {Quaternion} quat - The target quaternion to copy
	 * values into.
	 * @return {Quaternion}
	 */
	public CopyTo(quat: Quaternion): Quaternion
	/**
	 * Copies the values from the given quaternion to this quaternion.
	 *
	 * @description This instance with updated values.
	 * @param {Quaternion} quat - The quaternion to copy from.
	 * @return {Quaternion}
	 */
	public CopyFrom(quat: Quaternion): Quaternion
}

/**
 * @ignore
 * @internal
 */
export const CQuaternion = ImportSDK as unknown as typeof Quaternion
