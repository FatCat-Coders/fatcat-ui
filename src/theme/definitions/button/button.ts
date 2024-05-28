import { css, DefaultTheme } from 'styled-components';
import { focusStyle } from '../../../utils/focusStyle';

const ui1Medium = css`
	// todo update sizes to UI 1/Medium-600
	//styleName: UI 1/Medium-600;
	font-family: Satoshi Variable;
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	letter-spacing: 0.20000000298023224px;
	text-align: left;
`;

const ui2Medium = css`
	// todo update sizes to UI 2/Medium-600
	//styleName: UI 1/Medium-600;
	font-family: Satoshi Variable;
	font-size: 18px;
	font-weight: 600;
	line-height: 18px;
	letter-spacing: 0.20000000298023224px;
	text-align: left;
`;
const ui3Medium = css`
	// todo update sizes to UI 3/Medium-600
	//styleName: UI 3/Medium-600;
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
	nav: css`
		height: 40px;
	`,
	textLink: css`
		height: 24px;
	`,
	textLinkSmall: css`
		height: 24px;
	`,
};

const underlineHeight = '2px';

const buttonBase1 = css<{size: keyof DefaultTheme['buttonSize']}>`
	${props => props.theme.textVariant.button};// todo cemu sluzi
    ${props => props.size && props.theme.buttonSize[props.size]};
	padding-left: 20px;
	padding-right: 20px;
    border-radius: 6px;
`;

const buttonBase = ({ size, theme, buttonColor }: { size: keyof DefaultTheme['buttonSize'], theme: DefaultTheme, buttonColor: keyof DefaultTheme['buttonColor'], }) => css`
 	${buttonBase1}
	background: ${props => props.theme.buttonColor[buttonColor].default.background};
	color: ${props => props.theme.buttonColor[buttonColor].default.text};
	&:hover:enabled {
            background: ${props => props.theme.buttonColor[buttonColor].hover.text};
            color: ${props => props.theme.buttonColor[buttonColor].hover.background};
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
			//todo da li ce ovo pregaziti bg i text ili samo dodati
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
		${props => buttonBase(props)};//todo proveriti kako izgleda
    `,
	textLink: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
	//todo
        border: none;
        color: ${props => props.theme.buttonColor[props.buttonColor].text};
		${props => buttonBase(props)};
        font-weight: 600;
        ${focusStyle}
        padding: 0px;
        border-radius: 2px;

        &::after {
            content: '';
            display: block;
            width: 0;
            height: 2px;
            background: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
            transition: width 0.2s;
        }

        &:hover::after {
            width: 100%;
        }
        &:hover {
            color: ${props =>
		props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:active {
            color: ${props =>
		props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:disabled {
            cursor: not-allowed;
            color: ${props => props.theme.buttonColor.disabled.text};
        }
        #button-base-inner-wrapper {
            padding-top: 4px;
            padding-bottom: calc(4px - ${underlineHeight});
            padding-left: 2px;
            padding-right: 4px;
        }
    `,
	navLink: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
	//todo
        border: none;
        color: ${props => props.theme.buttonColor[props.buttonColor].text};
        ${buttonBase};
        font-weight: 600;
        padding: 0px;

        &:focus-visible::after {
            width: 100%;
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
        &::after {
            content: '';
            display: block;
            width: 0;
            height: ${underlineHeight};
            background: ${props => props.theme.color.primary};
            transition: width 0.2s;
        }
        &:hover::after {
            width: 100%;
        }
        &:hover {
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:active {
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:disabled {
            cursor: not-allowed;
            color: ${props => props.theme.buttonColor.disabled.text};
        }
        ${props => props.theme.media.tablet} {
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
            font-size: 18px;
        }
        &:focus-visible {
            box-shadow: none;
        }
        #button-base-inner-wrapper {
            padding-top: 12px;
            padding-bottom: calc(12px - ${underlineHeight});
            padding-left: 2px;
            padding-right: 2px;
            ${props => props.theme.media.tablet} {
                padding-top: 16px;
                padding-bottom: calc(16px - ${underlineHeight});
            }
        }
    `,
	noStyle: css``,
};
