import { css } from 'styled-components';

export const TABLE_STYLE = {
	pricing: css`
		color: ${props => props.theme.color.white};
		width: 100%;
		text-align: left;
    `,
} as const;
