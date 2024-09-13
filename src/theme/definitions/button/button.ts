import { css, DefaultTheme } from 'styled-components';

// todo update sizes to UI 1,2,3/Medium-600 in textSize file (task: theme)
const ui1Medium = css`
	
	font-family: Satoshi Variable;
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	letter-spacing: 0.20000000298023224px;
	text-align: left;
`;

const ui2Medium = css`
	font-family: Satoshi Variable;
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	letter-spacing: 0.20000000298023224px;
	text-align: left;
`;
const ui3Medium = css`
	font-family: Satoshi Variable;
	font-size: 15px;
	font-weight: 600;
	line-height: 16px;
	letter-spacing: 0.20000000298023224px;
	text-align: left;
`;

export const BUTTON_SIZE = {
	extraLarge: {
		styles: css`
			height: 56px;
			border-radius: 8px;
			${ui1Medium}
		`,
		iconSize: 24,
	},
	large: {
		styles: css`
			height: 44px;
			border-radius: 6px;
			${ui2Medium}
		`,
		iconSize: 24,
	},
	medium: {
		styles: css`
			height: 40px;
			border-radius: 6px;
			${ui2Medium}
		`,
		iconSize: 20,
	},
	small: {
		styles: css`
			height: 36px;
			border-radius: 6px;
			${ui3Medium}
		`,
		iconSize: 20,
	},
	navLink: {
		styles: css`
			height: 40px;
			${ui2Medium}
		`,
		iconSize: 20,
	},
	textLink: {
		styles: css`
			height: 24px;
			${ui1Medium}
		`,
		iconSize: 20,
	},
	textLinkSmall: {
		styles: css`
			height: 24px;
			${ui2Medium}
		`,
		iconSize: 20,
	},
} as const;

export type TButtonBase = {
	color: keyof DefaultTheme['buttonColor'];
	size: keyof DefaultTheme['buttonSize'];
}

const buttonBase = ({ size, color }: TButtonBase) => css`
 	${props => size && props.theme.buttonSize[size].styles};
	padding-left: 20px;
	padding-right: 20px;
    border-radius: 6px;
	display: flex;
	gap: 4px;
	align-items: center;
	background: ${props => props.theme.buttonColor[color].default.background};
	color: ${props => props.theme.buttonColor[color].default.text};
	transition: background 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out;

	&:hover:enabled {
            background: ${props => props.theme.buttonColor[color].hover.background};
            color: ${props => props.theme.buttonColor[color].hover.text};
    }
	&:active:enabled {
		background: ${props => props.theme.buttonColor[color].pressed.background};
		color: ${props => props.theme.buttonColor[color].pressed.text};
	}
	&:focus-visible {
		background: ${props => props.theme.buttonColor[color].focus.background};
		color: ${props => props.theme.buttonColor[color].focus.text};
		box-shadow: 0 0 0 4px ${props => props.theme.buttonColor[color].focus.ringColor};

		&:before {
			display: none;
		}
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.3;
	}
`;

const textPaddingX = 's4';
const textPaddingBottom = 's2';

export const BUTTON_VARIANT = {
	primary: {
		styles: css<TButtonBase>`
			${props => buttonBase(props)};
		`,
		textPadding: {
			x: textPaddingX,
			bottom: textPaddingBottom,
		},
	},
	secondary: {
		styles: css<TButtonBase>`  
			${props => buttonBase(props)};
		`,
		textPadding: {
			x: textPaddingX,
			bottom: textPaddingBottom,
		},
	},
	ghost: {
		styles: css<TButtonBase>`
			${props => buttonBase(props)};
		`,
		textPadding: {
			x: textPaddingX,
			bottom: textPaddingBottom,
		},
	},
	outline: {
		styles: css<TButtonBase>`
			${props => buttonBase(props)};
			border: 2px solid ${props => props.theme.buttonColor[props.color].default.text};
			&:hover:enabled {
				border: 2px solid ${props => props.theme.buttonColor[props.color].hover.text};
			}
			&:active:enabled {
				border: 2px solid ${props => props.theme.buttonColor[props.color].pressed.text};
			}
			&:focus-visible {
				border: 2px solid ${props => props.theme.buttonColor[props.color].focus.text};
			}
		`,
		textPadding: {
			x: textPaddingX,
			bottom: textPaddingBottom,
		},
	},
	textLink: {
		styles: css<TButtonBase>`
			${props => buttonBase(props)}; 
			padding: 0px;
			padding-left: 2px;
			padding-right: 2px;
			gap: 6px;

			&::after {
				content: '';
				display: block;
				width: 0;
				height: 1px;
				background: ${props => props.theme.buttonColor[props.color].default.text};
				transition: width 0.2s;
			}
			&:hover::after, &:active::after, &:focus-visible::after{
				width: 100%;
			}
			&:hover {
				color: ${props => props.theme.buttonColor[props.color].hover.text};
			}
			&:active {
				color: ${props => props.theme.buttonColor[props.color].pressed.text};
			}
		
			&:hover :last-of-type svg, &:active :last-of-type svg ,&:focus-visible :last-of-type svg {
				transform: translateX(4px);
				transition: transform 0.5s ease;
			}

			&:focus-visible{
				border-radius: 2px;
			}
	
		`,
		textPadding: {
			x: 's0',
			bottom: 's0',
		},
	},
	navLink: {
		styles: css<TButtonBase>`
			${props => buttonBase(props)}; 
			padding: 0px;

			&::after {
				content: '';
				display: block;
				width: 0;
				height: 2px;
				background:  ${props =>
	// @ts-expect-error TODO: fix this when fixing types
		props.theme.buttonColor[props.color].hover.underLineColor
};
				transition: width 0.2s;
			}
			&:hover::after {
				width: 100%;
				background:  ${props =>
	// @ts-expect-error TODO: fix this when fixing types
		props.theme.buttonColor[props.color].hover.underLineColor
};
			}
			&:active::after {
				width: 100%;
			background:  ${props =>
	// @ts-expect-error TODO: fix this when fixing types
		props.theme.buttonColor[props.color].pressed.underLineColor
};
			}
			&:focus-visible {
				box-shadow: none;
			}
			&:focus-visible::after {
				width: 100%;
				background: ${props =>
	// @ts-expect-error TODO: fix this when fixing types
		props.theme.buttonColor[props.color].hover.underLineColor
};
			}
		`,
		textPadding: {
			x: 's2',
			bottom: 's0',
		},
	},
};
