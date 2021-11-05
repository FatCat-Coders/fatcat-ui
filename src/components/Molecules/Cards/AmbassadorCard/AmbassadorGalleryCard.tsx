import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Types
import { TContentfulAmbassador } from '../../../../types';

// Atoms
import {
	Flex, Image, Paragraph, Wrapper,
} from '../../../Atoms';

type TAmbassadorGalleryCard = {
	ambassador: TContentfulAmbassador
}
const AmbassadorGalleryCard: React.FC<TAmbassadorGalleryCard> = (props) => {
	const {
		ambassador,
	} = props;

	return (
		<Flex
			direction="column"
			borderRadius="20px"
			overflow="hidden"
			minHeight="514px"
			maxWidth="390px"
			tablet={[{
				maxWidth: 'unset',
			}]}
			as={GatsbyLink}
			to={ambassador.slug}
			hover={['pointer']}
		>
			<Flex
				justifyContent="center"
			>
				<Image
					src={ambassador.listPhoto.file.url}
				/>
			</Flex>
			<Flex
				direction="column"
				justifyContent="space-between"
				height="100%"
				backgroundColor="backgroundLight"
				padding={['t24', 'b24', 'l32', 'r32']}
			>
				<Wrapper>
					<Wrapper
						padding={['b12']}
					>
						<Image
							src={ambassador.companyLogo.file.url}
							maxHeight="19px"
							width="auto"
						/>
					</Wrapper>
					<Paragraph
						padding={['b32']}
						fontSize="s16"
					>
						{ambassador.listDescription?.listDescription || ambassador.description.description}
					</Paragraph>
				</Wrapper>
				<Flex
					alignItems="center"
				>
					<Wrapper
						width="auto"
					>
						<Paragraph
							fontSize="s16"
							padding={['b8']}
						>
							{ambassador.name}
						</Paragraph>
						<Paragraph
							fontSize="s14"
							textColorOpacity={0.7}
						>
							{ambassador.position}
						</Paragraph>
					</Wrapper>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default AmbassadorGalleryCard;
