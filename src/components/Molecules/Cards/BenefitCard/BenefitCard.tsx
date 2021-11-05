import React from 'react';

// Types
import { TContentfulAsset, TContentfulDescription } from '../../../../types';

// Atoms
import {
	Flex, Heading, Image, Paragraph, Wrapper,
} from '../../../Atoms';

type TBenefitCard = {
	image: TContentfulAsset,
	title: string;
	description: TContentfulDescription;
	animation: React.ReactNode;
}
const BenefitCard: React.FC<TBenefitCard> = (props) => {
	const {
		image,
		title,
		description,
		animation,
	} = props;
	return (
		<Flex
			backgroundColor="backgroundLight"
			direction="column"
			height="465px"
			padding={['b44', 't44']}
			borderRadius="20px"
			width="100%"
		>
			<Wrapper
				width="100"
				height="180px"
			>
				{animation}
				{image && (
					<Image
						width="100%"
						height="180px"
						src={image.file.url}
						style={{ objectPosition: 'center', objectFit: 'contain' }}
					/>
				)}
			</Wrapper>
			<Flex
				direction="column"
				padding={['l40', 'r40', 't44']}
				mobile={[{
					padding: ['l24', 'r24'],
				}]}
			>
				<Heading
					as="h5"
					padding={['b20']}
					textAlign="center"
				>
					{title}
				</Heading>
				<Paragraph
					textAlign="center"
					textColorOpacity={0.7}
				>
					{description.description}
				</Paragraph>
			</Flex>
		</Flex>
	);
};
export default BenefitCard;
