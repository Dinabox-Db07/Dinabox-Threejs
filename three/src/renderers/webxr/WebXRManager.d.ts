import { Group } from 'three/src/objects/Group';
import { Camera } from 'three/src/cameras/Camera';
import { EventDispatcher } from 'three/src/core/EventDispatcher';
import { XRFrameRequestCallback, XRReferenceSpace, XRReferenceSpaceType, XRSession } from 'three/src/renderers/webxr/WebXR';

export class WebXRManager extends EventDispatcher {

	constructor( renderer: any, gl: WebGLRenderingContext );

	/**
	 * @default false
	 */
	enabled: boolean;

	/**
	 * @default false
	 */
	isPresenting: boolean;

	getController( id: number ): Group;
	getControllerGrip( id: number ): Group;
	getHand( id: number ): Group;
	setFramebufferScaleFactor( value: number ): void;
	setReferenceSpaceType( value: XRReferenceSpaceType ): void;
	getReferenceSpace(): XRReferenceSpace;
	getSession(): XRSession;
	setSession( value: XRSession ): void;
	getCamera( camera: Camera ): Camera;
	setAnimationLoop( callback: XRFrameRequestCallback ): void;
	dispose(): void;

}
