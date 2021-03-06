import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';

export class ImageBitmapLoader extends Loader {

	constructor( manager?: LoadingManager );

	/**
	 * @default { premultiplyAlpha: 'none' }
	 */
	options: undefined | object;

	readonly isImageBitmapLoader: true;

	setOptions( options: object ): ImageBitmapLoader;
	load(
		url: string,
		onLoad?: ( response: ImageBitmap ) => void,
		onProgress?: ( request: ProgressEvent ) => void,
		onError?: ( event: ErrorEvent ) => void
	): any;

}
