import React from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';

import { Paragraph } from '../../Atoms/Paragraph';
import { Flex } from '../../Atoms/Flex';

import {
	AvatarProfile,
	AvatarWrapper,
} from './Avatar.atoms';

export type TAvatar = {
	image: string | React.ReactElement
	imageAlt?: string
	profile?: string | React.ReactElement
	profileAlt?: string
	title?: string
	subtitle?: string
	size?: string
	css?: CSSProp
	textColor?: keyof DefaultTheme['color']
}

export const sizes = {
	xsmall: '32px',
	small: '64px',
	medium: '100px',
	large: '150px',
	xlarge: '200px',
};

const Avatar: React.FC<TAvatar> = (props) => {
	const {
		image,
		imageAlt,
		profile,
		profileAlt,
		title,
		subtitle,
		size,
		textColor,
		css,
	} = props;
	const sizeValue = sizes[size] || size;
	return (
		<Flex
			width="fit-content"
			direction="column"
			alignItems="center"
			minWidth={profile ? `calc(${sizeValue} + (${sizeValue} * 0.2))` : undefined}
			css={css}
		>
			<AvatarWrapper profile={!!profile} size={sizeValue}>
				{typeof image === 'string' && <img src={image} alt={imageAlt} />}
				{typeof image !== 'string' && image}
				{profile && (
					<AvatarProfile>
						{typeof profile === 'string' && <img src={profile} alt={profileAlt} />}
						{typeof profile !== 'string' && profile}
					</AvatarProfile>
				)}
			</AvatarWrapper>
			{title && (
				<Paragraph
					fontWeight="semiBold"
					margin={['t24']}
					textColor={textColor}
				>
					{title}
				</Paragraph>
			)}
			{subtitle && (
				<Paragraph
					fontSize="s16"
					margin={['t4']}
					textColor={textColor}
				>
					{subtitle}
				</Paragraph>
			)}
		</Flex>
	);
};

Avatar.defaultProps = {
	imageAlt: '',
	profile: null,
	profileAlt: '',
	title: null,
	subtitle: null,
	size: 'medium',
	css: null,
	textColor: 'primary',
};

export default Avatar;
