import { KeyframeTrack } from 'three/src/animation/KeyframeTrack';
import { InterpolationModes } from 'three/src/constants';

export class QuaternionKeyframeTrack extends KeyframeTrack {

	constructor(
		name: string,
		times: any[],
		values: any[],
		interpolation?: InterpolationModes
	);

	/**
	 * @default 'quaternion'
	 */
	ValueTypeName: string;

}
