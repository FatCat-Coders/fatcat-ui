import React from 'react';
import {
	Flex, Heading, Paragraph, Wrapper,
} from '../../../Atoms';

type TeamLeaderCardProps = {
	name: string;
	title: string;
	image: any;
	description: string;
}
const TeamLeaderCard: React.FC<TeamLeaderCardProps> = (props) => {
	const {
		name,
		title,
		image,
		description,
	} = props;
	return (
		<Flex
			direction="column"
			width="auto"
			alignItems="center"
			padding={['b40']}
		>
			<Flex
				backgroundImage={image}
				height="277px"
				width="277px"
				direction="column"
				backgroundColor="white"
				borderRadius="50%"
			>
				<Wrapper
					width="auto"
					padding={['t32']}
					textAlign="center"
				>
					<Paragraph
						textColor="black"
						textAlign="center"
						fontWeight="bold"
					>
						{name}
					</Paragraph>
					<Paragraph
						textColor="black"
						textAlign="center"
						uppercase
						fontSize="s12"
					>
						{title}
					</Paragraph>
				</Wrapper>
			</Flex>
			<Paragraph
				padding={['t46']}
				textAlign="center"
				maxWidth="277px"
			>
				{description}
			</Paragraph>
		</Flex>
	);
};

export default TeamLeaderCard;
