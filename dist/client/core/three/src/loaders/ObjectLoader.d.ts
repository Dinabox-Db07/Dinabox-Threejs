import { Loader } from 'three/src/loaders/Loader';
import { LoadingManager } from 'three/src/loaders/LoadingManager';
import { Object3D } from 'three/src/core/Object3D';
import { Texture } from 'three/src/textures/Texture';
import { Material } from 'three/src/materials/Material';
import { AnimationClip } from 'three/src/animation/AnimationClip';

export class ObjectLoader extends Loader {

	constructor( manager?: LoadingManager );

	load(
		url: string,
		onLoad?: <ObjectType extends Object3D>( object: ObjectType ) => void,
		onProgress?: ( event: ProgressEvent ) => void,
		onError?: ( event: Error | ErrorEvent ) => void
	): void;
	parse<T extends Object3D>( json: any, onLoad?: ( object: Object3D ) => void ): T;
	parseGeometries( json: any ): any[]; // Array of BufferGeometry or Geometry or Geometry2.
	parseMaterials( json: any, textures: Texture[] ): Material[]; // Array of Classes that inherits from Matrial.
	parseAnimations( json: any ): AnimationClip[];
	parseImages(
		json: any,
		onLoad: () => void
	): { [key: string]: HTMLImageElement };
	parseTextures( json: any, images: any ): Texture[];
	parseObject<T extends Object3D>(
		data: any,
		geometries: any[],
		materials: Material[],
		animations: AnimationClip[]
	): T;

}
