import React from 'react';

// Types
import {
	TContentfulAmbassador, TContentfulAsset, TContentfulDescription, TContentfulLink,
} from '../../../../types';

// Utils
import { parseContentfulLink } from '../../../../utils/contentful';

// Atoms
import {
	Flex, Image, Link, Paragraph, Wrapper,
} from '../../../Atoms';
import AmbassadorProfileInfo from './AmbassadorProfileInfo';

type TAmbassadorCard = {
	author: TContentfulAmbassador
	description: TContentfulDescription
	image: TContentfulAsset
	link: TContentfulLink
}

const AmbassadorCard: React.FC<TAmbassadorCard> = (props) => {
	const {
		description,
		image,
		link: linkData,
		author,
	} = props;

	const parsedLink = parseContentfulLink(linkData);

	const link = (
		<Link
			to={parsedLink.to}
			as={parsedLink.as}
			target={parsedLink.target}
			uppercase
		>
			{parsedLink.title}
		</Link>
	);

	return (
		<Flex
			direction="column"
			backgroundColor="backgroundLighter"
			borderRadius="10px"
			padding={['t48', 'b28', 'l52', 'r52']}
			scale
			minHeight="406px"
			maxWidth="613px"
			minWidth="613px"
			justifyContent="space-between"
			tablet={[
				{
					maxWidth: '480px',
				},
				{
					minWidth: '480px',
				},
				{
					minHeight: '430px',
				},
			]}
			mobile={[
				{
					maxWidth: '350px',
				},
				{
					minWidth: '350px',
				},
			]}
		>
			<Wrapper>
				{author.companyLogo?.file.url && (
					<Wrapper
						padding={['b16']}
					>
						<Image src={author?.companyLogo.file.url} maxHeight="25px" width="auto" height="100%" />
					</Wrapper>
				)}
				{description?.description && (
					<Paragraph
						padding={['b28']}
					>
						{description?.description}
					</Paragraph>
				)}
			</Wrapper>
			<Wrapper>
				{link}
				<Wrapper
					paddingTop="s72"
				>
					<AmbassadorProfileInfo
						name={author.name}
						company={author.company}
						position={author.position}
						photo={image || author.photo}
					/>
				</Wrapper>
			</Wrapper>
		</Flex>
	);
};

export default AmbassadorCard;
