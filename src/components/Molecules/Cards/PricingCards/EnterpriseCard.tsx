import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import enterpriseCardBg from '../../../../assets/images/Backgrounds/enterprise-card-bg.svg';

// FontAwesome
import { faInfinity } from '@fortawesome/free-solid-svg-icons';

// Theme
import { COLOR } from '../../../../theme/definitions';

// Atoms
import {
	Flex, Paragraph, Wrapper,
} from '../../../Atoms';

type TEnterpriseCard = {
	businessModel: string;
	description: string;
	bullets?: string[];
	cta: ReactElement;
}
const EnterpriseCard: React.FC<TEnterpriseCard> = (props) => {
	const {
		businessModel,
		description,
		bullets,
		cta,
	} = props;
	const myArray = ['Unlimited everything', 'Premium Support'];
	return (
		<Flex
			direction="column"
			borderRadius="20px"
			padding={['t32', 'b32']}
			minHeight="570px"
			backgroundImage={enterpriseCardBg}
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
		>
			<Flex
				justifyContent="center"
				direction="column"
				padding={['l32', 'r32']}
				width="auto"
			>
				<Wrapper
					backgroundGradient={`radial-gradient(circle, ${COLOR.purple}, ${COLOR.yellow})`}
					padding={['t4', 'b4', 'r4', 'l4']}
					position="relative"
					borderRadius="60px"
				>
					<Paragraph
						fontSize="s24"
						fontWeight="bold"
						padding={['t12', 'b12', 'l40', 'r40']}
						backgroundColor="backgroundLight"
						textAlign="center"
						borderRadius="60px"
						backgroundGradient="radial-gradient(circle, rgba(215,51,72,1) %, rgba(94,26,111,1) 0%, rgba(255,184,45,1) 53%, rgba(255,184,45,1) 100%)"
					>
						{businessModel}
					</Paragraph>
				</Wrapper>
				<Paragraph
					textSize="paragraph14"
					padding={['b48', 't16']}
					textAlign="center"
				>
					{description}
				</Paragraph>
			</Flex>
			<Flex
				direction="column"
				justifyContent="space-between"
				padding={['l32', 'r32', 't16', 'b4']}
				height="100%"
			>
				<Flex
					direction="column"
					justifyContent="center"
				>
					{myArray.map(array => (
						<Flex
							alignItems="center"
							padding={['b32']}
							justifyContent="center"
						>
							<FontAwesomeIcon
								icon={faInfinity}
								color="white"
								size="xs"
							/>
							<Paragraph
								fontSize="s16"
								padding={['l16']}
							>
								{array}
							</Paragraph>
						</Flex>
					))}
				</Flex>
				<Wrapper
					height="auto"
				>
					{cta}
				</Wrapper>
			</Flex>
		</Flex>
	);
};

export default EnterpriseCard;
