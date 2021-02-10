import { Shape } from 'three/src/extras/core/Shape';
import { Geometry } from 'three/src/core/Geometry';

export class ShapeGeometry extends Geometry {

	/**
	 * @param shapes
	 * @param [curveSegments=12]
	 */
	constructor( shapes: Shape | Shape[], curveSegments?: number );

	/**
	 * @default 'ShapeGeometry'
	 */
	type: string;

	addShapeList( shapes: Shape[], options: any ): ShapeGeometry;
	addShape( shape: Shape, options?: any ): void;

}
