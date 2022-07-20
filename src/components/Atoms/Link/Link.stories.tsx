import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link as LinkOrigin } from './Link';
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { LINK_STYLE } from '../../../theme/definitions';

import readme from './Link.md';
import { COLOR } from '../../../theme/definitions/color/color';

export default {
	title: 'Basic Elements/Link',
	component: LinkOrigin,
	argTypes: {
		variant: {
			control: 'radio',
			options: Object.keys(LINK_STYLE),
			description: `List of link variants: ${formatObjectKeys(LINK_STYLE)}`,
			table: {
				type: { summary: null },
			},
		},
		children: {
			name: 'Content',
			control: 'text',
			description: 'Text inside the link (Just for demo purposes)',
			type: 'string',
		},
		to: {
			control: 'text',
			description: 'The `to` or `href` attribute specifies the link\'s destination.',
		},
		withArrow: {
			control: 'boolean',
			description: 'When present, it specifies that the link should have an arrow.',
			table: {
				type: { summary: null },
			},
		},
		arrowColor: {
			control: 'select',
			options: Object.keys(COLOR),
			description: 'The color of the arrow',
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
} as ComponentMeta<typeof LinkOrigin>;

const Template: ComponentStory<typeof LinkOrigin> = ({ children, ...args }) => (
	<Flex
		padding={['t64', 'b64']}
	>
		<LinkOrigin
			fontSize="s64"
			{...args}
		>
			{children}
		</LinkOrigin>
	</Flex>
);

export const Link = Template.bind({});

Link.parameters = { controls: { include: ['variant', 'Content', 'to', 'withArrow', 'arrowColor'] } };
Link.args = { children: 'FatCat Coders', variant: 'base', to: 'https://fatcatcoders.com' };
