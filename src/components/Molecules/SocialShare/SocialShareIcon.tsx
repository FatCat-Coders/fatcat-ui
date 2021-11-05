import React, { useState } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { COLOR } from '../../../theme/definitions';

// Atoms
import { Icon } from '../../Atoms/Icons/Icon';
import { Flex } from '../../Atoms';

type SocialShareIconProps = {
    icon: IconProp;
}
const SocialShareIcon: React.FC<SocialShareIconProps> = (props) => {
	const {
		icon,
	} = props;

	const [color, setColor] = useState('#fafafa');

	const iconStyle = {
		color: `${color}`,
	};
	return (
		<Flex
			as={GatsbyLink}
			to="#"
			border={`1px solid ${COLOR.white}`}
			borderRadius="7px"
			justifyContent="center"
			alignItems="center"
			height="36px"
			width="36px"
			hover={['backgroundWhite']}
			color="white"
			onMouseEnter={() => setColor('#000000')}
			onMouseLeave={() => setColor('#fafafa')}
		>
			<Icon
				style={iconStyle}
				icon={icon}
			/>
		</Flex>
	);
};

export default SocialShareIcon;
