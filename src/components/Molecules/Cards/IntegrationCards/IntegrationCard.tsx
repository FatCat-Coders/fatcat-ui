import React from 'react';

// Types
import { TContentfulAsset, TContentfulDescription } from '../../../../types';

// Atoms
import {
	Flex, Image, Paragraph, Wrapper,
} from '../../../Atoms';

type TIntegrationCard = {
    image: TContentfulAsset;
    title: string;
    description: TContentfulDescription;
}

const IntegrationCard: React.FC<TIntegrationCard> = (props) => {
	const {
		image,
		title,
		description,
	} = props;

	return (
		<Flex
			backgroundColor="backgroundLight"
			alignItems="flex-start"
			width="auto"
			direction="column"
			borderRadius="20px"
			padding={['t24', 'b24', 'l44', 'r44']}
			maxWidth="380px"
			minHeight="250px"
			tablet={[{
				maxWidth: 'unset',
			}, {
				padding: ['l20', 'r20'],
			}]}
			hover={['backgroundBlackLighter']}
		>
			<Wrapper
				padding={['b16']}
				width="auto"
			>
				<Image
					src={image.file.url}
					height="56px"
				/>
			</Wrapper>
			<Paragraph
				fontWeight="bold"
				fontSize="s24"
				padding={['b20']}
			>
				{title}
			</Paragraph>
			<Paragraph
				textColorOpacity={0.7}
			>
				{description.description}
			</Paragraph>
		</Flex>
	);
};

export default IntegrationCard;
