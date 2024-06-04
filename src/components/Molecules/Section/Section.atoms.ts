import styled, { DefaultTheme } from 'styled-components';
import { UIprops } from '../../../utils/ui-props';
import {
	background, BackgroundProps,
	customCss, CustomCssProps,
	position, PositionProps,
	visibility, VisibilityProps,
	overflow, OverflowProps,
	space, SpaceProps,
	responsive, ResponsiveProps,
} from '../../../theme/props';

export type TContainer =
	& {
		sectionVariant?: keyof DefaultTheme['sectionVariant'];
	}
    & BackgroundProps
    & ResponsiveProps
    & VisibilityProps
    & PositionProps
    & CustomCssProps
    & OverflowProps
	& SpaceProps;

export const Container = styled.section.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
})<TContainer>`
	width: 100%;
	display: flex;
	justify-content: center;
	${props => props.theme.sectionVariant[props.sectionVariant]?.container};

	${background};
	${position};
	${visibility};
    ${overflow};
	${space};
	${responsive};
	${customCss};
`;

export type TContent =
	& {
		sectionVariant?: keyof DefaultTheme['sectionVariant'];
	}
	& SpaceProps
	& ResponsiveProps
	& CustomCssProps;

export const Content = styled.div.withConfig({
	shouldForwardProp: (prop, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
}) <TContent>`
	${props => props.theme.sectionVariant[props.sectionVariant]?.content};
	${space};
	${responsive};
	${customCss};
`;
