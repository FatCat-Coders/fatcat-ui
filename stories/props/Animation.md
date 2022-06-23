List of animation props, and example.

## 	Definition

CSS allows animation of HTML elements without using JavaScript or Flash, and animation properties adds to that table.

Property that adds to the component are:

- `$animation`
- `$animationName`
- `$animationDuration`
- `$animationTimingFunction`
- `$animationDelay`
- `$animationIterationCount`
- `$animationFillMode`
- `$animationPlayState`

We can use animation already defined in our therm or we can add new ones for better reusability, and this is how:

- first we define some animation

```jsx
import { keyframes } from 'styled-components';

const ANIMATIONS = {
	fadeInRight25: keyframes`
		from {
			opacity: 0;
			transform: translateX(25%);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	`,
}
```
- and then add that animation to the theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	animation: ANIMATIONS,
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
		animation: FatCatTheme['animation'] & typeof ANIMATIONS
	}
}
```

## Usage 

For our example we adding `fadeInRight25` animation to animate element from right to left with opacity change from 0 to 1. We will use shorthand `$animation` prop by passing two items to array collection, first with animation name from our defined animation list in theme, and second one with all additional props for animation:

```jsx
<Wrapper
	$animation={['fadeInRight25', '2s linear 2s infinite']}
	$width="200px"
	$height="200px"
	$backgroundColor="yellow"
/>
```

Here we can see example:
