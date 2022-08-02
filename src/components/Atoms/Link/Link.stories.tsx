import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link as LinkOrigin } from './Link';
import { Flex } from '../Flex';
import { formatObjectKeys } from '../../../../stories/helpers';
import { LINK_STYLE } from '../../../theme/definitions';

import readme from './Link.md';

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
			{...args}
		>
			{children}
		</LinkOrigin>
	</Flex>
);

export const Link = Template.bind({});

Link.parameters = { controls: { include: ['variant', 'Content', 'to'] } };
Link.args = { children: 'FatCat Coders', variant: 'base', to: 'https://fatcatcoders.com' };
