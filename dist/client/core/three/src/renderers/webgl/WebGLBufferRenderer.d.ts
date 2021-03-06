// Renderers / WebGL /////////////////////////////////////////////////////////////////////
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';

export class WebGLBufferRenderer {

	constructor( gl: WebGLRenderingContext, extensions: WebGLExtensions, info: WebGLInfo, capabilities: WebGLCapabilities );

	setMode( value: any ): void;
	render( start: any, count: number ): void;
	renderInstances(
		start: any,
		count: number,
		primcount: number
	): void;

}
