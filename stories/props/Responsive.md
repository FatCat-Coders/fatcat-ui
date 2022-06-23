List of responsive props, and example.

## 	Definition

List of breakpoints to apply CSS style if a certain condition is true. List of breakpoints:

- `$mobile`
- `$tablet`
- `$largeTablet`
- `$desktop`
- `$largeDesktop`
- `$desktopStandard`

## Usage

Breakpoints rules apply depending on breakpoint values defined in our `theme.media` and can be changed by overriding in our `UIThemeProvider`.

Style rule is passed in array, and it's pretty much same list of props as we have for all elements.
New rules aswell can be added or modifyed like this:

- first we add some styles definitions

```jsx
const RESPONSIVE_BEHAVIORS = {
	// flex
	fluid: css`
		width: 100%;
		min-width: auto;
		max-width: 100%;
		flex-basis: auto;
	`,
	setBorder: (value: Properties['border']) => css`
		border: ${value};
	`,
}
```
- and then add that style to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	responsive: RESPONSIVE_BEHAVIORS
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
		responsive: FatCatTheme['responsive'] & typeof RESPONSIVE_BEHAVIORS
	}
}
```

And this is how we can apply `flex-direction: column;` on flex element and also add `padding: 12px;` on `$mobile` breakpoint

```jsx
<Flex
	$gap="10px"
	$mobile={['column', { padding: ['t12', 'r12', 'b12', 'l12'] }]}
>
	<Wrapper
		$height="100px"
		$width="100px"
		$backgroundColor="yellow"
	/>
	<Wrapper
		$height="100px"
		$width="100px"
		$backgroundColor="yellow"
	/>
	<Wrapper
		$height="100px"
		$width="100px"
		$backgroundColor="yellow"
	/>
	<Wrapper
		$height="100px"
		$width="100px"
		$backgroundColor="yellow"
	/>
</Flex>
```

Here we can see example:
