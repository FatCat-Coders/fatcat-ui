import React from 'react';

// Types
import { TContentfulDescription, TContentfulImage } from '../../../types';

// Atoms
import {
	Flex, Heading, Image, Paragraph, Wrapper,
} from '../../Atoms';

type HeroHomeProps = {
	title: string,
	description: TContentfulDescription,
	cta: React.ReactNode,
	ctaDescription: string,
	image: TContentfulImage,
	animation: React.ReactNode,
	titleSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	isImageLeft?: boolean,
}

const GenericHero: React.FC<HeroHomeProps> = (props) => {
	const {
		title,
		description,
		cta,
		ctaDescription,
		image,
		animation,
		isImageLeft = false,
		titleSize,
	} = props;

	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			gap="20px"
			tablet={['flexWrap']}
			direction={isImageLeft ? 'row-reverse' : 'row'}
		>
			<Flex
				direction="column"
				padding={['t12']}
				width="45%"
				tablet={[
					'autoWidth',
					'clearBottomSideSpacing',
					{
						maxWidth: 'unset',
					},
					{
						padding: ['b20'],
					},
					{
						width: '100%',
					},
				]}
			>
				<Heading
					as={titleSize}
					fontWeight="bold"
					padding={['b20']}
					maxWidth="400px"
				>
					{title}
				</Heading>
				{description?.description && (
					<Paragraph
						padding={['b44']}
					>
						{description.description}
					</Paragraph>
				)}
				{cta && (
					<Flex
						alignItems="center"
						padding={['b16']}
						tablet={['flexWrap']}
					>
						{cta}
					</Flex>
				)}
				{ctaDescription && (
					<Paragraph
						tablet={['textCenter']}
					>
						{}
					</Paragraph>
				)}
			</Flex>
			{(animation || image) && (
				<Wrapper
					tablet={['fluid']}
					mobile={['clearSideSpacing']}
					width="50%"
					position="relative"
				>
					{animation}
					{image && (
						<Image src={image.file.file.url} alt={title} />
					)}
				</Wrapper>
			)}
		</Flex>
	);
};

export default GenericHero;
