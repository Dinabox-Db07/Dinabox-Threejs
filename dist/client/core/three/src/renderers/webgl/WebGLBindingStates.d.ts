import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions';
import { WebGLAttributes } from 'three/src/renderers/webgl/WebGLAttributes';
import { WebGLProgram } from 'three/src/renderers/webgl/WebGLProgram';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';
import { Object3D } from 'three/src/core/Object3D';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { BufferAttribute } from 'three/src/core/BufferAttribute';
import { Material } from 'three/src/materials/Material';

export class WebGLBindingStates {

	constructor( gl: WebGLRenderingContext, extensions: WebGLExtensions, attributes: WebGLAttributes, capabilities: WebGLCapabilities );

	setup( object: Object3D, material: Material, program: WebGLProgram, geometry: BufferGeometry, index: BufferAttribute ): void;
	reset(): void;
	resetDefaultState(): void;
	dispose(): void;
	releaseStatesOfGeometry(): void;
	releaseStatesOfProgram(): void;
	initAttributes(): void;
	enableAttribute( attribute: number ): void;
	disableUnusedAttributes(): void;

}
