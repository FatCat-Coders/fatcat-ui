import React from 'react';

// Types
import { TContentfulAnimation } from '../../types';

// Component
import LottiePlayer from '../Molecules/Generic/Lottie/Lottie';

type TLottieGenerator = {
	animation: TContentfulAnimation
}

const LottieGenerator: React.FC<TLottieGenerator> = (props) => {
	const {
		animation,
	} = props;

	if (animation) {
		return (
			<LottiePlayer
				width={animation.width}
				height="auto"
				position={animation.position}
				top={animation.top}
				bottom={animation.bottom}
				left={animation.left}
				right={animation.right}
				zIndex={1}
				path={animation.file.file.url}
				delay={animation.delay}
				loop={animation.loop}
			/>
		);
	}

	return null;
};

export default LottieGenerator;
