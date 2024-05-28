import { css } from 'styled-components';

export const focusStyle = css`
    &:focus-visible {
        border-radius: 8px;
        box-shadow: 0 0 0 4px rgba(92, 98, 249, 0.32);
    }
    &:focus:not(:focus-visible) {
        border-radius: initial;
        box-shadow: initial;
    }
    &:focus {
        position: relative;
        &:before {
            content: initial;
            position: initial;
            left: initial;
            right: initial;
            top: initial;
            bottom: initial;
            border-radius: initial;
            border: initial;
            outline: initial;
            box-sizing: initial;
            pointer-events: initial;
        }
    }

    &:focus-visible {
        position: relative;
        outline: unset;
        &:before {
            content: initial;
            position: initial;
            left: initial;
            right: initial;
            top: initial;
            bottom: initial;
            border-radius: initial;
            border: initial;
            outline: initial;
            box-sizing: initial;
            pointer-events: initial;
        }
    }
`;

export const focusState = (borderColor?: string) => `
    &:focus-visible {
        border-color: ${borderColor ?? 'unset'};
        border-radius: 8px;
        box-shadow: 0 0 0 4px rgba(92, 98, 249, 0.32);
    }
    &:focus:not(:focus-visible) {
        border-radius: initial;
        box-shadow: initial;
        border-color: initial;
    }

`;
