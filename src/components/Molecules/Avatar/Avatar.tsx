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
	styled?: CSSProp
	textColor?: keyof DefaultTheme['textColor']
}

export const sizes = {
	xsmall: '32px',
	small: '64px',
	medium: '100px',
	large: '150px',
	xlarge: '200px',
};

function Avatar(props: TAvatar) {
	const {
		image,
		imageAlt,
		profile,
		profileAlt,
		title,
		subtitle,
		size,
		textColor,
		styled,
	} = props;
	const sizeValue = sizes[size as keyof typeof sizes] || size;
	return (
		<Flex
			w="fit-content"
			direction="column"
			alignItems="center"
			minW={profile ? `calc(${sizeValue} + (${sizeValue} * 0.2))` : undefined}
			styled={styled}
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
					fontWeight="medium"
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
}

Avatar.defaultProps = {
	imageAlt: '',
	profile: undefined,
	profileAlt: '',
	title: undefined,
	subtitle: undefined,
	size: 'medium',
	styled: undefined,
	textColor: 'neutrals800',
};

export default Avatar;
