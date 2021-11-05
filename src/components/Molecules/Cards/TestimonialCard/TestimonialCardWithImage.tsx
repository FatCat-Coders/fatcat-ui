import React from 'react';

// Types
import { TContentfulAmbassador, TContentfulAsset } from '../../../../types';

// Assets
import bgImage from '../../../../assets/images/Backgrounds/testimonial-purple-bg.svg';

// Atoms
import {
	Flex, Paragraph, Wrapper,
} from '../../../Atoms';

type TTestimonialCardWithImage = {
	quote: string;
	title: string;
	company: string
	image: TContentfulAsset
}

const quoteStyle = {
	fontSize: '160px',
	lineHeight: 0.5,
};

const TestimonialCardWithImage: React.FC<TTestimonialCardWithImage> = (props) => {
	const {
		quote,
		title,
		company,
		image,
	} = props;
	return (
		<Flex
			borderRadius="20px"
			overflow="hidden"
			height="auto"
			minHeight="560px"
			tablet={[{
				minHeight: 'initial',
			}]}
		>
			<Wrapper
				backgroundImage={image.file.url}
				backgroundSize="100%"
				backgroundColor="white"
				backgroundRepeat="no-repeat"
				maxWidth="45%"
				hide="tablet"
			/>
			<Flex
				direction="column"
				backgroundImage={bgImage}
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				padding={['l40', 'r40', 't72', 'b44']}
				maxWidth="55%"
				tablet={['fluid']}
				largeTablet={[{
					padding: ['l20', 'r20'],
				}]}
			>
				<Paragraph
					fontWeight="bold"
					style={quoteStyle}
				>
					“
				</Paragraph>
				<Flex
					direction="column"
					justifyContent="space-between"
					height="100%"
				>
					<Paragraph
						tablet={[{
							padding: ['b40'],
						}]}
					>
						{quote}
					</Paragraph>
					<Wrapper>
						<Paragraph
							fontSize="s16"
							padding={['b8']}
						>
							{title}
						</Paragraph>
						<Paragraph
							fontSize="s16"
							fontWeight="bold"
						>
							{company}
						</Paragraph>
					</Wrapper>
				</Flex>
			</Flex>

		</Flex>

	);
};

export default TestimonialCardWithImage;
