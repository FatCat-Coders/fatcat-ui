import React from 'react';
import { Properties } from 'csstype';
import { DefaultTheme, CSSProp } from 'styled-components';

import { HoverTypes } from '../../../theme/props';

// Atoms
import { Flex } from '../../Atoms/Flex';
import { Link } from '../../Atoms/Link';
import { Icon } from '../../Atoms/Icon';

export type SOCIAL_MEDIA = 'facebook' | 'instagram' | 'linkedin' | 'twitter';

export const mappedSocial = {
	facebook: React.lazy(() => import('@react-icons/all-files/fa/FaFacebookF').then(module => ({ default: module.FaFacebookF }))),
	twitter: React.lazy(() => import('@react-icons/all-files/fa/FaTwitter').then(module => ({ default: module.FaTwitter }))),
	instagram: React.lazy(() => import('@react-icons/all-files/fa/FaInstagram').then(module => ({ default: module.FaInstagram }))),
	linkedin: React.lazy(() => import('@react-icons/all-files/fa/FaLinkedinIn').then(module => ({ default: module.FaLinkedinIn }))),
	google: React.lazy(() => import('@react-icons/all-files/fa/FaGooglePlusG').then(module => ({ default: module.FaGooglePlusG }))),
	github: React.lazy(() => import('@react-icons/all-files/fa/FaGithub').then(module => ({ default: module.FaGithub }))),
};

export const mappedSocialSquare = {
	facebook: React.lazy(() => import('@react-icons/all-files/fa/FaFacebookSquare').then(module => ({ default: module.FaFacebookSquare }))),
	twitter: React.lazy(() => import('@react-icons/all-files/fa/FaTwitterSquare').then(module => ({ default: module.FaTwitterSquare }))),
	instagram: React.lazy(() => import('@react-icons/all-files/fa/FaInstagramSquare').then(module => ({ default: module.FaInstagramSquare }))),
	linkedin: React.lazy(() => import('@react-icons/all-files/fa/FaLinkedin').then(module => ({ default: module.FaLinkedin }))),
	google: React.lazy(() => import('@react-icons/all-files/fa/FaGooglePlusSquare').then(module => ({ default: module.FaGooglePlusSquare }))),
	github: React.lazy(() => import('@react-icons/all-files/fa/FaGithubSquare').then(module => ({ default: module.FaGithubSquare }))),
};

export type TSocialMedia = {
	socials: { [key in SOCIAL_MEDIA]: string }
	color?: keyof DefaultTheme['color']
	hover?: HoverTypes
	square?: boolean
	size?: Properties['width']
	gap?: Properties['gap']
	css?: CSSProp
}

const SocialMedia: React.FC<TSocialMedia> = (props) => {
	const {
		socials,
		color,
		hover,
		gap,
		size,
		square,
		css,
	} = props;
	const icons = square ? mappedSocialSquare : mappedSocial;
	return (
		<Flex
			maxW="fit-content"
			h="fit-content"
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
						<React.Suspense fallback={(<span style={{ height: size || '16px' }} />)}>
							<Icon
								as={icons[key]}
								svgColor={color}
								hover={hover}
								w={size}
								h="auto"
							/>
						</React.Suspense>
					</Link>
				);
			})}
		</Flex>
	);
};

SocialMedia.defaultProps = {
	color: undefined,
	hover: undefined,
	size: undefined,
	square: true,
	gap: '4px',
	css: undefined,
};

export default SocialMedia;
