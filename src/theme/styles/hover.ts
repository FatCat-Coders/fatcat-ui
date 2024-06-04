import { css, DefaultTheme } from 'styled-components';
import { Properties } from 'csstype';

export const HOVER_BEHAVIORS = {
	scaleUp: css`
		transform: scale(1.2);
	`,
	pointer: css`
		cursor: pointer;
	`,
	underline: css`
		text-decoration: underline;
	`,
	textYellow: css`
		color: ${props => props.theme.color.yellow700};
	`,
	textYellowWithChildren: css`
		color: ${props => props.theme.color.yellow700};
		* {
			color: ${props => props.theme.color.yellow700};
		}
	`,
	fullOpacity: css`
		opacity: 1;
	`,
	opacity: (value: Properties['opacity']) => css`
		opacity: ${value};
	`,
	textColor: (value: keyof DefaultTheme['textColor']) => css`
		color: ${props => props.theme.textColor[value]};
	`,
	textColorHex: (value: string) => css`
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
