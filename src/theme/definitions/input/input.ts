import { css } from 'styled-components';

export type TINPUT_STYLE = {
	customInput?: boolean
	/**
	 * customInput: style applyed only for our custom input component
	 */
	errorMsg?: string
	/**
	 * errorMsg: style applyed only for our custom input component when error occured
	 */
}

/**
 * Also applied to the textarea element
 */
export const INPUT_STYLE = {
	base: css<TINPUT_STYLE>`
		width: 100%;
		appearance: none;
		outline: 0;
		border-radius: 4px;
		border: 1px solid ${props => props.theme.color.grey200};
		padding: ${props => props.theme.space.s14} ${props => props.theme.space.s16};
		color: ${props => props.theme.textColor.black100};
		background: ${props => props.theme.textColor.white};
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
		margin-bottom: ${props => props.theme.space.s20};

		&:hover,
		&:focus {
			border-color: ${props => props.theme.color.primary};
		}

		${props => props.customInput && css`
			padding-top: ${props.theme.space.s16};
			padding-bottom: ${props.theme.space.s12};

			& ~ label {
				position: absolute;
				top: 18px;
				left: 17px;
				width: calc(100% - 34px);
				color: ${props.theme.color.grey};
				font-size: ${props.theme.fontSize.s16};
				z-index: 10;
				pointer-events: none;
			}

			@supports (not (-ms-ime-align:auto)) {
				&:-webkit-autofill ~ label,
				&:-webkit-autofill:hover ~ label,
				&:-webkit-autofill:focus ~ label,
				&:-webkit-autofill:active ~ label,
				&:focus ~ label,
				&:not(:placeholder-shown) ~ label {
					transform-origin: left center;
					color: ${props.theme.color.primary};
					font-size: 70%;
					z-index: 2;
					top: 6px;
					transition: all 0.3s ease-in-out;
					will-change: top, transform-origin;
				}
			}

			${props.errorMsg && css`
				border-color: ${props.theme.color.warrning} !important;
				& ~ label {
					color: ${props.theme.color.warrning} !important;
				}
			`}
		`};

    `,
	noStyle: css``,
};
