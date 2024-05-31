import { createGlobalStyle } from 'styled-components';
import { TCookieStyle } from './CookieBanner';
import { darken } from 'polished';

export const CookieStyles = createGlobalStyle<TCookieStyle>`
	.CookieConsent--wrapper {
		position: unset !important;
		background: transparent !important;
		margin: auto;
		padding: 32px 0;
		max-width: ${props => props.theme.sectionWidth.narrow};
		align-items: center !important;
		gap: 48px;

		${props => props.theme.media.tablet} {
			position: relative !important;
			padding: 20px 0;
			gap: 20px;
		}
	}

	.CookieConsent--content {
		display: flex;
		align-items: center;
		gap: 20px;
		margin: 0 !important;
		color: ${props => props.theme.textColor[props.cookieTextColor]};

		${props => props.theme.media.tablet} {
			flex-direction: column;
			gap: 16px;

			svg {
				width: 26px;
				height: 26px;
			}
		}
	}

	.CookieConsent--button-wrapper {
		display: flex;
		gap: 30px;

		${props => props.theme.media.tablet} {
			justify-content: center;
			width: 100%;
		}
	}

	.CookieConsent--accept-button {
		color: ${props => props.theme.color.white} !important;
		background-color: ${props => props.theme.color[props.buttonColor]} !important;
		font-size: 16px !important;
		padding: 10px 40px !important;
		font-weight: bold;
		border-radius: 8px !important;
		margin: 0 !important;

		&:hover {
			background-color: ${props => darken(0.1, props.theme.color[props.buttonColor])} !important;
		}
	}

	.CookieConsent--decline-button {
		background-color: transparent !important;
		margin: 0 !important;
		display: flex;
		align-items: center;

		&:hover {
			svg {
				fill: ${props => (props.declineHoverColor ? props.theme.color[props.declineHoverColor] : darken(0.1, '#67727B'))};
			}
		}

		${props => props.theme.media.tablet} {
			position: absolute !important;
			top: 20px;
			right: 0;
		}
	}

	.CookieConsent--container {
		bottom: 0;
		display: flex;
		top: unset !important;
		height: unset !important;
		background-color: ${props => props.theme.color[props.backgroundColor]} !important;
		padding: ${props => `0 ${props.theme.space.s10}`};

		${props => props.theme.media.largeTablet} {
			padding-left: ${props => props.theme.space.s8};
			padding-right: ${props => props.theme.space.s8};
		}

		${props => props.theme.media.mobile} {
			padding-left: ${props => props.theme.space.s5};
			padding-right: ${props => props.theme.space.s5};
		}

		${props => props.styled}
	}
`;
