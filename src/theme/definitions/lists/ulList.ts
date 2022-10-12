import { css, DefaultTheme } from 'styled-components';

export const ULLIST_STYLE = {
	base: css<{ bulletColor?: keyof DefaultTheme['color'] }>`
		li::before {
			content: "•";
			font-weight: bold;
			display: inline-block;
			margin-right: clamp(8px, 0.35em, 0.35em);
			${props => props.bulletColor && `color: ${props.theme.color[props.bulletColor]};`}
		}
	`,
	checked: css<{ bulletColor?: keyof DefaultTheme['color'] }>`
		li::before {
			content: "";
			display: inline-block;

			/* position the checkbox */
			margin-right: clamp(8px, 0.6em, 0.6em);

			/* setting the checkbox */
			/* short arm */
			min-width: 0.4em;
			border-bottom: 0.15em solid ${props => (props.bulletColor ? props.theme.color[props.bulletColor] : 'rgba(255, 255, 255)')};
			/* long arm */
			height: 0.65em;
			border-right: 0.15em solid ${props => (props.bulletColor ? props.theme.color[props.bulletColor] : 'rgba(255, 255, 255)')};

			/* rotate the mirrored L to make it a checkbox */
			transform: rotate(45deg) translate(0.25em, -0.05em);
		}
	`,
	dashed: css<{ bulletColor?: keyof DefaultTheme['color'] }>`
		li::before {
			content: "-";
			font-weight: bold;
			display: inline-block;
			margin-right: clamp(8px, 0.35em, 0.35em);
			${props => props.bulletColor && `color: ${props.theme.color[props.bulletColor]};`}
		}
	`,
	noStyle: css``,
};
