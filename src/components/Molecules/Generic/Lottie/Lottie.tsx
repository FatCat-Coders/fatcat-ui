import React, { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
// eslint-disable-next-line
// @ts-ignore
import lottie, { LottiePlayer as TLottiePlayer } from 'lottie-web/build/player/lottie_light.min.js';

// Atoms
import { Wrapper, WrapperAtomProps } from '../../../Atoms/Wrapper/Wrapper';

type LottiePlayerTypes = Partial<{
	loop?: boolean,
	autoplay?: boolean,
	animation?: any,
	path?: string,
	delay?: number,
}>;

const LottiePlayer: React.FC<LottiePlayerTypes & WrapperAtomProps> = (props) => {
	const {
		loop = false,
		animation,
		path,
		autoplay = true,
		delay = 0,
	} = props;

	const [readyToPlay, setReadyToPlay] = useState(loop);
	const [lottieAnimation, setLottieAnimation] = useState<TLottiePlayer>(null);
	const animationContainer = useRef<HTMLDivElement>(null);
	function restartLottie() {
		if (lottieAnimation) {
			lottieAnimation.stop();
			lottieAnimation.play();
		}
	}

	// eslint-disable-next-line consistent-return
	useEffect(() => {
		if (animationContainer.current && readyToPlay) { // add this
			const data: any = {
				container: animationContainer.current,
				loop,
				autoplay,
			};

			if (animation) {
				data.animationData = animation;
			}

			if (path) {
				data.path = path;
			}
			let anim: { destroy: () => void; } | null = null;
			const timer = setTimeout(() => {
				anim = lottie.loadAnimation(data);
				setLottieAnimation(anim);
			}, delay);

			return () => {
				clearTimeout(timer);
				if (anim) {
					anim.destroy();
				}
			};// optional clean up for unmounting
		}
	}, [animationContainer, readyToPlay]);

	function renderLottie() {
		return (
			<Wrapper {...props}>
				<Wrapper
					overflow="hidden"
					width="auto"
					height="auto"
					onClick={() => restartLottie()}
					className="lottie-container"
					ref={animationContainer}
					style={{
						cursor: !loop ? 'pointer' : '',
					}}
					data-testid="lottie-player"
				/>
			</Wrapper>
		);
	}

	return (
		<Waypoint
			onEnter={() => {
				if (!readyToPlay) {
					setReadyToPlay(true);
				}
				if (lottieAnimation) {
					lottieAnimation.play();
				}
			}}
			onLeave={() => {
				if (lottieAnimation) {
					lottieAnimation.pause();
				}
			}}
		>
			{renderLottie()}
		</Waypoint>
	);
};

export default LottiePlayer;
