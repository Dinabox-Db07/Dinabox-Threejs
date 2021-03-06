import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { WebGLProgram } from 'three/src/renderers/webgl/WebGLProgram';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';
import { WebGLCubeMaps } from 'three/src/renderers/webgl/WebGLCubeMaps';
import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions';
import { WebGLClipping } from 'three/src/renderers/webgl/WebGLClipping';
import { WebGLBindingStates } from 'three/src/renderers/webgl/WebGLBindingStates';
import { Material } from 'three/src/materials/Material';
import { Scene } from 'three/src/scenes/Scene';

export class WebGLPrograms {

	constructor( renderer: WebGLRenderer, cubemaps: WebGLCubeMaps, extensions: WebGLExtensions, capabilities: WebGLCapabilities, bindingStates: WebGLBindingStates, clipping: WebGLClipping );

	programs: WebGLProgram[];

	getParameters(
		material: Material,
		lights: any,
		shadows: object[],
		scene: Scene,
		object: any
	): any;
	getProgramCacheKey( parameters: any ): string;
	getUniforms( material: Material ): object;
	acquireProgram(
		parameters: any,
		cacheKey: string
	): WebGLProgram;
	releaseProgram( program: WebGLProgram ): void;

}
