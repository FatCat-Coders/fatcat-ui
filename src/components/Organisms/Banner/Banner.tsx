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
	css?: CSSProp
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
		css,
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
			css={css}
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
					width="50%"
					tablet={[
						{ width: '100%' },
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
	backgroundColorHex: null,
	backgroundColorOpacity: null,
	backgroundImage: null,
	backgroundRepeat: null,
	backgroundPosition: null,
	backgroundSize: null,
	scale: true,
	textColor: 'white',
	padding: ['t80', 'b80'],
	css: null,
	buttonColor: 'white',
};

export default Banner;
