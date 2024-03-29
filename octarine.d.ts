type Constructor<T> = new (...args: any[]) => T
type Nullable<T> = T | undefined
type RecursiveMap = Map<string, RecursiveMapValue>
type RecursiveMapValue =
	| RecursiveMap
	| RecursiveMapValue[]
	| Uint8Array
	| string
	| bigint
	| number
	| boolean

declare interface BigInt {
	hasBit(bit: bigint): boolean
	hasMask(mask: bigint): boolean
	toMask: number[]
	toInt16: bigint
}

// eslint-disable-next-line id-denylist
declare interface Number {
	hasBit(bit: number): boolean
	hasMask(mask: number): boolean
	/** popcnt */
	bitCount(): number
	toMask: number[]
	toInt16: number
}

declare interface Array<T> {
	/*
	 * @description This method mutates the array and returns a reference to the same array.
	 */
	orderBy(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/**
	 * @description This method returns a copy of an array.
	 */
	toOrderBy(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/**
	 * @description This method mutates the array and returns a reference to the same array.
	 */
	orderByDescending(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/**
	 * @description This method returns a copy of an array.
	 */
	toOrderByDescending(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/**
	 * @description This method mutates the array and returns a reference to the same array. Similar to ar.orderBy(cb)[0]
	 */
	orderByFirst(callback: (obj: T) => number): Nullable<T>
	/**
	 * @description Removes the first occurrence of a specified element from the array.
	 *  Returns true if the element was successfully removed,
	 * false if the element was not found in the array.
	 */
	remove(value: T, useDelete?: boolean): boolean
	/**
	 * @description Removes elements from the array that satisfy the provided callback function.
	 * Returns true if the element was successfully removed,
	 * false if the element was not found in the array.
	 */
	removeCallback(
		callback: (value: T, index: number, obj: T[]) => boolean,
		useDelete?: boolean
	): boolean
	/**
	 * @description Returns the number of elements in the array.
	 */
	count(element: T): number
	/**
	 * @description Compares two arrays
	 */
	compare(array: T[]): boolean
	/**
	 * @description Checks if two arrays have any common elements
	 */
	contains(array: T[]): boolean
	/**
	 * @param {T[]} array - The array to exclude elements from.
	 * @return {T[]} The filtered array.
	 */
	except(array: T[]): T[]
	/**
	 * @description returns the elements that are present in both arrays
	 */
	intersect(array: T[]): T[]
	hasIntersect(array: T[]): boolean
	/**
	 * @description Removes all elements from the array.
	 */
	clear(): void
}
