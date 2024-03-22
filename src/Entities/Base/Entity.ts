// @ts-ignore
import { Entity as ImportSDK } from "github.com/octarine-public/wrapper/index"

import type { AABB } from "../../Base/AABB"
import type { Color } from "../../Base/Color"
import type { QAngle } from "../../Base/QAngle"
import type { Vector2 } from "../../Base/Vector2"
import type { Vector3 } from "../../Base/Vector3"
import { GameActivity } from "../../Enums/GameActivity"
import { LifeState } from "../../Enums/LifeState"
import { RenderMode } from "../../Enums/RenderMode"
import { Team } from "../../Enums/Team"

export declare class Entity {
	/** @hidden */
	constructor()

	/**
	 * @description Check if the entity is valid (if entity exists)
	 *
	 * @return {boolean}
	 */
	public get IsValid(): boolean
	/**
	 * @description Determines if the entity is visible.
	 *
	 * @return {boolean}
	 */
	public get IsVisible(): boolean
	/**
	 * @description Get name of the entity
	 *
	 * @return {string}
	 */
	public get Name(): string
	/**
	 * @description Get class name of the entity
	 *
	 * @return {string}
	 */
	public get ClassName(): string
	/**
	 * @description Get the value of the CreateTime property.
	 *
	 * @return {number}
	 */
	public get CreateTime(): number
	/**
	 * @description Get the value of the Index property.
	 *
	 * @return {number}
	 */
	public get Index(): number
	/**
	 * @description Returns the handle value by combining the serial and index.
	 *
	 * @return {number}
	 */
	public get Handle(): number
	/**
	 * @description Get Team of the entity.
	 *
	 * @return {Team}
	 */
	public get Team(): Team
	/**
	 * @description Get LifeState of the entity.
	 *
	 * @return {LifeState}
	 */
	public get LifeState(): LifeState
	/**
	 * @description Get current health of the entity.
	 *
	 * @return {number}
	 */
	public get HP(): number
	/**
	 * @description Get current max health of the entity.
	 *
	 * @return {number}
	 */
	public get MaxHP(): number
	/**
	 * @description Calculates the percentage of HP remaining.
	 *
	 * @returns {number}
	 */
	public get HPPercent(): number
	/**
	 * @description Returns the HP percentage as a decimal value.
	 *
	 * @return {number}
	 */
	public get HPPercentDecimal(): number
	/**
	 * @description The total agility of the entity.
	 *
	 * @return {number}
	 */
	public get TotalAgility(): number
	/**
	 * @description The total intelligence of the entity.
	 *
	 * @return {number}
	 */
	public get TotalIntellect(): number
	/**
	 * @description The total strength of the entity.
	 *
	 * @return {number}
	 */
	public get TotalStrength(): number
	/**
	 * @description The hierarchy attach name of the entity.
	 *
	 * @return {number}
	 */
	public get HierarchyAttachName(): number
	/**
	 * @description The children of the entity.
	 *
	 * @return {Array<Entity>}
	 */
	public get Children(): Entity[]
	/**
	 * @description The delta Z of the entity.
	 *
	 * @return {number}
	 */
	public get DeltaZ(): number
	/**
	 * @description The angle between the entity's forward vector and the local player's view direction.
	 *
	 * @return {number}
	 */
	public get RotationDifference(): number
	/**
	 * @description The animation time of the entity.
	 *
	 * @return {number}
	 */
	public get AnimationTime(): number
	/**
	 * @description The visual position of the entity.
	 *
	 * @return {Vector3}
	 */
	public get VisualPosition(): Vector3
	/**
	 * @description The networked position of the entity.
	 *
	 * @return {Vector3}
	 */
	public get NetworkedPosition(): Vector3
	/**
	 * @description The visual angles of the entity.
	 *
	 * @return {QAngle}
	 */
	public get VisualAngles(): QAngle
	/**
	 * @description The networked angles of the entity.
	 *
	 * @return {QAngle}
	 */
	public get NetworkedAngles(): QAngle
	/**
	 * @description The spawn position of the entity.
	 *
	 * @return {Vector3}
	 */
	public get SpawnPosition(): Vector3
	/**
	 * @description The bounding box of the entity.
	 *
	 * @return {AABB}
	 */
	public get BoundingBox(): AABB
	/**
	 * @description The animations of the entity.
	 *
	 * @return {Array<AnimationData>}
	 */
	public get Animations(): AnimationData[]
	/**
	 * @description The attachments of the entity.
	 *
	 * @return {Array<string>}
	 */
	public get Attachments(): string[]
	/**
	 * @description The owner entity of the entity.
	 *
	 * @return {Nullable<Entity>}
	 */
	public get OwnerEntity(): Nullable<Entity>
	/**
	 * @description The parent entity of the entity.
	 *
	 * @return {Nullable<Entity>}
	 */
	public get ParentEntity(): Nullable<Entity>
	/**
	 * @description The ring radius of the entity.
	 *
	 * @return {number}
	 */
	public get RingRadius(): number
	/**
	 * @description Check if the entity is a shop.
	 *
	 * @return {boolean}
	 */
	public get IsShop(): boolean
	/**
	 * @description Check if the entity is a game rules.
	 *
	 * @return {boolean}
	 */
	public get IsGameRules(): boolean
	/**
	 * @description The custom glow color of the entity.
	 *
	 * @return {Nullable<Color>}
	 */
	public get CustomGlowColor(): Nullable<Color>
	/**
	 * @description Set the custom glow color of the entity.
	 *
	 * @param {Nullable<Color>} val - The new color
	 */
	public set CustomGlowColor(val: Nullable<Color>)
	/**
	 * @description The custom draw color of the entity.
	 *
	 * @return {Nullable<[Color, RenderMode]>}
	 */
	public get CustomDrawColor(): Nullable<[Color, RenderMode]>
	/**
	 * @description Set the custom draw color of the entity.
	 *
	 * @param {Nullable<[Color, RenderMode]>} val - The new color
	 */
	public set CustomDrawColor(val: Nullable<[Color, RenderMode]>)
	/**
	 * @description Get the owner entity of the entity.
	 *
	 * @return {Nullable<Entity>}
	 */
	public get Owner(): Nullable<Entity>
	/**
	 * @description Get the root owner entity of the entity.
	 *
	 * @return {Nullable<Entity>}
	 */
	public get RootOwner(): Nullable<Entity>
	/**
	 * @description Get the position of the entity.
	 *
	 * @return {Vector3}
	 */
	public get Position(): Vector3
	/**
	 * @description Get the real position of the entity.
	 *
	 * @return {Vector3}
	 */
	public get RealPosition(): Vector3
	/**
	 * @description Get the angles of the entity.
	 *
	 * @return {QAngle}
	 */
	public get Angles(): QAngle
	/**
	 * @description Get the networked rotation of the entity.
	 *
	 * @return {number}
	 */
	public get NetworkedRotation(): number
	/**
	 * @description Get the networked rotation in radians of the entity.
	 *
	 * @return {number}
	 */
	public get NetworkedRotationRad(): number
	/**
	 * @description Get the rotation of the entity.
	 *
	 * @return {number}
	 */
	public get Rotation(): number
	/**
	 * @description Get the rotation in radians of the entity.
	 *
	 * @return {number}
	 */
	public get RotationRad(): number
	/**
	 * @description Check if the entity is alive.
	 *
	 * @return {boolean}
	 */
	public get IsAlive(): boolean
	/**
	 * @description Check if the entity is neutral.
	 *
	 * @return {boolean}
	 */
	public get IsNeutral(): boolean
	/**
	 * @description Get the speed of the entity.
	 *
	 * @return {number}
	 */
	public get Speed(): number
	/**
	 * @description Get the collision radius of the entity.
	 *
	 * @return {number}
	 */
	public get CollisionRadius(): number
	/**
	 * @description Get the collision size of the entity.
	 *
	 * @return {number}
	 */
	public get ProjectileCollisionSize(): number
	/**
	 * @description Calculate the angle between the current position and a given position.
	 *
	 * @param {Vector3 | Entity} position - The target position or entity.
	 * @param {boolean} rotationDiff - (Optional) Whether to consider the rotation difference.
	 * @param {Vector3} [currPos=this.Position] - (Optional) The current position. Defaults to the entity position.
	 * @return {number}
	 */
	public GetAngle(
		position: Vector3 | Entity,
		rotationDiff?: boolean,
		currPos?: Vector3
	): number
	/**
	 * @description Checks if the given serial number matches the current serial number.
	 *
	 * @param {number} serial - The serial number to compare with the current serial number
	 * @return {boolean}
	 */
	public SerialMatches(serial: number): boolean
	/**
	 * @description Handles the matches.
	 *
	 * @param {number} handle - the handle to be handled
	 * @return {boolean}
	 */
	public HandleMatches(handle: number): boolean
	/**
	 * @description Checks if the current entity matches the given entity.
	 *
	 * @param {Entity} ent - The entity to compare with.
	 * @return {boolean}
	 */
	public EntityMatches(ent: Entity): boolean
	/**
	 * @description Calculates the distance between the current position and the given vector or entity position.
	 *
	 * @param {Vector3 | Entity} vec - The vector or entity to calculate the distance to.
	 * @return {number}
	 */
	public Distance(vec: Vector3 | Entity): number
	/**
	 * @description Calculate the 2D distance between this Vector3 or Vector2 and the provided Vector3, Vector2, or Entity's position.
	 *
	 * @param {Vector3 | Vector2 | Entity} vec - The vector or entity position to calculate the distance to.
	 * @return {number}
	 */
	public Distance2D(vec: Vector3 | Vector2 | Entity): number
	/**
	 * @description Calculate the squared distance between this Vector3 position and the given Vector3 position or Entity's position.
	 *
	 * @param {Vector3 | Entity} vec - The Vector3 position or Entity to calculate the distance to.
	 * @return {number}
	 */
	public DistanceSqr(vec: Vector3 | Entity): number
	/**
	 * @description Calculate the squared 2D distance between the current position and the given vector or entity position.
	 *
	 * @param {Vector3 | Vector2 | Entity} vec - The vector or entity position to calculate the distance to.
	 * @return {number}
	 */
	public DistanceSqr2D(vec: Vector3 | Vector2 | Entity): number
	/**
	 * @description Calculate the angle between the current forward vector and the provided front vector.
	 *
	 * @param {Vector3} front - The front vector to calculate the angle with.
	 * @return {number}
	 */
	public AngleBetweenFaces(front: Vector3): number
	/**
	 * @description Calculates the position in front of the current position by rotating the current position
	 * around the forward vector by the given distance.
	 *
	 * @param {number} distance - The distance to move forward.
	 * @return {Vector3} The new position in front of the current position.
	 */
	public InFront(distance: number): Vector3
	/**
	 * @description Calculates the position in front of the current position by rotating the current position
	 *
	 * @param {number} angle - the angle in radians
	 * @param {number} distance - the distance from the current position
	 * @return {Vector3}
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector3
	/**
	 * @description Find the rotation angle between the current position and the provided vector.
	 * Returns the angle in radians.
	 *
	 * @param {Vector3 | Entity} vec - The vector or entity to calculate the rotation angle to.
	 * @return {number}
	 */
	public FindRotationAngle(vec: Vector3 | Entity): number
	/**
	 * @description Determines if the given entity is within the specified range.
	 *
	 * @param {Vector3 | Vector2 | Entity} ent - The entity to check the range of.
	 * @param {number} range - The range to check against.
	 * @return {boolean} Returns true if the entity is within the range, false otherwise.
	 */
	public IsInRange(ent: Vector3 | Vector2 | Entity, range: number): boolean
	/**
	 * @description Find the closest entity to the current entity.
	 *
	 * @param {Array<Entity>} ents - array of entities to compare distances
	 * @return {Entity}
	 */
	public Closest(ents: Entity[]): Entity
	/**
	 * @description A function that finds the closest group based on a callback function.
	 *
	 * @param {Array<Array<Entity>>} groups - An array of arrays of Entity objects representing groups.
	 * @param {(entity: Array<Entity>) => Vector3} callback - A callback function that takes an array of Entity objects and returns a Vector3.
	 * @return {[Array<Entity>, Vector3]}
	 * @example
	 * unit.ClosestGroup(groups, group => Vector3.GetCenterType(creeps, creep => creep.InFront(200)))
	 */
	public ClosestGroup(
		groups: Entity[][],
		callback: (entity: Entity[]) => Vector3
	): [Entity[], Vector3]
	/**
	 * @description Check if the given entity is an enemy.
	 *
	 * @param {Entity} ent - the entity to check against (default: LocalTeam)
	 * @return {boolean}
	 */
	public IsEnemy(ent?: Entity): boolean
	/**
	 * @description Get the animation ID based on the given activity, sequence number, and findBestMatch flag.
	 *
	 * @param {GameActivity} activity - The game activity (optional - default: GameActivity.ACT_DOTA_IDLE)
	 * @param {number} sequenceNum - The sequence number (optional - default: -1)
	 * @param {boolean} findBestMatch - Flag to determine if the best match should be found (default: true)
	 * @return {Nullable<number>}
	 */
	public GetAnimationID(
		activity?: GameActivity,
		sequenceNum?: number,
		findBestMatch?: boolean
	): Nullable<number>
	/**
	 * @description Get the position of the attachment with the given name. (attachment position mid-animation)
	 *
	 * @param {string} name - The name of the attachment.
	 * @param {GameActivity} [activity=GameActivity.ACT_DOTA_IDLE] - The activity of the game.
	 * @param {number} [sequenceNum=-1] - The sequence number.
	 * @param {number} [time=Infinity] - The time.
	 * @param {Vector3} [position=this.Position] - The position.
	 * @param {Vector3} [angle=this.Angles] - The angles.
	 * @param {Vector3} [scale=this.ModelScale] - The scale.
	 * @return {Vector3}
	 */
	public GetAttachmentPosition(
		name: string,
		activity?: GameActivity,
		sequenceNum?: number,
		time?: number,
		position?: Vector3,
		angle?: QAngle,
		scale?: number
	): Vector3
}

/**
 * @ignore
 * @internal
 */
export const CEntity = ImportSDK as unknown as typeof Entity
