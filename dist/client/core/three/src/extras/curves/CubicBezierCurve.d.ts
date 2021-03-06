import { Vector2 } from 'three/src/math/Vector2';
import { Curve } from 'three/src/extras/core/Curve';

export class CubicBezierCurve extends Curve<Vector2> {

	constructor( v0: Vector2, v1: Vector2, v2: Vector2, v3: Vector2 );

	/**
	 * @default 'CubicBezierCurve'
	 */
	type: string;

	/**
	 * @default new THREE.Vector2()
	 */
	v0: Vector2;

	/**
	 * @default new THREE.Vector2()
	 */
	v1: Vector2;

	/**
	 * @default new THREE.Vector2()
	 */
	v2: Vector2;

	/**
	 * @default new THREE.Vector2()
	 */
	v3: Vector2;

}
