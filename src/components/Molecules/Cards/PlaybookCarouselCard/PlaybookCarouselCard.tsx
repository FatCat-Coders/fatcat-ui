import React from 'react';

// Assets
import participants from '../../../../assets/images/Icons/participants.svg';

// Types
import { TContentfulAsset, TContentfulDescription, TContentfulLink } from '../../../../types';

// atoms
import {
	Flex, Image, Wrapper, Paragraph, Text, Button,
} from '../../../Atoms';
import { parseContentfulLink } from '../../../../utils/contentful';

type TPlaybookCarouselCard = {
	image: TContentfulAsset
	title: string
	description: TContentfulDescription
	link: TContentfulLink
	eyebrow: string
}

const PlaybookCarouselCard: React.FC<TPlaybookCarouselCard> = (props) => {
	const {
		image,
		description,
		title,
		eyebrow,
		link,
	} = props;

	const parsedLink = parseContentfulLink(link);

	return (
		<Flex
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			borderRadius="6px"
			backgroundColor="backgroundLighter"
			minWidth="284px"
			maxWidth="284px"
		>
			<Image src={image.file.url} />
			<Flex
				direction="column"
				justifyContent="flex-start"
				alignItems="flex-start"
				padding={['l20', 'b24', 't32', 'r20']}
			>
				<Wrapper
					padding={['b12']}
				>
					<Text
						fontSize="s24"
						lineHeight="s100"
					>
						{title}
					</Text>
				</Wrapper>
				<Flex
					alignItems="center"
					gap="8px"
					padding={['b20', 't8']}
					height="30px"
				>
					<Image src={participants} width="16px" height="11px" />
					<Text
						fontSize="s14"
						textColorOpacity={0.7}
						textColor="primary"
					>
						{eyebrow || 'Best for 4 - 6 Participants'}
					</Text>
				</Flex>
				{description?.description && (
					<Paragraph
						fontSize="s18"
						lineHeight="s150"
						ellipsis={3}
					>
						{description.description}
					</Paragraph>
				)}
				<Wrapper
					width="auto"
					padding={['t24']}
				>
					<Button
						to={parsedLink.to}
						href={parsedLink.to}
						as={parsedLink.as}
						target={parsedLink.target}
						variant="signUp"
					>
						{parsedLink.title}
					</Button>
				</Wrapper>
			</Flex>
		</Flex>
	);
};

export default PlaybookCarouselCard;
