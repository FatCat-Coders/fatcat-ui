import React from 'react';

export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> = Partial<
	JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>
	>;

export type AsProp<C extends React.ElementType> = {
	as?: C | HTMLElementTagNameMap;
};

export type ExtendableProps<ExtendedProps = {}, OverrideProps = {}> = OverrideProps &
	Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<C extends React.ElementType, Props = {}> = ExtendableProps<
	Partial<PropsOf<C>>,
	Props
	>;

export type PolymorphicComponentProps<
	TComponent extends React.ElementType,
	TProps = {},
	TExtensionProps = {}
	> = InheritableElementProps<
	TComponent,
	ExtendableProps<TProps & AsProp<TComponent>, TExtensionProps>
	>;
export interface PolymorphicComponent<TProps = {}, TExtensionProps = {}> {
	<TComponent extends React.ElementType>(
		props: React.PropsWithChildren<
			PolymorphicComponentProps<TComponent, TProps, TExtensionProps>
			>,
		context?: any
	): React.ReactElement<any, any> | null;
	propTypes?: React.WeakValidationMap<ExtendableProps<TProps, TExtensionProps>>;
	contextTypes?: React.ValidationMap<any>;
	defaultProps?: Partial<ExtendableProps<TProps, TExtensionProps>>;
	displayName?: string;
}
