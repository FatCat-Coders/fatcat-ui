import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Atoms
import {
	Flex, Heading, Image, Link, Paragraph, Text, Wrapper,
} from '../../../Atoms';
import { COLOR } from '../../../../theme/definitions';
import { BlogPreviewParagraph, BlogPreviewTitle } from '../../../Atoms/Paragraph/ClampedParagraph';

type BlogPreviewCardProps = {
    image?: string;
    title: string;
    excerpt: string;
    category: ReactElement;
    date: string;
    slug: string;
}
const BlogPreviewCard: React.FC<BlogPreviewCardProps> = (props) => {
	const {
		image,
		title,
		excerpt,
		category,
		date,
		slug,
	} = props;
	return (
		<Link
			as={GatsbyLink}
			to={slug}
			href={slug}
			hover={['unset']}
		>
			<Flex
				direction="column"
				borderRadius="20px"
				overflow="hidden"
				height="530px"
				maxWidth="386px"
				tablet={[{
					maxWidth: 'unset',
				}]}
				hover={['pointer']}
			>
				<Flex
					justifyContent="center"
					backgroundGradient={!image ? `radial-gradient(circle at center, ${COLOR.purple} 6%, ${COLOR.darkestPurple} 80%)` : ''}
					minHeight="225px"
				>
					{image && (
						<Image
							src={image}
							maxHeight="300px"
						/>
					)}
				</Flex>
				<Flex
					direction="column"
					justifyContent="space-between"
					height="100%"
					backgroundColor="backgroundLight"
					padding={['t24', 'b24', 'l32', 'r32']}
				>
					<Wrapper>
						<BlogPreviewTitle
							as="h5"
							fontWeight="normal"
							height="68px"
						>
							{title}
						</BlogPreviewTitle>
						<BlogPreviewParagraph>
							{excerpt}
						</BlogPreviewParagraph>
					</Wrapper>
					<Flex
						alignItems="center"
					>
						<Wrapper
							width="auto"
						>
							{category}
						</Wrapper>
						<Text
							fontSize="s28"
							textColor="primary"
							padding={['l4', 'r4']}
							textColorOpacity={0.5}
						>
							·
						</Text>
						<Paragraph
							fontSize="s16"
							textColorOpacity={0.5}
						>
							{date}
						</Paragraph>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	);
};

export default BlogPreviewCard;
