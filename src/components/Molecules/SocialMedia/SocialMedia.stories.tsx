import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../Atoms/Wrapper';

import { COLOR } from '../../../theme/definitions';
import { default as SocialMediaOrigin, mappedSocial } from './SocialMedia'; // eslint-disable-line

import { formatObjectKeys } from '../../../../stories/helpers';
import { HOVER_BEHAVIORS } from '../../../theme/styles/hover';

import readme from './SocialMedia.md';

export default {
	title: 'Building Elements/SocialMedia',
	component: SocialMediaOrigin,
	argTypes: {
		socials: {
			control: 'object',
			description: `Object with keys of social media and values of url. Keys must be one of: ${formatObjectKeys(mappedSocial)}`,
			table: {
				type: { summary: null },
			},
		},
		color: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'Color of text in title',
			type: { name: 'string' },
			table: {
				type: { summary: null },
			},
		},
		square: {
			control: 'boolean',
			description: 'Should use squared icons',
			type: 'boolean',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'true' },
			},
		},
		size: {
			control: 'text',
			description: 'Width of icons',
			table: {
				type: { summary: null },
				defaultValue: { summary: '16px' },
			},
		},
		gap: {
			control: 'text',
			description: 'Gap between icons',
			table: {
				type: { summary: null },
				defaultValue: { summary: '10px' },
			},
		},
		hover: { control: 'array', description: `List of all hover behaviors: ${formatObjectKeys(HOVER_BEHAVIORS)} ` },
	},
	parameters: {
		docs: {
			description: {
				component: readme,
			},
		},
	},
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMediaOrigin> = args => (
	<Wrapper>
		<SocialMediaOrigin {...args} />
	</Wrapper>
);

export const SocialMedia = Template.bind({});

SocialMedia.parameters = { controls: { include: ['socials', 'color', 'hover', 'gap', 'square', 'size'] } };

SocialMedia.args = {
	socials: {
		facebook: 'https://www.facebook.com/',
		twitter: 'https://twitter.com/',
		instagram: 'https://www.instagram.com/',
		linkedin: 'https://www.linkedin.com/',
		google: 'https://www.google.com/',
		github: 'https://www.github.com/',
	},
	color: 'primary',
	square: true,
	hover: [{ textColor: 'yellow', zoom: '1.2' }],
};
