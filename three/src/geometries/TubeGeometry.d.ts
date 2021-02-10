import { Curve } from 'three/src/extras/core/Curve';
import { Vector3 } from 'three/src/math/Vector3';
import { Geometry } from 'three/src/core/Geometry';

export class TubeGeometry extends Geometry {

	/**
	 * @param path
	 * @param [tubularSegments=64]
	 * @param [radius=1]
	 * @param [radiusSegments=8]
	 * @param [closed=false]
	 */
	constructor(
		path: Curve<Vector3>,
		tubularSegments?: number,
		radius?: number,
		radiusSegments?: number,
		closed?: boolean
	);

	parameters: {
		path: Curve<Vector3>;
		tubularSegments: number;
		radius: number;
		radialSegments: number;
		closed: boolean;
	};
	tangents: Vector3[];
	normals: Vector3[];
	binormals: Vector3[];

}
