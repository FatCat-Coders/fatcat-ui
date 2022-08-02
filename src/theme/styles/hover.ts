import { css, DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';

export const HOVER_BEHAVIORS = {
	scaleUp: css`
		transform: scale(1.2);
	`,
	underline: css`
		text-decoration: underline;
	`,
	textYellow: css`
		color: ${props => props.theme.color.yellow};
	`,
	textYellowWithChildren: css`
		color: ${props => props.theme.color.yellow};
		* {
			color: ${props => props.theme.color.yellow};
		}
	`,
	fullOpacity: css`
		opacity: 1;
	`,
	opacity: (value: Properties['opacity']) => css`
		opacity: ${value};
	`,
	textColor: (value: keyof DefaultTheme['color']) => css`
		color: ${props => props.theme.color[value]};
	`,
	textColorHex: (value: Properties['color']) => css`
		color: ${value};
	`,
	backgroundColor: (value: keyof DefaultTheme['backgroundColor']) => css`
		background-color: ${props => props.theme.backgroundColor[value]};
	`,
	backgroundColorHex: (value: Properties['backgroundColor']) => css`
		background-color: ${value};
	`,
	boxShadow: (value: Properties['boxShadow']) => css`
		box-shadow: ${value};
	`,
	borderColor: (value: keyof DefaultTheme['color']) => css`
		border-color: ${props => props.theme.color[value]};
	`,
	borderColorHex: (value: Properties['borderColor']) => css`
		border-color: ${value};
	`,
	borderUnset: css`
		border: unset;
	`,
	transform: (value: Properties['transform']) => css`
		transform: ${value};
	`,
	zoom: (value: number) => css`
		transform: scale(${value});
	`,
};
