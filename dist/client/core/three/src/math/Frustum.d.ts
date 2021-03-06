import { Plane } from 'three/src/math/Plane';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Object3D } from 'three/src/core/Object3D';
import { Sprite } from 'three/src/objects/Sprite';
import { Sphere } from 'three/src/math/Sphere';
import { Box3 } from 'three/src/math/Box3';
import { Vector3 } from 'three/src/math/Vector3';

/**
 * Frustums are used to determine what is inside the camera's field of view. They help speed up the rendering process.
 */
export class Frustum {

	constructor(
		p0?: Plane,
		p1?: Plane,
		p2?: Plane,
		p3?: Plane,
		p4?: Plane,
		p5?: Plane
	);

	/**
	 * Array of 6 vectors.
	 */
	planes: Plane[];

	set(
		p0: Plane,
		p1: Plane,
		p2: Plane,
		p3: Plane,
		p4: Plane,
		p5: Plane
	): Frustum;
	clone(): this;
	copy( frustum: Frustum ): this;
	setFromProjectionMatrix( m: Matrix4 ): this;
	intersectsObject( object: Object3D ): boolean;
	intersectsSprite( sprite: Sprite ): boolean;
	intersectsSphere( sphere: Sphere ): boolean;
	intersectsBox( box: Box3 ): boolean;
	containsPoint( point: Vector3 ): boolean;

}
