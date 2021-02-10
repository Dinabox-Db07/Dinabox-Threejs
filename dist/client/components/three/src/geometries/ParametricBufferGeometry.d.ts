import { Vector3 } from 'three/src/math/Vector3';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class ParametricBufferGeometry extends BufferGeometry {

	constructor(
		func: ( u: number, v: number, dest: Vector3 ) => void,
		slices: number,
		stacks: number
	);

	/**
	 * @default 'ParametricBufferGeometry'
	 */
	type: string;

	parameters: {
		func: ( u: number, v: number, dest: Vector3 ) => void;
		slices: number;
		stacks: number;
	};

}
