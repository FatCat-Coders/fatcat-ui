import { styled } from '../../../utils/styled';
import { DefaultTheme } from 'styled-components';

export type TTagWrapper = {
	background?: keyof DefaultTheme['color'];
	textColor?: keyof DefaultTheme['textColor'];
};

export const TagWrapper = styled('div')<TTagWrapper>`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	color: ${props => props.theme.color[props.textColor]};
	background:${props => props.background || props.theme.color.lightGrey};
	padding: ${props => props.theme.space.s8} ${props => props.theme.space.s10};
	width: auto;
	text-align: center;
	margin-right: ${props => props.theme.space.s12};
	& > span {
		margin: 0;
		line-height: 1;
		white-space: nowrap;
		text-align: center;
	}

	& > button {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		border: none;
		padding: 0;
		margin-left: ${props => props.theme.space.s8};
		background-color: inherit;
	}
`;

TagWrapper.defaultProps = {
	background: 'lightGrey',
	textColor: 'secondary',
};
