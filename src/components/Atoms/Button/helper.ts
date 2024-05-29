import { TButton } from './Button';

export const calculateIconSize = (size: TButton['size']) => {
	switch (size) {
		case 'extraLarge': return '24';
		case 'large': return '24';
		case 'medium': return '20';
		case 'small': return '20';
		case 'textLink': return '20';
		case 'textLinkSmall': return '20';
		default: return '20';
	}
};

export const calculatePaddingX = (variant: TButton['variant']) => {
	switch (variant) {
		case 'navLink': return 's2';
		case 'textLink': return 's0';
		default: return 's4';
	}
};

export const calculatePaddingBottom = (variant: TButton['variant']) => {
	switch (variant) {
		case 'navLink': return 's0';
		case 'textLink': return 's0';
		default: return 's2';
	}
};
