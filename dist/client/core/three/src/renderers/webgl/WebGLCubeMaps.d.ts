import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';

export class WebGLCubeMaps {

	constructor( renderer: WebGLRenderer );

	get( texture: any ): any;
	dispose(): void;

}
