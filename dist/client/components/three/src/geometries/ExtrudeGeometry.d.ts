import { Shape } from 'three/src/extras/core/Shape';
import { Geometry } from 'three/src/core/Geometry';
import { ExtrudeGeometryOptions } from 'three/src/geometries/ExtrudeBufferGeometry';

export class ExtrudeGeometry extends Geometry {

	constructor( shapes: Shape | Shape[], options?: ExtrudeGeometryOptions );

	/**
	 * @default 'ExtrudeGeometry'
	 */
	type: string;

	addShapeList( shapes: Shape[], options?: any ): void;
	addShape( shape: Shape, options?: any ): void;

}
