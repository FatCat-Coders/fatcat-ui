import React, { ReactElement } from 'react';

// Assets
import bg from '../../../../assets/images/Home/cta-bg.svg';

// Atoms
import {
	Flex, Wrapper,
} from '../../../Atoms';

type AnimatedCTACardProps = {
	paragraph: string[] | ReactElement;
	button: ReactElement;
}
const AnimatedCTACard: React.FC<AnimatedCTACardProps> = (props) => {
	const {
		paragraph,
		button,
	} = props;
	return (

		<Flex
			backgroundImage={bg}
			borderRadius="10px"
			backgroundSize="cover"
			justifyContent="space-between"
			padding={['t80', 'b80', 'l80', 'r80']}
			alignItems="center"
			scale
			tablet={['flexWrap', {
				padding: ['t46', 'b46', 'l24', 'r24'],
			}]}
		>
			<Wrapper
				maxWidth="80%"
				tablet={[{
					padding: ['b32'],
				}]}
			>
				{paragraph}
			</Wrapper>
			<Wrapper
				width="auto"
				height="auto"
				maxWidth="30%"
				tablet={[
					{
						width: '100%',
					}, {
						maxWidth: 'unset',
					}]}
			>
				{button}
			</Wrapper>
		</Flex>
	);
};

export default AnimatedCTACard;
