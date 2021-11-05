import React from 'react';

// Assets
import background from '../../../../assets/images/Backgrounds/newsletter-bg.svg';

// Atoms
import {
	Button, Flex, Heading, Link, Paragraph, Wrapper,
} from '../../../Atoms';
import { InputField } from '../../../Atoms/Input/Input';
import { COLOR } from '../../../../theme/definitions';
import { TContentfulDescription, TContentfulLink } from '../../../../types';
import { parseContentfulLink } from '../../../../utils/contentful';

type TNewsletterCard = {
    eyebrow: string;
    title: string;
    description: TContentfulDescription
    link: TContentfulLink
}
const NewsletterCard: React.FC<TNewsletterCard> = (props) => {
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
			alignItems="center"
			justifyContent="center"
			padding={['t64', 'b72', 'l40', 'r40']}
			backgroundImage={background}
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			backgroundColor="purple"
			borderRadius="10px"
			mobile={[{
				padding: ['l20', 'r20'],
			}]}
		>
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
				margin={['b24']}
			>
				{eyebrow}
			</Paragraph>
			<Heading
				as="h1"
				textAlign="center"
				padding={['b4']}
			>
				{title}
			</Heading>
			<Paragraph
				textAlign="center"
				textColorOpacity={0.7}
				padding={['b56']}
			>
				{description.description}
			</Paragraph>
			<Flex
				alignItems="center"
				tablet={['flexWrap']}
				justifyContent="center"
				as="form"
				action={parsedLink.to}
				method="post"
			>

				{/* <InputField */}
				{/*	placeholder="ENTER YOUR EMAIL" */}
				{/*	border={`2px solid ${COLOR.white}`} */}
				{/*	borderRight="none" */}
				{/*	borderRadius="4px 0px 0px 4px" */}
				{/*	tablet={['fluid', 'textCenter', */}
				{/*		{ */}
				{/*			setBorderRight: '1px solid white', */}
				{/*		}, */}
				{/*		{ */}
				{/*			setBorderRadius: '4px', */}
				{/*		}, */}
				{/*	]} */}
				{/*	maxWidth="320px" */}
				{/*	width="100%" */}
				{/* /> */}
				<Wrapper
					width="auto"
					tablet={[{
						width: '100%',
					}, {
						padding: ['t24'],
					}]}
				>
					<Button
						variant="white"
						borderRadius="4px 4px 4px 4px"
						whiteSpace="nowrap"
						tablet={[
							{
								width: '100%',
							},
							{
								setBorderRadius: '4px',
							},
						]}
					>
						{parsedLink.title}
						{' '}
						→
					</Button>
				</Wrapper>
			</Flex>

		</Flex>
	);
};

export default NewsletterCard;
