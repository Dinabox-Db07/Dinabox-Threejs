import { WebGLRenderer, WebGLRendererParameters } from 'three/src/renderers/WebGLRenderer';

export class WebGL1Renderer extends WebGLRenderer {

	constructor( parameters?: WebGLRendererParameters );
	readonly isWebGL1Renderer: true;

}
