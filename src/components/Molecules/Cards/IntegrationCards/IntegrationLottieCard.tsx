import React from 'react';

// Types
import { TContentfulAsset, TContentfulDescription, TContentfulLink } from '../../../../types';

// Utils
import { parseContentfulLink } from '../../../../utils/contentful';

// Atoms
import {
	Flex, Heading, Image, Link, Paragraph, Wrapper,
} from '../../../Atoms';

type TIntegrationLottieCard = {
	image?: TContentfulAsset,
	animation?: React.ReactNode;
	title: string;
	description: TContentfulDescription;
	link: TContentfulLink;
};
const IntegrationLottieCard: React.FC<TIntegrationLottieCard> = (props) => {
	const {
		image,
		title,
		description,
		link: linkData,
		animation,
	} = props;
	let link = null;

	if (linkData) {
		const parsedLink = parseContentfulLink(linkData);

		link = (
			<Link
				to={parsedLink.to}
				as={parsedLink.as}
				target={parsedLink.target}
				uppercase
			>
				{parsedLink.title}
			</Link>
		);
	}
	return (
		<Flex
			maxWidth="342px"
		>
			<Flex
				direction="column"
				alignItems="center"
				padding={['b56']}
			>
				<Wrapper
					backgroundColor="background"
					maxWidth="342px"
					borderRadius="16px"
				>
					{animation}
					{image && (
						<Image
							maxHeight="320px"
							width="100%"
							src={image.file.url}
						/>
					)}
				</Wrapper>
				<Flex
					direction="column"
					width="auto"
					justifyContent="center"
					alignItems="center"
				>
					<Heading
						as="h2"
						padding={['t40', 'b16']}
						width="auto"
						textAlign="center"
					>
						{title}
					</Heading>
					<Paragraph
						textAlign="center"
						padding={['b40']}
						maxWidth="250px"
						tablet={[{
							padding: ['b24'],
						}]}
					>
						{description.description}
					</Paragraph>
					<Wrapper
						width="auto"
					>
						{link}
						{/* <Link */}
						{/*	uppercase */}
						{/*	textAlign="center" */}
						{/*	as={GatsbyLink} */}
						{/*	to={slug} */}
						{/* > */}
						{/*	Learn more */}
						{/* </Link> */}
					</Wrapper>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default IntegrationLottieCard;
