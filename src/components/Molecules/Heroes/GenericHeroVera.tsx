import React from 'react';

// Atoms
import {
	Button,
	Flex, Heading, Image, Paragraph, Wrapper,
} from '../../Atoms';

// Sections
import { InputField } from '../../Atoms/Input/Input';

type HeroHomeVeraProps = {
	title: any,
	description: any,
	buttonText?: string,
	disclaimer?: string,
	image?: string,
	noInput?: boolean,
	smallerFont?: boolean;
}
const GenericHeroVera: React.FC<HeroHomeVeraProps> = (props) => {
	const {
		title,
		description,
		buttonText,
		disclaimer,
		image,
		noInput,
		smallerFont,
	} = props;
	return (
		<Flex
			justifyContent="space-between"
			alignItems="center"
			wrap
		>
			<Flex
				direction="column"
				padding={['t64']}
				maxWidth="60%"
				tablet={[
					'autoWidth',
					'clearBottomSideSpacing',
					{
						maxWidth: 'unset',
					},
					{
						padding: ['b20'],
					},
					{
						width: '100%',
					},
				]}
			>
				<Heading
					as={smallerFont ? 'h2' : 'h1'}
					fontWeight="bold"
					padding={['b16']}
					maxWidth="450px"
				>
					{title}
				</Heading>
				<Paragraph
					padding={['b46']}
					maxWidth={image ? '550px' : '670px'}
				>
					{description}
				</Paragraph>
				<Flex
					alignItems="center"
					padding={['b56']}
					tablet={['flexWrap', {
						padding: ['b16'],
					}]}
				>
					{!noInput && (
						<InputField
							placeholder="ENTER YOUR EMAIL"
							borderRight="none"
							borderRadius="4px 0px 0px 4px"
							tablet={['fluid', 'textCenter',
								{
									setBorderRight: '1px solid white',
								},
								{
									setBorderRadius: '4px',
								},
							]}
							maxWidth="320px"
							width="100%"
						/>
					)}
					{buttonText && (
						<Wrapper
							width="auto"
							tablet={[{
								width: '100%',
							}, {
								padding: ['t24'],
							}]}
						>
							<Button
								whiteSpace="nowrap"
								borderRadius="0px 4px 4px 0px"
								tablet={[{
									width: '100%',
								},
								{
									setBorderRadius: '4px',
								},
								]}
							>
								{buttonText}
								{' '}
								→
							</Button>
						</Wrapper>
					)}
				</Flex>
				<Paragraph
					tablet={['textCenter']}
				>
					{disclaimer}
				</Paragraph>
			</Flex>
			<Wrapper
				tablet={['fluid']}
				mobile={['clearSideSpacing']}
				maxWidth="40%"
				padding={['l20']}
			>
				<Image
					src={image}
				/>
			</Wrapper>
		</Flex>
	);
};

export default GenericHeroVera;
