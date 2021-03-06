import { Line } from 'three/src/objects/Line';
import { Geometry } from 'three/src/core/Geometry';
import { Material } from 'three/src/materials/Material';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

export class LineLoop <
	TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
	TMaterial extends Material | Material[] = Material | Material[]
> extends Line<TGeometry, TMaterial> {

	constructor(
		geometry?: TGeometry,
		material?: TMaterial
	);

	type: 'LineLoop';
	readonly isLineLoop: true;

}
