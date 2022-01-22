import { css } from 'styled-components';

export const OLLIST_STYLE = {
	base: css`
		color: ${props => props.theme.color.white};
	`,
	red: css`
		color: ${props => props.theme.color.purple};
	`,
};
