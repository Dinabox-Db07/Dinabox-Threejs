import { Color } from 'three/src/math/Color';
import { LightProbe } from 'three/src/lights/LightProbe';

export class HemisphereLightProbe extends LightProbe {

	constructor( skyColor?: Color | string | number, groundColor?: Color | string | number, intensity?: number );

	readonly isHemisphereLightProbe: true;

}
