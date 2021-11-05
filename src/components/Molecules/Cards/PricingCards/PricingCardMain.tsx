import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Theme
import { COLOR } from '../../../../theme/definitions';

// FontAwesome
import { faCheck, faInfinity } from '@fortawesome/free-solid-svg-icons';

// Atoms
import {
	Flex, Paragraph, Text, Wrapper,
} from '../../../Atoms';

type TPricingCardMain = {
	eyebrow?: string;
	businessModel: string;
	price: string;
	description: string;
	cta: ReactElement;
}
const PricingCardMain: React.FC<TPricingCardMain> = (props) => {
	const {
		eyebrow,
		businessModel,
		price,
		description,
		// bulletInfinity,
		// bulletChecked,
		cta,

	} = props;

	const myArray = [
		{
			icon: faInfinity,
			text: 'Standard Meetings',
		},
		{
			icon: faInfinity,
			text: 'Grok Template',
		},
		{
			icon: faInfinity,
			text: 'Playbooks',
		},
		{
			icon: faCheck,
			text: 'Features',
		},
		{
			icon: faCheck,
			text: 'Basic Reporting',
		},
		{
			icon: faCheck,
			text: 'People Member',
		},
	];
	return (
		<Flex
			direction="column"
			borderRadius="20px"
			padding={['t16', 'b32']}
			backgroundColor="backgroundLight"
			minHeight="570px"
		>
			<Wrapper
				padding={['l32', 'r32']}
			>
				<Wrapper
					padding={['b16']}
					width="fit-content"
				>
					{eyebrow ? (
						<Paragraph
							backgroundColor="purple"
							padding={['t4', 'b4', 'l12', 'r12']}
							textSize="paragraph14"
							borderRadius="4px"
						>
							{eyebrow}
						</Paragraph>
					) : (
						<Text
							fontSize="s28"
						>
							&nbsp;
						</Text>
					)}
				</Wrapper>
				<Paragraph
					fontSize="s24"
					fontWeight="bold"
					padding={['b4']}
				>
					{businessModel}
				</Paragraph>
				<Flex
					padding={['b4']}
					alignItems="center"
				>
					<Text
						textColor="primary"
						fontSize="s12"
						padding={['b4']}
					>
						$
					</Text>
					<Paragraph
						fontSize="s24"
						fontWeight="bold"
					>
						{price}
					</Paragraph>
					<Text
						textColor="primary"
						fontSize="s12"
						padding={['t12']}
					>
						/mo
					</Text>
				</Flex>
				<Paragraph
					textSize="paragraph14"
					padding={['b16']}
				>
					{description}
				</Paragraph>
			</Wrapper>
			<Wrapper
				height="1px"
				borderBottom={`1px solid ${COLOR.white10}`}
			/>
			<Flex
				direction="column"
				justifyContent="space-between"
				padding={['l32', 'r32', 't16', 'b4']}
				height="100%"
			>
				<Flex
					direction="column"
				>
					{myArray.map(array => (
						<Flex
							alignItems="center"
							padding={['b16']}
						>
							<FontAwesomeIcon
								icon={array.icon}
								color="white"
								size="xs"
							/>
							<Paragraph
								fontSize="s16"
								padding={['l16']}
							>
								{array.text}
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

export default PricingCardMain;
