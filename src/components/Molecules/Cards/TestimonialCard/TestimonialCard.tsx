import React from 'react';

// Types
import { TContentfulAmbassador } from '../../../../types';

// Assets
import testimonialBg from '../../../../assets/images/Home/testimonial-bg.svg';

// Atoms
import { Flex, Paragraph } from '../../../Atoms';

type TestimonialCardProps= {
	quote: string;
	title: string;
	company: string
}

const quoteStyle = {
	fontSize: '12.375rem',
	lineHeight: 0.3,
};

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
	const {
		quote,
		title,
		company,
	} = props;

	return (
		<Flex
			direction="column"
			alignItems="center"
			backgroundColor="backgroundLighter"
			padding={['t112', 'b120', 'l20', 'r20']}
			backgroundImage={testimonialBg}
			backgroundRepeat="no-repeat"
			backgroundPosition="bottom"
			borderRadius="10px"
			mobile={[{
				padding: ['t80'],
			}]}

		>
			<Paragraph
				fontWeight="bold"
				style={quoteStyle}
			>
				“
			</Paragraph>
			<Paragraph
				fontSize="s28"
				padding={['b32']}
				textAlign="center"
				maxWidth="835px"
				tablet={[{
					fontSize: 's24',
				}]}
				mobile={[{
					fontSize: 's16',
				}]}
			>
				{quote}
			</Paragraph>
			<Paragraph
				padding={['b8']}
				mobile={[{
					fontSize: 's12',
				}]}
			>
				{title}
			</Paragraph>
			<Paragraph
				fontWeight="bold"
				padding={['b56']}
				mobile={[{
					fontSize: 's12',
				}]}
			>
				{company}
			</Paragraph>
		</Flex>
	);
};

export default TestimonialCard;
