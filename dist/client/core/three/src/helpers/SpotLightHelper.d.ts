import { Light } from 'three/src/lights/Light';
import { Color } from 'three/src/math/Color';
import { Matrix4 } from 'three/src/math/Matrix4';
import { Object3D } from 'three/src/core/Object3D';
import { LineSegments } from 'three/src/objects/LineSegments';

export class SpotLightHelper extends Object3D {

	constructor( light: Light, color?: Color | string | number );

	light: Light;
	matrix: Matrix4;

	/**
	 * @default false
	 */
	matrixAutoUpdate: boolean;
	color: Color | string | number | undefined;
	cone: LineSegments;

	dispose(): void;
	update(): void;

}
