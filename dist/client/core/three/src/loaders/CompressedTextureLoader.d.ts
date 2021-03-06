import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { CompressedTexture } from 'three/src/textures/CompressedTexture';

export class CompressedTextureLoader extends Loader {

	constructor( manager?: LoadingManager );

	load(
		url: string,
		onLoad: ( texture: CompressedTexture ) => void,
		onProgress?: ( event: ProgressEvent ) => void,
		onError?: ( event: ErrorEvent ) => void
	): CompressedTexture;

}
