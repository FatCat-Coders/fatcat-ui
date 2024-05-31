List of text props, and example.

## 	Definition

The CSS margin and padding properties are used to create space around elements and this is list of them:

- `padding`
- `paddingBottom`
- `paddingTop`
- `paddingLeft`
- `paddingRight`
- `paddingX`
- `paddingY`
- `margin`
- `marginBottom`
- `marginTop`
- `marginLeft`
- `marginRight`
- `marginX`
- `marginY`
- `scale`

We can use theme default setup or we can add some custom spacing like this:

- first we add some space definitions and our SideSpace types definitions

```jsx
export const SPACE = {
	s3: '12px',
	s10: '40px',
};

export type SideSpace =
	't6'
	| 'r6'
	| 'b6'
	| 'l6'
	| 't10'
	| 'r10'
	| 'b10'
	| 'l10'
	| 't14'
	| 'r14'
	| 'b14'
	| 'l14'
	| 't30'
	| 'r30'
	| 'b30'
	| 'l30';
```
- and then add that spacing to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	space: SPACE,
}

<UIThemeProvider theme={newTheme}>
	{children}
</UIThemeProvider>
```

- and also provide types for TS

```jsx
import { FatCatTheme } from 'fatcat-ui-library/theme/theme';

declare module 'styled-components' {
	export interface DefaultTheme extends FatCatTheme {
		sideSpace: FatCatTheme['sideSpace'] | SideSpace
		space: FatCatTheme['space'] & typeof SPACE
	}
}
```

## Usage 
We have 2 diffrent sizing props:
- shorthanded (`padding`, `margin`)
- single sided (`paddingTop`, `paddingLeft`, etc.)

Shorthand props accept array of string with prefix:
- `t` for top
- `r` for right
- `b` for bottom
- `l` for left

follow with size, for example, `top: 24px` and `bottom: 64px`:

```jsx
<Wrapper
	padding={['t24', 'b64']}
/>
```

Single sided props accept string value with prefix `s` for example:

```jsx
<Wrapper
	paddingLeft="s24"
	paddingRight="s24"
/>
```

Let's now talk about `scale` prop. Scale prop accepts the boolean value for applying the rule in which all sizes of that element are multiplied with values from `SCREEN_RATIO` depending on breakpoint

```jsx
const SCREEN_RATIO = {
	mobile: 1.8,
	tablet: 1.4,
	largeTablet: 1.2,
}
```
We can change `SCREEN_RATIO` by passing new values to `theme.screenRatio` in our `UIThemeProvider`.

This is example how we can use shorthanded `padding` or single sided `$magin` on our element

```jsx
<Wrapper
	border="1px solid black"
	w="fit-content"
	backgroundColor="green"
	backgroundColorOpacity={0.3}
>
	<Wrapper
		h="300px"
		w="300px"
		backgroundColor="primary"
		backgroundColorOpacity={0.7}
		padding={['t64', 'r64', 'b64', 'l64']}
		// padding="s64" we can use it like this if we want same side sizes
		marginTop="s24"
		marginRight="s24"
		marginBottom="s24"
		marginLeft="s24"
	>
		<Wrapper
			backgroundColor="primary"
			h="100%"
		/>
	</Wrapper>
</Wrapper>
```

Here we can see example:
