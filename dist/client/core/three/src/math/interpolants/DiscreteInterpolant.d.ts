import { Interpolant } from 'three/src/math/Interpolant';

export class DiscreteInterpolant extends Interpolant {

	constructor(
		parameterPositions: any,
		samplesValues: any,
		sampleSize: number,
		resultBuffer?: any
	);

	interpolate_( i1: number, t0: number, t: number, t1: number ): any;

}
