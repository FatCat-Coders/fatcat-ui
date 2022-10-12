import React from 'react';
import { Properties } from 'csstype';
import { DefaultTheme, CSSProp } from 'styled-components';

import { HoverTypes } from '../../../theme/props';

import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

// Atoms
import { Flex } from '../../Atoms/Flex';
import { Link } from '../../Atoms/Link';
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
	color?: keyof DefaultTheme['color']
	hover?: HoverTypes
	width?: Properties['width']
	gap?: Properties['gap']
	css?: CSSProp
}

const SocialMedia: React.FC<TSocialMedia> = (props) => {
	const {
		socials,
		color,
		hover,
		gap,
		width,
		css,
	} = props;
	return (
		<Flex
			maxWidth="fit-content"
			height="fit-content"
			gap={gap}
			alignItems="center"
			css={css}
		>
			{Object.entries(socials).map((obj) => {
				const [key, value] = obj as [SOCIAL_MEDIA, string];
				return (
					<Link
						key={key}
						aria-label={key}
						title={key}
						href={value}
						target="_blank"
						rel="noreferrer"
						variant="noStyle"
						display="inline-flex"
						padding={['t4', 'r4', 'l4', 'b4']}
					>
						<Icon
							as={mappedSocial[key]}
							svgColor={color}
							hover={hover}
							width={width}
							height="auto"
						/>
					</Link>
				);
			})}
		</Flex>
	);
};

SocialMedia.defaultProps = {
	color: undefined,
	hover: undefined,
	width: undefined,
	gap: '4px',
	css: undefined,
};

export default SocialMedia;
