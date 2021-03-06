import { Geometry } from 'three/src/core/Geometry';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class WireframeGeometry extends BufferGeometry {

	constructor( geometry: Geometry | BufferGeometry );

	/**
	 * @default 'WireframeGeometry'
	 */
	type: string;

}
