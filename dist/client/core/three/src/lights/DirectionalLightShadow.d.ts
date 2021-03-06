import { OrthographicCamera } from 'three/src/cameras/OrthographicCamera';
import { LightShadow } from 'three/src/lights/LightShadow';

export class DirectionalLightShadow extends LightShadow {

	camera: OrthographicCamera;
	readonly isDirectionalLightShadow: true;

}
