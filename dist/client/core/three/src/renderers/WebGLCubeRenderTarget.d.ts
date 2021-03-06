import { WebGLRenderTargetOptions, WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { Texture } from 'three/src/textures/Texture';
import { CubeTexture } from 'three/src/textures/CubeTexture';

export class WebGLCubeRenderTarget extends WebGLRenderTarget {

	constructor(
		size: number,
		options?: WebGLRenderTargetOptions
	);

	texture: CubeTexture;

	fromEquirectangularTexture( renderer: WebGLRenderer, texture: Texture ): this;

	clear( renderer: WebGLRenderer, color: boolean, depth: boolean, stencil: boolean ): void;

}
