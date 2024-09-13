import React from 'react';
import { Properties } from 'csstype';
import { DefaultTheme, CSSProp } from 'styled-components';
import { SpaceProps } from '../../../theme/props';

// Atoms
import { Section } from '../../Molecules/Section';
import { Flex } from '../../Atoms/Flex';
import { Button } from '../../Atoms/Button';
import { Paragraph } from '../../Atoms/Paragraph';

export type TBanner = {
	content: string | React.ReactNode
	buttonContent: string | React.ReactNode
	buttonVariant: keyof DefaultTheme['buttonVariant'] | undefined
	// eslint-disable-next-line react/require-default-props
	buttonColor?: keyof DefaultTheme['buttonColor'] | undefined
	backgroundColor?: keyof DefaultTheme['color']
	backgroundColorHex?: Properties['color']
	backgroundColorOpacity?: number
	backgroundImage?: string
	backgroundRepeat?: Properties['backgroundRepeat']
	backgroundPosition?: Properties['backgroundPosition']
	backgroundSize?: Properties['backgroundSize']
	textColor?: keyof DefaultTheme['color']
	scale?: boolean
	styled?: CSSProp
	padding?: SpaceProps['padding']
}

// eslint-disable-next-line react/function-component-definition
const Banner: React.FC<TBanner> = (props) => {
	const {
		backgroundImage,
		backgroundColor,
		backgroundColorHex,
		backgroundColorOpacity,
		backgroundRepeat,
		backgroundPosition,
		backgroundSize,
		content,
		buttonContent,
		buttonColor,
		buttonVariant,
		scale,
		textColor,
		padding,
		styled,
	} = props;

	return (
		<Section
			variant="default"
			backgroundImage={backgroundImage}
			backgroundColor={backgroundColor}
			backgroundColorHex={backgroundColorHex}
			backgroundColorOpacity={backgroundColorOpacity}
			backgroundRepeat={backgroundRepeat}
			backgroundPosition={backgroundPosition}
			backgroundSize={backgroundSize}
			scale={scale}
			padding={padding}
			styled={styled}
		>
			<Flex
				justifyContent="space-between"
				gap="s10"
				alignItems="center"
				tablet={[
					'column',
				]}
			>
				<Flex
					w="50%"
					tablet={[
						{ w: '100%' },
					]}
				>
					<Paragraph
						textColor={textColor}
					>
						{content}
					</Paragraph>
				</Flex>
				<Button
					variant={buttonVariant}
					color={buttonColor}
				>
					{buttonContent}
				</Button>
			</Flex>
		</Section>
	);
};

Banner.defaultProps = {
	backgroundColor: 'primary600',
	backgroundColorHex: undefined,
	backgroundColorOpacity: undefined,
	backgroundImage: undefined,
	backgroundRepeat: undefined,
	backgroundPosition: undefined,
	backgroundSize: undefined,
	scale: true,
	textColor: 'neutrals50',
	padding: ['t80', 'b80'],
	styled: undefined,
};

export default Banner;
