import { Geometry } from 'three/src/core/Geometry';
import { Material } from 'three/src/materials/Material';
import { Line } from 'three/src/objects/Line';
import { BufferGeometry } from 'three/src/core/BufferGeometry';

/**
 * @deprecated
 */
export const LineStrip: number;
/**
 * @deprecated
 */
export const LinePieces: number;

export class LineSegments <
	TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
	TMaterial extends Material | Material[] = Material | Material[]
> extends Line<TGeometry, TMaterial> {

	constructor(
		geometry?: TGeometry,
		material?: TMaterial
	);

	/**
	 * @default 'LineSegments'
	 */
	type: 'LineSegments' | string;
	readonly isLineSegments: true;

}
