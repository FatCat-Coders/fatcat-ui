import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Theme
import { COLOR } from '../../../../theme/definitions';

// Atoms
import { Flex, Paragraph } from '../../../Atoms';

type SocialShareItemProps = {
	icon: IconProp;
	text: string;
}
const SocialShareItem: React.FC<SocialShareItemProps> = (props) => {
	const {
		icon,
		text,
	} = props;
	return (
		<Flex
			border={`1px solid ${COLOR.white10}`}
			borderRadius="4px"
			padding={['t12', 'b12', 'l24', 'r24']}
			margin={['b12']}
			alignItems="center"
			tablet={['autoWidth', 'contentCenter',
				{
					height: '37px',
				},
				{
					width: '36px',
				},
				{
					margin: ['r4'],
				},
				{
					padding: ['t24', 'b24'],
				}]}
		>
			<FontAwesomeIcon
				icon={icon}
				color="white"
			/>
			<Paragraph
				textSize="paragraph14"
				padding={['l12']}
				hide="tablet"
			>
				{text}
			</Paragraph>
		</Flex>
	);
};

export default SocialShareItem;
