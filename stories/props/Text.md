List of text props, and example.

## 	Definition

Mainly all css props for styling text elements in our theme

- `$textAlign`
- `$textColor`
- `$textSize`
- `$fontSize`
- `$lineHeight`
- `$fontWeight`
- `$fontFamily`
- `$whiteSpace`
- `$uppercase`
- `$lowercase`
- `$ellipsis`
- `$fontStyle`
- `$textDecoration`
- `$letterSpacing`
- `$textColorOpacity`
- `$textShadow`

We can use theme default setup or we can add some custom style like this:

- first we add some styles definitions

```jsx
const TEXT_COLOR = {
	black: '#000000',
	blackGlass: '#000c',
}

const FONT_SIZE = {
	s8: '0.5rem',
	s10: '0.625rem',
}

// theme use main key as default font,
// if we whant to override we can simple do this
export const FONT_FAMILY = {
	main: 'customFontName',
	secondary: 'secondCustomFontName',
};

const LINE_HEIGHT = {
	p20: '1.25rem',
	p22: '1.375rem',
}

const FONT_WEIGHT = {
	fatBold: 1000,
}
```
- and then add that style to theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	textColor: TEXT_COLOR
	textSize: TEXT_SIZE
	fontSize: FONT_SIZE
	fontFamily: FONT_FAMILY
	lineHeight: LINE_HEIGHT
	fontWeight: FONT_WEIGHT
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
		textColor: FatCatTheme['textColor'] & typeof TEXT_COLOR
		textSize: FatCatTheme['textSize'] & typeof TEXT_SIZE
		fontSize: FatCatTheme['fontSize'] & typeof FONT_SIZE
		fontFamily: typeof FONT_FAMILY
		lineHeight: FatCatTheme['lineHeight'] & typeof LINE_HEIGHT
		fontWeight: FatCatTheme['fontWeight'] & typeof FONT_WEIGHT
	}
}
```

## Usage 

First we simply start with importing component:

```jsx

import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

```

and then simply use it in your code

```jsx
<Paragraph
	$textColor="black"
	$textAlign="center"
	$fontStyle="italic"
>
	Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's Inn Hall. Implacable November weather.
	As much mud in the streets as if the waters had but newly retired from the face of the earth.
</Paragraph>
```

Here we can see example:
