import { Geometry } from 'three/src/core/Geometry';
import { Material } from 'three/src/materials/Material';
import { Raycaster } from 'three/src/core/Raycaster';
import { Object3D } from 'three/src/core/Object3D';
import { BufferGeometry } from 'three/src/core/BufferGeometry';
import { Intersection } from 'three/src/core/Raycaster';

export class Mesh <
	TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
	TMaterial extends Material | Material[] = Material | Material[]
> extends Object3D {

	constructor(
		geometry?: TGeometry,
		material?: TMaterial
	);

	geometry: TGeometry;
	material: TMaterial;
	morphTargetInfluences?: number[];
	morphTargetDictionary?: { [key: string]: number };
	readonly isMesh: true;
	type: string;

	updateMorphTargets(): void;
	raycast( raycaster: Raycaster, intersects: Intersection[] ): void;

}
