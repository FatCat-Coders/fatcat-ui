import React from 'react';

import { Wrapper } from '../../src/components/Atoms/Wrapper';

import { formatObjectKeys, formatSizingObjectKeys } from '../helpers';
import { SPACE } from '../../src/theme/definitions';

import readme from './Space.md';

export default {
	title: 'Element Props/Space',
	argTypes: {
		padding: {
			control: 'array',
			description: `List of sizing values values: \`t\`,\`r\`,\`b\`,\`l\` followed by number ${formatSizingObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		paddingBottom: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		paddingTop: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		paddingLeft: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		paddingRight: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		margin: {
			control: 'array',
			description: `List of sizing values values: \`t\`,\`r\`,\`b\`,\`l\` followed by number ${formatSizingObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		marginBottom: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		marginTop: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		marginLeft: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		marginRight: {
			control: 'text',
			description: `List of sizing values: ${formatObjectKeys(SPACE)}`,
			table: {
				type: { summary: null },
			},
		},
		scale: {
			control: 'boolean',
			description: 'Apply breakpoint scale on the size props',
			table: {
				type: { summary: null },
				defaultValue: { summary: 'false' },
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
};

const Template = ({ children, ...args }) => (
	<Wrapper
		border="1px solid black"
		width="fit-content"
		backgroundColor="green"
		backgroundColorOpacity={0.3}
	>
		<Wrapper
			height="300px"
			width="300px"
			backgroundColor="yellow"
			backgroundColorOpacity={0.7}
			{...args}
		>
			<Wrapper
				backgroundColor="purple"
				height="100%"
			/>
		</Wrapper>
	</Wrapper>
);

export const Space = Template.bind({});

Space.parameters = {
	controls: {
		include: [
			'padding',
			'paddingBottom',
			'paddingTop',
			'paddingLeft',
			'paddingRight',
			'margin',
			'marginBottom',
			'marginTop',
			'marginLeft',
			'marginRight',
			'scale',
		],
	},
};
Space.args = {
	padding: ['t64', 'r64', 'b64', 'l64'],
	marginTop: 's24',
	marginRight: 's24',
	marginBottom: 's24',
	marginLeft: 's24',
};
