import React from 'react';

// types
import {
	TContentfulAsset, TContentfulDescription, TContentfulLink,
} from '../../../../types';

// Utils
import { parseContentfulLink } from '../../../../utils/contentful';

// Atoms
import {
	Button,
	Flex, Paragraph, Wrapper,
} from '../../../Atoms';

type TSliderBannerCard = {
	description: TContentfulDescription
	image: TContentfulAsset
	link: TContentfulLink
}

const SliderBannerCard: React.FC<TSliderBannerCard> = (props) => {
	const {
		description,
		image,
		link: linkData,
	} = props;

	const parsedLink = parseContentfulLink(linkData);

	const button = (
		<Button
			to={parsedLink.to}
			as={parsedLink.as}
			target={parsedLink.target}
			href={parsedLink.to}
			variant="white"
			whiteSpace="nowrap"
			mobile={[{
				width: '100%',
			}]}
		>
			{parsedLink.title}
		</Button>
	);

	return (
		<Flex
			backgroundImage={image.file.url}
			borderRadius="10px"
			backgroundSize="cover"
			justifyContent="space-between"
			padding={['t80', 'b80', 'l80', 'r80']}
			alignItems="center"
			scale
			tablet={['flexWrap', {
				padding: ['t48', 'b48', 'l24', 'r24'],
			}]}
		>
			<Wrapper
				maxWidth="80%"
				tablet={[{
					padding: ['b32'],
				}]}
			>
				{description.description.split('\n').map((line, index) => (
					<Paragraph
						textSize="h1"
						fontWeight="bold"
						textColorOpacity={index === 1 ? 1 : 0.05}
						largeTablet={[{
							fontSize: 's30',
						}]}
					>
						{line}
					</Paragraph>
				))}
			</Wrapper>
			<Wrapper
				width="auto"
				height="auto"
				maxWidth="30%"
				tablet={[
					{
						width: '100%',
					},
					{
						maxWidth: 'unset',
					},
				]}
			>
				{button}
			</Wrapper>
		</Flex>
	);
};

export default SliderBannerCard;
