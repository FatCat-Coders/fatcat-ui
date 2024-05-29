import { css, DefaultTheme } from 'styled-components';
import { focusStyle } from '../../../utils/focusStyle';

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
	extraLarge: css`
		height: 56px;
		border-radius: 8px;
		${ui1Medium}
	`,
	large: css`
		height: 44px;
		border-radius: 6px;
		${ui2Medium}
	`,
	medium: css`
		height: 40px;
		border-radius: 6px;
		${ui2Medium}
	`,
	small: css`
		height: 36px;
		border-radius: 6px;
		${ui3Medium}
	`,
	navLink: css`
		height: 40px;
		${ui2Medium}
	`,
	textLink: css`
		height: 24px;
		${ui1Medium}
	`,
	textLinkSmall: css`
		height: 24px;
		${ui2Medium}
	`,
};

const underlineHeight = '2px';

const buttonBase = ({ size, theme, buttonColor }: { size: keyof DefaultTheme['buttonSize'], theme: DefaultTheme, buttonColor: keyof DefaultTheme['buttonColor'], }) => css`
 	${props => size && props.theme.buttonSize[size]};
	padding-left: 20px;
	padding-right: 20px;
    border-radius: 6px;
	background: ${props => props.theme.buttonColor[buttonColor].default.background};
	color: ${props => props.theme.buttonColor[buttonColor].default.text};
	transition: background 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out;

	&:hover:enabled {
            background: ${props => props.theme.buttonColor[buttonColor].hover.background};
            color: ${props => props.theme.buttonColor[buttonColor].hover.text};
    }
	&:active:enabled {
		background: ${props => props.theme.buttonColor[buttonColor].pressed.background};
		color: ${props => props.theme.buttonColor[buttonColor].pressed.text};
	}
	&:focus-visible {
		background: ${props => props.theme.buttonColor[buttonColor].focus.background};
		color: ${props => props.theme.buttonColor[buttonColor].focus.text};
		box-shadow: 0 0 0 4px ${props => props.theme.buttonColor[buttonColor].focus.shadowColor};

		&:before {
			display: none;
		}
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.3;
	}
`;

export const BUTTON_VARIANT = {
	primary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		${props => buttonBase(props)};
	`,
	secondary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`  
		${props => buttonBase(props)};
	`,
	ghost: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		${props => buttonBase(props)};
	`,
	outline: css<{
		buttonColor: keyof DefaultTheme['buttonColor'];
		size: keyof DefaultTheme['buttonSize'];
	}>`
		${props => buttonBase(props)};
		border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].default.text};
		&:hover:enabled {
			border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].hover.text};
		}
		&:active:enabled {
			border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].pressed.text};
		}
		&:focus-visible {
			border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].focus.text};
		}
	`,
	feedback: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
		${props => buttonBase(props)};
    `,
	textLink: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
		${props => buttonBase(props)}; 
        ${focusStyle}
        padding: 0px;
		padding-left: 2px;
		padding-right: 2px;

        &::after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            background: ${props => props.theme.buttonColor[props.buttonColor].default.text};
            transition: width 0.2s;
        }
		&:hover::after, &:active::after, &:focus-visible::after{
            width: 100%;
        }
        &:hover {
            color: ${props => props.theme.buttonColor[props.buttonColor].hover.text};
        }
        &:active {
            color: ${props => props.theme.buttonColor[props.buttonColor].pressed.text};
        }
       
        &:hover  #text-link-trailing-icon, &:active  #text-link-trailing-icon, &:focus-visible  #text-link-trailing-icon  {
			transform: translateX(4px);
  			transition: transform 0.5s ease;
        } 
		&:focus-visible{
			border-radius: 2px;
		}
  
    `,
	navLink: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
		${props => buttonBase(props)}; 
		padding: 0px;

        &::after {
            content: '';
            display: block;
            width: 0;
            height: ${underlineHeight};
            background:  ${props => props.theme.buttonColor[props.buttonColor].hover.underLineColor};
            transition: width 0.2s;
        }
        &:hover::after {
            width: 100%;
			background:  ${props => props.theme.buttonColor[props.buttonColor].hover.underLineColor};
        }
		&:active::after {
           background:  ${props => props.theme.buttonColor[props.buttonColor].pressed.underLineColor};
        }
		&:focus:not(:focus-visible)::after {
            width: 0;
        }
        &:focus-visible {
            &:before {
                content: unset;
            }
        }
        &:focus {
            &:before {
                content: unset;
            }
        }
        &:focus-visible {
            box-shadow: none;
        }
		&:focus-visible::after {
			width: 100%;
			background: ${props => props.theme.buttonColor[props.buttonColor].hover.underLineColor};
        }
    `,
	noStyle: css``,
};
