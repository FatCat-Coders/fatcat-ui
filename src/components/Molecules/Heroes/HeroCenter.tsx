import React from 'react';

// Types
import { TContentfulDescription, TContentfulImage } from '../../../types';

// Atoms
import {
	Flex, Heading, Image, Paragraph,
} from '../../Atoms';

type HeroCenterProps = {
	title: string;
	description: TContentfulDescription;
	image?: TContentfulImage;
	cta?: React.ReactNode;
	animation?: React.ReactNode,
	titleSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const HeroCenter: React.FC<HeroCenterProps> = (props) => {
	const {
		title,
		description,
		image,
		cta,
		animation,
		titleSize,
	} = props;
	return (
		<Flex
			alignItems="center"
			direction="column"
			justifyContent="center"
		>
			<Heading
				as={titleSize}
				padding={['b4']}
				maxWidth="745px"
				textAlign="center"
				tablet={[{
					padding: ['b12'],
				}]}
			>
				{title}
			</Heading>
			{description?.description && (
				<Paragraph
					maxWidth="700px"
					textAlign="center"
					padding={['b56']}
				>
					{description.description}
				</Paragraph>
			)}
			{cta}
			{(animation || image) && (
				<Flex
					height="auto"
					justifyContent="center"
					alignItems="center"
					position="relative"
				>
					{animation}
					{image && (
						<Image
							src={image.file.file.url}
							width={image.width}
							maxWidth={image.maxWidth}
						/>
					)}
				</Flex>
			)}
		</Flex>
	);
};
export default HeroCenter;
