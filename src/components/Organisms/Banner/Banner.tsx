import React from 'react';
import { Properties } from 'csstype';
import { DefaultTheme, CSSProp } from 'styled-components';
import { SpaceProps } from '../../../theme/props';

// Atoms
import Section from '../../Molecules/Section';
import { Flex } from '../../Atoms/Flex';
import { Button } from '../../Atoms/Button';
import { Paragraph } from '../../Atoms/Paragraph';

export type TBanner = {
	content: string | React.ReactNode
	buttonContent: string | React.ReactNode
	buttonVariant: keyof DefaultTheme['buttonVariant'] | undefined
	buttonColor?: keyof DefaultTheme['buttonColor'] | undefined
	backgroundColor?: keyof DefaultTheme['backgroundColor']
	backgroundColorHex?: Properties['backgroundColor']
	backgroundColorOpacity?: number
	backgroundImage?: string
	backgroundRepeat?: Properties['backgroundRepeat']
	backgroundPosition?: Properties['backgroundPosition']
	backgroundSize?: Properties['backgroundSize']
	textColor?: keyof DefaultTheme['textColor']
	scale?: boolean
	styled?: CSSProp
	padding?: SpaceProps['padding']
}

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
				gap="40px"
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
					buttonColor={buttonColor}
				>
					{buttonContent}
				</Button>
			</Flex>
		</Section>
	);
};

Banner.defaultProps = {
	backgroundColor: 'primary',
	backgroundColorHex: undefined,
	backgroundColorOpacity: undefined,
	backgroundImage: undefined,
	backgroundRepeat: undefined,
	backgroundPosition: undefined,
	backgroundSize: undefined,
	scale: true,
	textColor: 'white',
	padding: ['t80', 'b80'],
	styled: undefined,
	buttonColor: 'white',
};

export default Banner;
