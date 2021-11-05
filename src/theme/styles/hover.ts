import { css } from 'styled-components';

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
		color: ${props => props.theme.color.yellow};
	`,
	textYellowWithChildren: css`
		color: ${props => props.theme.color.yellow};
		* {
			color: ${props => props.theme.color.yellow};
		}
	`,
	fullOpacity: css`
		opacity: 100%;
	`,
	opacity95: css`
		opacity: 95%;
	`,
	backgroundBlackLighter: css`
		background-color: ${props => props.theme.color.blackLighter};
	`,
	backgroundWhite: css`
		background-color: white;
	`,
	textColorBlack: css`
		color: ${props => props.theme.color.black};
	`,
	unset: css`
		border-bottom: unset;
	`,
	zoom: (value: number) => css`
		transform: scale(${value})
	`,
};
