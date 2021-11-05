import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Atoms
import {
	Flex, Heading, Image, Link, Paragraph, Wrapper,
} from '../../../Atoms';
import { GenericBlockRemarkWrapper } from './GenericBlock.atoms';

type GenericBlockProps = {
	isImageLeft: boolean,
	eyebrow: string,
	title: string,
	description: string,
	image: string,
	animation: React.ReactNode,
	link: React.ReactNode,
}

const GenericBlock: React.FC<GenericBlockProps> = (props) => {
	const {
		isImageLeft,
		eyebrow,
		title,
		description,
		image,
		link,
		animation,
	} = props;

	return (
		<Flex
			justifyContent="space-between"
			direction={isImageLeft ? 'row-reverse' : 'row'}
			alignItems="center"
			tablet={['flexWrap']}
		>
			<Flex
				direction="column"
				maxWidth="40%"
				tablet={['fluid', {
					padding: ['b52'],
				}]}
			>
				<Heading
					as="h6"
					uppercase
					fontWeight="bold"
					padding={['b12']}
				>
					{eyebrow}
				</Heading>
				<Heading
					as="h1"
					padding={['b16']}
				>
					{title}
				</Heading>
				<GenericBlockRemarkWrapper
					dangerouslySetInnerHTML={{ __html: description }}
				/>
				<Wrapper
					padding={['t32']}
				>
					{link}
				</Wrapper>
			</Flex>
			<Wrapper
				tablet={['fluid']}
				mobile={['clearSideSpacing']}
				maxWidth="560px"
				position="relative"
			>
				{animation}
				<Image src={image} />
			</Wrapper>
		</Flex>
	);
};

export default GenericBlock;
