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

function Section(props: TSection) {
	const {
		contentProps,
		children,
		variant,
		...containerProps
	} = props;

	return (
		// @ts-expect-error: This happens because the props are not correctly inferred. Will fix it as part of theme improvements.
		<Container
			sectionVariant={variant}
			{...containerProps}
		>
			{/* @ts-expect-error Same as above */}
			<Content
				sectionVariant={variant}
				{...contentProps}
			>
				{children}
			</Content>
		</Container>
	);
}

export default Section;
