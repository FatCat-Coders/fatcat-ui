import React, { ComponentPropsWithRef, PropsWithChildren } from 'react';

// Local atoms
import {
	Container,
	Content,
} from './Section.atoms';
import { DefaultTheme } from 'styled-components';

export type TSection = PropsWithChildren<
	Omit<ComponentPropsWithRef<typeof Container>, 'children' | 'sectionVariant'>
	& {
		// eslint-disable-next-line react/require-default-props
		contentProps?: Omit<ComponentPropsWithRef<typeof Content>, 'children' | 'sectionVariant'>;
		variant: keyof DefaultTheme['sectionVariant'];
	}
>

export function Section(props: TSection) {
	const {
		contentProps,
		children,
		variant,
		...containerProps
	} = props;

	return (
		<Container
			sectionVariant={variant}
			{...containerProps}
		>
			<Content
				sectionVariant={variant}
				{...contentProps}
			>
				{children}
			</Content>
		</Container>
	);
}
