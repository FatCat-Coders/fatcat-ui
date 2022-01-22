import { css } from 'styled-components';

export const ULLIST_STYLE = {
	base: css`
		li::before {
			content: "•";
			position: absolute;
			display: block;
			height: 10px;
			width: 10px;
			left: -24px;
			top: 1px;
			font-size:24px;

			${props => props.theme.media.tablet} {
				top: -6px;
			}
			${props => props.bulletColor && `color: ${props.theme.color[props.bulletColor]}`}
		}
	`,
	checked: css`
		list-style-type: none;
		content: '\\f006';
		font-family: 'FontAwesome';
		background-repeat: no-repeat;

		li::before {
			content: "";
			background-color: transparent;

			/* position the checkbox */
			position: absolute;
			left: -24px;
			top: 6px;

			/* setting the checkbox */
			/* short arm */
			width: 7px;
			border-bottom: 3px solid rgba(255, 255, 255);
			/* long arm */
			height: 13px;
			border-right: 3px solid rgba(255, 255, 255);

			/* rotate the mirrored L to make it a checkbox */
			transform: rotate(45deg);
			-o-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			-webkit-transform: rotate(45deg);
			${props => props.color && `color: ${props.theme.color[props.color]}`}
		}
	`,
};
