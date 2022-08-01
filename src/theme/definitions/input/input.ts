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

export const INPUT_STYLE = {
	base: css<TINPUT_STYLE>`
		width: 100%;
		appearance: none;
		outline: 0;
		border-radius: 4px;
		border: 1px solid ${props => props.theme.color.grey200};
		padding: ${props => props.theme.space.s16};
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
			position: relative;
			padding-bottom: ${props.theme.space.s12};

			& ~ label {
				position: absolute;
				top: calc(50% - 10px);
				left: 17px;
				width: calc(100% - 34px);
				transform: translateY(-50%);
				color: ${props.theme.color.grey};
				font-size: ${props.theme.fontSize.s16};
				z-index: 10;
				pointer-events: none;
			}

			@supports (not (-ms-ime-align:auto)) {
				&:focus ~ label,
				&:not(:placeholder-shown) ~ label {
					color: ${props.theme.color.primary};
					font-size: 70%;
					z-index: 2;
					top: 15%;
					transform-origin: left center;
					transition: all 0.3s ease-in-out;
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
