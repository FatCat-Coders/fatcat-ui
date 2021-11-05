import React from 'react';

// Atoms
import {
	Button, Flex, Heading, Paragraph, Wrapper,
} from '../../../Atoms';
import { TContentfulDescription, TContentfulLink } from '../../../../types';
import { parseContentfulLink } from '../../../../utils/contentful';

type SimpleCTACardProps = {
    eyebrow: string;
    title: string;
    description: TContentfulDescription;
    link: TContentfulLink
}
const SimpleCTACard: React.FC<SimpleCTACardProps> = (props) => {
	const {
		eyebrow,
		title,
		description,
		link,
	} = props;

	const parsedLink = parseContentfulLink(link);

	return (
		<Flex
			direction="column"
			justifyContent="space-between"
			backgroundGradient="linear-gradient(-150deg, rgba(94,26,111, 0.8), rgba(215, 51, 72, 0.9) 400%)"
			borderRadius="20px"
			minHeight="560px"
			maxWidth="380px"
			padding={['t40', 'b40', 'l40', 'r40']}
			largeTablet={['fluid',
				{
					padding: ['l20', 'r20'],
				}, {
					minHeight: 'initial',
				},
			]}
		>
			<Wrapper>
				<Paragraph
					uppercase
					backgroundColor="yellow"
					padding={['t4', 'b4', 'l8', 'r8']}
					width="fit-content"
					textColor="black"
					fontSize="s14"
					fontWeight="bold"
					borderRadius="4px"
					letterSpacing="2px"
					margin={['b20']}
				>
					{eyebrow}
				</Paragraph>
				<Heading
					as="h1"
					maxWidth="258px"
					padding={['b8']}
				>
					{title}
				</Heading>
				<Paragraph
					maxWidth="275px"
					padding={['b40']}
					textColorOpacity={0.7}
				>
					{description.description}
				</Paragraph>
			</Wrapper>
			<Wrapper>
				<Button
					variant="outline"
					to={parsedLink.to}
					as={parsedLink.as}
					target={parsedLink.target}
					width="100%"
				>
					{parsedLink.title}
				</Button>
			</Wrapper>
		</Flex>
	);
};

export default SimpleCTACard;
