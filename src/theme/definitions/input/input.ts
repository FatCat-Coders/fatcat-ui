import { css } from 'styled-components';

export type TINPUT_VARIANT = {
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
export const INPUT_VARIANT = {
	base: css<TINPUT_VARIANT>`
		width: 100%;
		appearance: none;
		outline: none;
		border-radius: 4px;
		border: 1px solid ${props => props.theme.color.grey200};
		padding: ${props => props.theme.space.s1} ${props => props.theme.space.s4};
		color: ${props => props.theme.textColor.neutrals800};
		background: ${props => props.theme.textColor.white};
		font-size: ${props => props.theme.fontSize.s16};
		line-height: ${props => props.theme.lineHeight.s150};
		margin-bottom: ${props => props.theme.space.s5};

		&:hover,
		&:focus {
			border-color: ${props => props.theme.color.primary};
		}

		${props => props.customInput && css`
			padding-top: ${props.theme.space.s4};
			padding-bottom: ${props.theme.space.s3};

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
				border-color: ${props.theme.color.warning} !important;
				& ~ label {
					color: ${props.theme.color.warning} !important;
				}
			`}
		`};

    `,
	noStyle: css``,
};
