import { Vector2 } from 'three/src/math/Vector2';
import { Curve } from 'three/src/extras/core/Curve';

export class LineCurve extends Curve<Vector2> {

	constructor( v1: Vector2, v2: Vector2 );

	/**
	 * @default 'LineCurve'
	 */
	type: string;


	/**
	 * @default new THREE.Vector2()
	 */
	v1: Vector2;

	/**
	 * @default new THREE.Vector2()
	 */
	v2: Vector2;

}
