import React from 'react';

// types
import {
	TContentfulAsset, TContentfulLink,
} from '../../../../types';

// Utils
import { parseContentfulLink } from '../../../../utils/contentful';

// Atoms
import {
	Flex, Heading, Link, Paragraph, Wrapper,
} from '../../../Atoms';
import { ResourceCardWrapper } from './ResourceCard.atoms';

type TResourceCard = {
	title: string
	image: TContentfulAsset
	link: TContentfulLink
}

const ResourceCard: React.FC<TResourceCard> = (props) => {
	const {
		image,
		link: linkData,
		title,
	} = props;

	const parsedLink = parseContentfulLink(linkData);

	return (
		<Link
			to={parsedLink.to}
			href={parsedLink.to}
			as={parsedLink.as}
			target={parsedLink.target}
		>
			<Flex
				height="376px"
				width="296px"
				direction="column"
				backgroundColor="white"
				hover={[
					{
						zoom: 0.97,
					},
				]}
			>
				<Wrapper
					backgroundImage={image.file.url}
					minHeight="177px"
					backgroundSize="cover"
					backgroundRepeat="no-repeat"
				/>
				<Flex
					height="100%"
					backgroundColor="white"
					padding={['t16', 'l32', 'r44', 'b16']}
					justifyContent="space-between"
					direction="column"
				>
					<Paragraph
						textColor="black"
						padding={['b40']}
					>
						{title}
					</Paragraph>
					<Heading
						as="h6"
						uppercase
						textColor="black"
						fontWeight="bold"
					>
						{parsedLink.title}
					</Heading>
				</Flex>
			</Flex>
		</Link>
	);
};

export default ResourceCard;
