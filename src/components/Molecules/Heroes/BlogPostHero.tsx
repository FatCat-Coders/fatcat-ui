import React, { ReactElement } from 'react';

// Assets
import logo from '../../../assets/images/Icons/logo-hand.svg';

// Atoms
import {
	Flex, Heading, Image, Paragraph, Text, Wrapper,
} from '../../Atoms';

type BlogPostHeroProps = {
	title: string;
	description: string;
	readTime: number;
	date: string;
	category: ReactElement;
}

const BlogPostHero: React.FC<BlogPostHeroProps> = (props) => {
	const {
		title,
		description,
		readTime,
		date,
		category,
	} = props;
	return (
		<Flex
			direction="column"
			justifyContent="space-between"
			height="100%"
			minHeight="35vh"
		>
			<Wrapper>
				<Heading
					as="h1"
					fontSize="s74"
					padding={['b16']}
					maxWidth="80%"
					tablet={['fluid']}
				>
					{title}
				</Heading>
				<Paragraph
					maxWidth="720px"
					padding={['b112']}
					mobile={['clearBottomSideSpacing']}
				>
					{description}
				</Paragraph>
			</Wrapper>
			<Flex>
				<Flex
					width="auto"
					padding={['r24']}
					alignItems="center"
				>
					<Image src={logo} />
					<Text
						textColor="primary"
						textSize="paragraph14"
						padding={['l4']}
					>
						grok
					</Text>
				</Flex>
				<Paragraph
					textColorOpacity={0.5}
					fontSize="s14"
					letterSpacing="1px"
				>
					{date}
					<Text
						padding={['l4', 'r4']}
					>
						·
					</Text>
					{readTime}
					{' '}
					min read
					<Text
						padding={['l8']}
					>
						{category}
					</Text>
				</Paragraph>
			</Flex>
		</Flex>
	);
};

export default BlogPostHero;
