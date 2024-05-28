import { css, DefaultTheme } from 'styled-components';
import { focusStyle } from '../../../utils/focusStyle';

export const BUTTON_SIZE = {
	extraLarge: css`
		height: 56px;
		border-radius: 8px;
		${props => props.theme.textSize.h1};// todo update sizes to UI 1/Medium-600
	`,
	large: css`
		height: 44px;
		border-radius: 6px;
		${props => props.theme.textSize.h1};// todo update sizes to UI 2/Medium-600
	`,
	medium: css`
		height: 40px;
		border-radius: 6px;
		${props => props.theme.textSize.h1};// todo update sizes to UI 2/Medium-600
	`,
	small: css`
		height: 36px;
		border-radius: 6px;
		${props => props.theme.textSize.h1};// todo update sizes to UI 3/Medium-600
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

const buttonBase = css<{size: keyof DefaultTheme['buttonSize']}>`
	${props => props.theme.textVariant.button};
    ${props => props.size && props.theme.buttonSize[props.size]};
    height: fit-content;
    border-radius: 6px;

	transition:
            background 200ms ease-out,
            border-color 200ms ease-out,
            color 200ms ease-out;

    /* &:focus-visible {
        box-shadow: 0 0 0 4px #5c62f952;

        &:before {
            display: none;
        }
    } */
`;

// const buttonBase = ({ size, theme }: { size: keyof DefaultTheme['buttonSize'], theme: DefaultTheme }) => css`
//     ${theme.textVariant.button};
//     ${size && theme.buttonSize[size]};
//     height: fit-content;
//     border-radius: 6px;
// `;

export const BUTTON_VARIANT = {
	primary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		background: ${props => props.theme.buttonColor[props.buttonColor].default};
		${buttonBase};
		/* ${props => buttonBase(props)}; */
        &:hover:enabled {
            background: ${props => props.theme.buttonColor[props.buttonColor].hover};
            border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:active:enabled {
            background: ${props => props.theme.color.bluePurple};
            border-color: ${props => props.theme.buttonColor[props.buttonColor].active};
			color: ${props => props.theme.buttonColor[props.buttonColor].text};
        }
        &:disabled {
            cursor: not-allowed;
            opacity: 0.3;
        }
	`,
	secondary: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`  
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
        background: ${props => props.theme.color.gray5};
        border: 2px solid ${props => props.theme.color.gray5};
        ${buttonBase};
        &:hover {
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
            background: ${props => props.theme.buttonColor[props.buttonColor].hover};
            border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
        }
        &:active {
            background: ${props => props.theme.color.gray5};
            border-color: ${props => props.theme.color.gray10};
            color: ${props => props.theme.textColor.gray80};
        }
        &:disabled {
            cursor: not-allowed;
            background: ${props => props.theme.buttonColor.disabled.default};
            border-color: ${props => props.theme.buttonColor.disabled.text};
            color: ${props => props.theme.buttonColor.disabled.text};
        }
	`,
	ghost: css<{ buttonColor: keyof DefaultTheme['buttonColor'], size: keyof DefaultTheme['buttonSize'] }>`
		border: 1px solid ${props => props.theme.color.transparent};
        color: ${props => props.theme.buttonColor[props.buttonColor].text};
        ${buttonBase};
        &:hover {
            background: ${props => props.theme.buttonColor[props.buttonColor].hover};
            border-color: ${props => props.theme.buttonColor[props.buttonColor].hover};
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:active {
            background: ${props => props.theme.color.lightPurple40};
            color: ${props => props.theme.buttonColor[props.buttonColor].hoverText};
        }
        &:disabled {
            cursor: not-allowed;
            color: ${props => props.theme.buttonColor.disabled.text};
        }
	`,
	outline: css<{
		buttonColor: keyof DefaultTheme['buttonColor'];
		size: keyof DefaultTheme['buttonSize'];
	}>`
		border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].default};
		color: ${props => props.theme.buttonColor[props.buttonColor].text};
		${buttonBase};
	`,
	feedback: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
        border: 2px solid ${props => props.theme.buttonColor[props.buttonColor].default};
        color: ${props => props.theme.buttonColor[props.buttonColor].text};
        background: ${props => props.theme.buttonColor[props.buttonColor].hover};
        ${buttonBase};
        &:disabled {
            cursor: not-allowed;
        }
    `,
	textLink: css<{
        buttonColor: keyof DefaultTheme['buttonColor'];
        size: keyof DefaultTheme['buttonSize'];
    }>`
        border: none;
        color: ${props => props.theme.buttonColor[props.buttonColor].text};
        ${buttonBase};
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
