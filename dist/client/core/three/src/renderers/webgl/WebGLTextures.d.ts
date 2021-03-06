import { WebGLExtensions } from 'three/src/renderers/webgl/WebGLExtensions';
import { WebGLState } from 'three/src/renderers/webgl/WebGLState';
import { WebGLProperties } from 'three/src/renderers/webgl/WebGLProperties';
import { WebGLCapabilities } from 'three/src/renderers/webgl/WebGLCapabilities';
import { WebGLUtils } from 'three/src/renderers/webgl/WebGLUtils';
import { WebGLInfo } from 'three/src/renderers/webgl/WebGLInfo';

export class WebGLTextures {

	constructor(
		gl: WebGLRenderingContext,
		extensions: WebGLExtensions,
		state: WebGLState,
		properties: WebGLProperties,
		capabilities: WebGLCapabilities,
		utils: WebGLUtils,
		info: WebGLInfo
	);

	allocateTextureUnit(): void;
	resetTextureUnits(): void;
	setTexture2D( texture: any, slot: number ): void;
	setTexture2DArray( texture: any, slot: number ): void;
	setTexture3D( texture: any, slot: number ): void;
	setTextureCube( texture: any, slot: number ): void;
	setupRenderTarget( renderTarget: any ): void;
	updateRenderTargetMipmap( renderTarget: any ): void;
	updateMultisampleRenderTarget( renderTarget: any ): void;
	safeSetTexture2D( texture: any, slot: number ): void;
	safeSetTextureCube( texture: any, slot: number ): void;

}
