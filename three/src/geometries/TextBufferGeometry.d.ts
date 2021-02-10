import { Font } from 'three/src/extras/core/Font';
import { ExtrudeBufferGeometry } from 'three/src/geometries/ExtrudeBufferGeometry';

export interface TextGeometryParameters {
	font: Font;
	size?: number;
	height?: number;
	curveSegments?: number;
	bevelEnabled?: boolean;
	bevelThickness?: number;
	bevelSize?: number;
	bevelOffset?: number;
	bevelSegments?: number;
}

export class TextBufferGeometry extends ExtrudeBufferGeometry {

	/**
	 * @default 'TextBufferGeometry'
	 */
	type: string;

	constructor( text: string, parameters: TextGeometryParameters );

	parameters: {
		font: Font;
		size: number;
		height: number;
		curveSegments: number;
		bevelEnabled: boolean;
		bevelThickness: number;
		bevelSize: number;
		bevelOffset: number;
		bevelSegments: number;
	};

}
