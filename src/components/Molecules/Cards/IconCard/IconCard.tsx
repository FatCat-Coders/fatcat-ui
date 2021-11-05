import React from 'react';

// Types
import { TContentfulAsset, TContentfulDescription } from '../../../../types';

// Atoms
import {
	Flex, Image, Paragraph,
} from '../../../Atoms';

type TIconCard = {
	image: TContentfulAsset,
	title: string,
	description: TContentfulDescription,
}

const IconCard: React.FC<TIconCard> = (props) => {
	const {
		image,
		title,
		description,
	} = props;

	return (
		<Flex
			direction="column"
			alignItems="center"
			justifyContent="center"
			maxWidth="205px"
		>
			<Flex
				width="65px"
				height="70px"
				justifyContent="center"
				alignItems="center"
			>
				<Image
					src={image.file.url}
					width="100%"
				/>
			</Flex>
			<Paragraph
				fontSize="s42"
				fontWeight="bold"
				textAlign="center"
			>
				{title}
			</Paragraph>
			<Paragraph
				textAlign="center"
				textSize="paragraph14"
			>
				{description.description}
			</Paragraph>
		</Flex>
	);
};

export default IconCard;
