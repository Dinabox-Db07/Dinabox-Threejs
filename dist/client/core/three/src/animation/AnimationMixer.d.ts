import { AnimationClip } from 'three/src/animation/AnimationClip';
import { AnimationAction } from 'three/src/animation/AnimationAction';
import { AnimationBlendMode } from 'three/src/constants';
import { EventDispatcher } from 'three/src/core/EventDispatcher';
import { Object3D } from 'three/src/core/Object3D';
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup';

export class AnimationMixer extends EventDispatcher {

	constructor( root: Object3D | AnimationObjectGroup );

	/**
	 * @default 0
	 */
	time: number;

	/**
	 * @default 1.0
	 */
	timeScale: number;

	clipAction( clip: AnimationClip, root?: Object3D | AnimationObjectGroup, blendMode?: AnimationBlendMode ): AnimationAction;
	existingAction( clip: AnimationClip, root?: Object3D | AnimationObjectGroup ): AnimationAction | null;
	stopAllAction(): AnimationMixer;
	update( deltaTime: number ): AnimationMixer;
	setTime( timeInSeconds: number ): AnimationMixer;
	getRoot(): Object3D | AnimationObjectGroup;
	uncacheClip( clip: AnimationClip ): void;
	uncacheRoot( root: Object3D | AnimationObjectGroup ): void;
	uncacheAction( clip: AnimationClip, root?: Object3D | AnimationObjectGroup ): void;

}
