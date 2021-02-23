import { Texture } from 'three/src/textures/Texture';
import { TypedArray } from 'three/src/polyfills';
import { TextureFilter } from 'three/src/constants';

export class DataTexture2DArray extends Texture {

	constructor(
		data: TypedArray,
		width: number,
		height: number,
		depth: number
	);

	/**
	 * @default THREE.NearestFilter
	 */
	magFilter: TextureFilter;

	/**
	 * @default THREE.NearestFilter
	 */
	minFilter: TextureFilter;

	/**
	 * @default THREE.ClampToEdgeWrapping
	 */
	wrapR: boolean;

	/**
	 * @default false
	 */
	flipY: boolean;

	/**
	 * @default false
	 */
	generateMipmaps: boolean;

	readonly isDataTexture2DArray: true;

}
