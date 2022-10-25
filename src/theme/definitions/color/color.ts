import { darken } from 'polished';
import { css } from 'styled-components';

export const COLOR = {
	primary: '#232737',
	primaryLight: '#232737E6',
	black: '#000000',
	dark: '#0A0A0A',
	blackHigh: '#030303',
	blackLow: '#121212',
	blackLight: '#171717',
	blackLighter: '#1D1D1E',
	white: '#FFFFFF',
	white10: 'rgba(255, 255, 255, 0.1)',
	white20: 'rgba(255, 255, 255, 0.2)',
	white50: 'rgba(255, 255, 255, 0.5)',
	darkestGray: '#121212',
	grey: '#BEBEBE',
	greyLight: '#67727B',
	darkerGrey: '#6B6B6B',
	lightGrey: '#F5F5F5',
	purple: '#5E1A6F',
	purpleLight: '#755DB9',
	darkerPurple: '#50145F',
	darkestPurple: '#470F55',
	orange: '#FFA500',
	yellow: '#FFB82D',
	yellow10: 'rgba(255,184,45, 0.1)',
	green: '#00FF00',
	transparent: 'transparent',
	disabled: '#E0E2EC',
	disabledDark: '#A0A3AF',
	warrning: '#DE3131',
};

export const LINK_COLOR = {
	primary: {
		default: css`${props => props.theme.color.primary}`,
		hover: css`${props => darken(0.1, props.theme.color.primary)}`,
	},
};

export const BUTTON_COLOR = {
	disabled: {
		default: css`${props => props.theme.color.disabled}`,
		text: css`${props => props.theme.color.disabledDark}`,
	},
	primary: {
		default: css`${props => props.theme.color.primaryLight}`,
		text: css`${props => props.theme.color.white}`,
		hover: css`${props => props.theme.color.primary}`,
		hoverText: css`${props => props.theme.color.white}`,
	},
	secondary: {
		default: css`${props => props.theme.color.primary}`,
		text: css`${props => props.theme.color.primary}`,
		hover: css`${props => props.theme.color.primary}`,
		hoverText: css`${props => props.theme.color.white}`,
	},
	ghost: {
		default: css`${props => props.theme.color.transparent}`,
		text: css`${props => props.theme.color.black}`,
		hover: css`${props => props.theme.color.yellow10}`,
		hoverText: css`${props => props.theme.color.white}`,
	},
	white: {
		default: css`${props => props.theme.color.white}`,
		text: css`${props => props.theme.color.primary}`,
		hover: css`${props => darken(0.1, props.theme.color.white)}`,
		hoverText: css`${props => props.theme.color.white}`,
	},
	underline: {
		default: css`${props => props.theme.color.primary}`,
		text: css`${props => props.theme.color.primary}`,
	},
};

export const TEXT_COLOR = {
	primary: css`${props => props.theme.color.primary}`,
	secondary: css`${props => props.theme.color.darkerGrey}`,
	black: css`${props => props.theme.color.blackLighter}`,
	yellow: css`${props => props.theme.color.yellow}`,
	white: css`${props => props.theme.color.white}`,
	warrning: css`${props => props.theme.color.warrning}`,
};

export const BACKGROUND_COLOR = {
	primary: css`${props => props.theme.color.primary}`,
	transparent: css`${props => props.theme.color.transparent}`,
	grey: css`${props => props.theme.color.grey}`,
	lightGrey: css`${props => props.theme.color.lightGrey}`,
	backgroundUltraDark: css`${props => props.theme.color.blackHigh}`,
	backgroundDark: css`${props => props.theme.color.dark}`,
	background: css`${props => props.theme.color.blackLow}`,
	backgroundLight: css`${props => props.theme.color.blackLight}`,
	backgroundLighter: css`${props => props.theme.color.blackLighter}`,
	purple: css`${props => props.theme.color.purple}`,
	yellow: css`${props => props.theme.color.yellow}`,
	white: css`${props => props.theme.color.white}`,
	green: css`${props => props.theme.color.green}`,
	wistiaOverlay: 'rgba(130, 130, 130, 0.6)',
};
