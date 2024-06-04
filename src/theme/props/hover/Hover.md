List of animation props, and example.

## 	Definition

The `hover` selector is used to select elements when you mouse over them.

We can use hover definition already defined in our therm or we can add new ones for better reusability, and this is how:

- first we add some styles

```jsx
const HOVER_BEHAVIORS = {
	backgroundColorHex: (value: string) => css`
		background-color: ${value};
	`,
	zoom: (value: number) => css`
		transform: scale(${value});
	`,
}
```
- and then add that style to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	hover: HOVER_BEHAVIORS,
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
		hover: FatCatTheme['hover'] & typeof HOVER_BEHAVIORS
	}
}
```

## Usage 

Here is usage of our defined hover effects, we also added `transition` for smoother behavior

```jsx
<Wrapper
		h="100px"
		w="100px"
		backgroundColor="primary600"
		transition="all 0.3s ease"
		hover={ [{ backgroundColorHex: '#1D1D1E', zoom: '1.2' }] }
	/>
```

Here we can see example:
