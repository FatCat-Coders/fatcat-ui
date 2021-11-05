import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// FontAwesome
import { faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';

// Atoms
import {
	Flex, Image, Paragraph, Wrapper,
} from '../../../Atoms';

type TTeamLeaderCardDetailed = {
	image: string;
	name: string;
	position: string;
	title: string;
	location: string;
	cta: ReactElement;
}
const TeamLeaderCardDetailed: React.FC<TTeamLeaderCardDetailed> = (props) => {
	const {
		image,
		name,
		position,
		title,
		location,
		cta,
	} = props;
	return (
		<Flex
			direction="column"
			backgroundColor="backgroundLighter"
			borderRadius="20px"
			padding={['l40', 'r40', 'b40', 't72']}
			position="relative"
		>
			<Wrapper
				position="absolute"
				bottom="82%"
				width="130px"
				height="130px"
				style={{ placeSelf: 'center' }}
				backgroundImage={image}
				backgroundSize="cover"
				borderRadius="50%"
			/>
			<Paragraph
				padding={['b4', 't56']}
				fontSize="s24"
				fontWeight="bold"
			>
				{name}
			</Paragraph>
			<Paragraph
				textSize="paragraph14"
				padding={['b24']}
			>
				{position}
			</Paragraph>
			<Flex
				alignItems="center"
				padding={['b12']}
			>
				<FontAwesomeIcon
					icon={faUser}
					color="white"
					size="xs"
				/>
				<Paragraph
					padding={['l8']}
					textSize="paragraph14"
				>
					{title}
				</Paragraph>
			</Flex>
			<Flex
				alignItems="center"
			>
				<FontAwesomeIcon
					icon={faMapMarkerAlt}
					color="white"
					size="xs"
				/>
				<Paragraph
					padding={['l8']}
					textSize="paragraph14"
				>
					{location}
				</Paragraph>
			</Flex>
			<Wrapper
				padding={['t44']}
			>
				{/* {cta} */}
			</Wrapper>

		</Flex>
	);
};

export default TeamLeaderCardDetailed;
