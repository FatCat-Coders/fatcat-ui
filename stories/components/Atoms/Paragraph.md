A paragraph always starts on a new line, and is usually a block of text. Props that we can use for this component are:

- `Animation`
- `Background`
- `Border`
- `Position`
- `Visibility`
- `Size`
- `Space`
- `Text`
- `Hover`
- `Responsive`

listed in `Element Props` section.


## 	Styling

For better reusability, we define our style and size in the theme provider and then we use defined variation as such. For example, if we want to define desktop, tablet and mobile sizes for our `p` element, we will add sizes first like this:

- first we define size

```jsx
const TEXT_SIZE = {
	paragraph: css`
		font-size: ${props => props.theme.fontSize.s54};
		line-height: ${props => props.theme.lineHeight.s125};
	`,
	paragraphLargeTablet: css`
		font-size: ${props => props.theme.fontSize.s42};
	`,
	paragraphMobile: css`
		font-size: ${props => props.theme.fontSize.s30};
		line-height: ${props => props.theme.lineHeight.s100};
	`,
}
```
- and then we define our style and breakpoints for given element

```jsx
const const TEXT_STYLE = {
	paragraph: css`
		${props => props.theme.textSize.paragraph};
		font-weight: ${props => props.theme.fontWeight.bold};

		${props => props.theme.media.largeTablet} {
			${props => props.theme.textSize.paragraphLargeTablet};
		}

		${props => props.theme.media.mobile} {
			${props => props.theme.textSize.paragraphMobile};
		}
	`,
}
```

- and after we add sizes and styles to the theme

```jsx
import { UIThemeProvider } from 'fatcat-ui-library/theme/theme';

const newTheme = {
	textSize: TEXT_SIZE,
	textStyle: TEXT_STYLE,
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
		textSize: FatCatTheme['textSize'] & typeof TEXT_SIZE
		textStyle: FatCatTheme['textStyle'] & typeof TEXT_STYLE
	}
}
```

## Usage 

First we simply start with importing component:

```jsx

import { Paragraph } from 'fatcat-ui-library/components/Atoms/Paragraph';

```

and then simply use it in your code.

```jsx
<Paragraph textColor="black">
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since
	the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
	but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
	sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</Paragraph>

```

Here we can test heading types already defined in library:
