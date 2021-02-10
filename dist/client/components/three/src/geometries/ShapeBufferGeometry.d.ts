import { Shape } from 'three/src/extras/core/Shape';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class ShapeBufferGeometry extends BufferGeometry {

	/**
	 * @default 'ShapeBufferGeometry'
	 */
	type: string;

	constructor( shapes: Shape | Shape[], curveSegments?: number );

}
