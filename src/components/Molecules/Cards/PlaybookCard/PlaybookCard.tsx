import React, { useState } from 'react';
import { Link } from 'gatsby';
// Assets
import arrowRight from '../../../../assets/images/Icons/arrow-right.svg';
import arrowRightYellow from '../../../../assets/images/Icons/arrow-right-yellow.svg';

// Types
import { TContentfulAsset, TContentfulDescription, TContentfulLink } from '../../../../types';

// Utils
import { parseContentfulLink } from '../../../../utils/contentful';

// Atoms
import {
	Flex, Heading, Image, Paragraph, Wrapper, Text,
} from '../../../Atoms';

type TPlaybookCard = {
    image: TContentfulAsset;
    title: string;
    description: TContentfulDescription;
    link: TContentfulLink
}
const PlaybookCard: React.FC<TPlaybookCard> = (props) => {
	const {
		image,
		link,
		title,
		description,
	} = props;

	const [isHovered, setIsHovered] = useState(false);

	const parsedLink = parseContentfulLink(link);

	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			backgroundColor="backgroundLight"
			tablet={['flexWrap']}
		>
			<Wrapper
				padding={['t40', 'b40', 'l80']}
				width="auto"
				tablet={['fluid', {
					padding: ['l20', 'r20'],
				}]}
			>
				<Image
					maxWidth="80px"
					width="auto"
					height="114px"
					src={image.file.url}
				/>
			</Wrapper>
			<Wrapper
				padding={['t40', 'b40', 'l80']}
				tablet={['fluid', {
					padding: ['l20', 'r20', 't4'],
				}]}
			>
				<Heading
					as="h4"
					padding={['b4']}
					fontWeight="normal"
					mobile={[{
						textSize: 'h4',
					}]}
				>
					{title}
				</Heading>
				<Paragraph
					textColorOpacity={0.7}
				>
					{description.description}
				</Paragraph>
			</Wrapper>
			<Wrapper
				height="100%"
				width="15%"
				tablet={[
					{
						margin: ['l20', 'r20'],
					}, {
						width: '100%',
					},
				]}
			>
				<Flex
					backgroundColor="backgroundLighter"
					padding={['l56', 'r56', 't64', 'b64']}
					height="100%"
					minHeight="205px"
					maxWidth="167px"
					width="auto"
					direction="column"
					justifyContent="space-between"
					alignItems="center"
					as={parsedLink.as}
					to={parsedLink.to}
					href={parsedLink.to}
					largeTablet={['clearFlex', 'flexWrap', {
						padding: ['l20', 'r20'],
					}]}
					hover={['pointer', 'textYellowWithChildren', 'fullOpacity']}
					tablet={['flexWrap', 'rowReverse',
						{
							padding: ['t24', 'b24', 'l20', 'r20'],
						},
						{
							margin: ['b20'],
						},
						{
							width: '100%',
						},
						{
							minHeight: 'initial',
						},
						{
							maxWidth: 'unset',
						},
					]}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<Image
						src={isHovered ? arrowRightYellow : arrowRight}
						width="58px"
						height="24px"
						tablet={['fluid', 'autoWidth']}
					/>
					<Text
						whiteSpace="nowrap"
						textSize="paragraph14"
						letterSpacing="2px"
						textColorOpacity={0.4}
						uppercase
						hover={['fullOpacity']}
						tablet={['fluid', 'autoWidth']}
					>
						{parsedLink.title}
					</Text>
				</Flex>
			</Wrapper>
		</Flex>
	);
};

export default PlaybookCard;
