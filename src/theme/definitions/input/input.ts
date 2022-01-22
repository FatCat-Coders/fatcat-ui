import { css } from 'styled-components';

export const INPUT_STYLE = {
	base: css`
		appearance: none;
		border: 1px solid ${props => props.theme.color.white};
        padding: 21px;
        color: ${props => props.theme.textColor.primary};
		opacity: 50%;
        font-weight: ${props => props.theme.fontWeight.bold};
		background: none;
		position: relative;
		outline: 0;
		-webkit-background-clip: text;
		${props => props.theme.textSize.button};

		&:hover {
			border-color: ${props => props.theme.color.white};
            opacity: 100%;
		}

		&:focus {
			border-color: ${props => props.theme.color.yellow};
		}
		&::placeholder {
			color: ${props => props.theme.color.white};
			opacity: 50%;
			text-transform: uppercase;
		}
    `,
};
