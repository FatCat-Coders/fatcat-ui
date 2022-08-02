import React from 'react';
import { Properties } from 'csstype';
import { DefaultTheme } from 'styled-components';

import { HoverTypes } from '../../../theme/props';

import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

// Atoms
import { Flex } from '../../Atoms/Flex';
import { Icon } from '../../Atoms/Icon';

export type SOCIAL_MEDIA = 'facebook' | 'instagram' | 'linkedin' | 'twitter';

export const mappedSocial = {
	facebook: FaFacebookF,
	twitter: FaTwitter,
	instagram: FaInstagram,
	linkedin: FaLinkedinIn,
};

export type TSocialMedia = {
	socials: { [ key in SOCIAL_MEDIA ]: string }
	color: keyof DefaultTheme['color']
	hover?: HoverTypes
	width?: Properties['width']
	gap?: Properties['gap']
}

const SocialMedia: React.FC<TSocialMedia> = (props) => {
	const {
		socials,
		color,
		hover,
		gap,
		width,
	} = props;
	return (
		<Flex
			maxWidth="fit-content"
			height="fit-content"
			gap={gap}
			alignItems="center"
		>
			{Object.entries(socials).map((obj) => {
				const [key, value] = obj;
				return (
					<a
						key={key}
						href={value}
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							as={mappedSocial[key]}
							svgColor={color}
							hover={hover}
							width={width}
							height="auto"
						/>
					</a>
				);
			})}
		</Flex>
	);
};

SocialMedia.defaultProps = {
	hover: null,
	width: null,
	gap: '10px',
};

export default SocialMedia;
