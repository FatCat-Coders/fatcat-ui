import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Assets
import logo from '../../../../assets/images/Icons/logo-hand.svg';

// Atoms
import {
	Flex, Heading, Image, Paragraph, Text, Wrapper,
} from '../../../Atoms';

type FeaturedBLogCardProps = {
    image?: string;
    category: ReactElement;
    title: string;
    excerpt: string;
    date: string;
    readTime: number;
    slug: string;

}
const FeatureBlogCard: React.FC<FeaturedBLogCardProps> = (props) => {
	const {
		image,
		category,
		title,
		excerpt,
		date,
		readTime,
		slug,
	} = props;

	return (
		<Flex
			borderRadius="20px"
			overflow="hidden"
			tablet={['flexWrap']}
			backgroundColor="backgroundLighter"
			as={GatsbyLink}
			to={slug}
		>
			<Flex
				backgroundColor={!image ? 'purple' : 'backgroundLight'}
				justifyContent="center"
				borderRadius="20px"
				maxWidth="43%"
				tablet={[{
					maxWidth: 'unset',
				}]}
			>
				{image && (
					<Image
						src={image}
						width="100%"
						maxHeight="445px"
						maxWidth="500px"
					/>
				)}
			</Flex>
			<Flex
				backgroundColor="backgroundLighter"
				direction="column"
				justifyContent="space-between"
				height="auto"
				padding={['t32', 'b32', 'l32', 'r32']}
				mobile={[{
					padding: ['l12', 'r12'],
				}]}
			>
				<Wrapper>
					<Wrapper
						padding={['b16']}
					>
						{category}
					</Wrapper>
					<Heading
						as="h1"
						padding={['b12']}
						fontSize="s42"
						fontWeight="bold"
						mobile={[{
							fontSize: 's30',
						}]}
					>
						{title}
					</Heading>
					<Paragraph
						padding={['b24']}
						mobile={[{
							fontSize: 's14',
						}]}
					>
						{excerpt}
					</Paragraph>
				</Wrapper>
				<Flex
					alignItems="center"
				>
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
							padding={['l8', 'r8']}
						>
							·
						</Text>
						{readTime}
						{' '}
						min read
					</Paragraph>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default FeatureBlogCard;
