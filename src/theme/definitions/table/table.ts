import { css } from 'styled-components';

export const TABLE_VARIANT = {
	pricing: css`
		color: ${props => props.theme.color.neutrals50};
		width: 100%;
		text-align: left;
    `,
} as const;
