import React from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { formatObjectKeys } from '../../../../stories/helpers';
import { default as CookieBannerOrigin } from './CookieBanner'; // eslint-disable-line
import { Wrapper } from '../../Atoms/Wrapper';

import { COLOR, TEXT_COLOR } from '../../../theme/definitions';

import readme from './CookieBanner.md';

const CookieWrapper = styled(Wrapper)`
	.CookieConsent--container {
		position: relative !important;
	}
`;

export default {
	title: 'Building Elements/CookieBanner',
	component: CookieBannerOrigin,
	argTypes: {
		backgroundColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of colors for background: ${formatObjectKeys(COLOR)}`,
			table: {
				type: { summary: null },
			},
		},
		buttonColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of colors for accept button: ${formatObjectKeys(COLOR)}`,
			table: {
				type: { summary: null },
			},
		},
		declineHoverColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of colors for decline button on hover: ${formatObjectKeys(COLOR)}`,
			table: {
				type: { summary: null },
			},
		},
		buttonText: {
			control: 'text',
			description: 'Text inside the accept button',
			table: {
				type: { summary: null },
			},
		},
		cookieName: {
			control: 'text',
			description: 'Give unique cookie name to save in local storage',
			table: {
				type: { summary: null },
			},
		},
		cookieText: {
			control: 'text',
			description: '`String` or `RecatComponent` to show in the cookie banner',
			table: {
				type: { summary: null },
			},
		},
		cookieTextColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: `List of colors for cookie text: ${formatObjectKeys(TEXT_COLOR)}`,
			table: {
				type: { summary: null },
			},
		},
		styled: {
			control: 'text',
			description: 'Additional custom CSS style',
			table: {
				type: { summary: null },
			},
		},
		useCookieIcon: {
			control: 'boolean',
			description: 'Render cookie icon in front of text',
			type: 'boolean',
			table: {
				type: { summary: null },
			},
		},
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof CookieBannerOrigin>;

const Template: ComponentStory<typeof CookieBannerOrigin> = ({ ...args }) => (
	<CookieWrapper
		padding={['t64', 'b64', 'l24', 'r24']}
	>
		<CookieBannerOrigin
			{...args}
		/>
	</CookieWrapper>

);

export const CookieBanner = Template.bind({});

CookieBanner.parameters = {
	controls: {
		include: [
			'backgroundColor',
			'buttonColor',
			'buttonText',
			'cookieName',
			'cookieText',
			'cookieTextColor',
			'styled',
			'declineHoverColor',
			'useCookieIcon',
		],
	},
};
CookieBanner.args = {
	backgroundColor: 'grey',
	buttonColor: 'primary',
	buttonText: 'Got it!',
	cookieName: 'cookie-consent',
	cookieText: 'This website uses cookies to enhance the user experience.',
	cookieTextColor: 'primary',
	styled: '',
	declineHoverColor: 'greyLight',
	useCookieIcon: true,
};
