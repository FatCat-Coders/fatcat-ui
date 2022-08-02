A simple Wrapper component that is useful for applying style on HTML `div` element

- `Animation`
- `Background`
- `Border`
- `CustomCss`
- `Hover`
- `Overflow`
- `Position`
- `Responsive`
- `Size`
- `Space`
- `Text`
- `Transitions`
- `Visibility`

listed in `Element Props` section.

## Usage 

First we simply start with importing component:

```jsx

import { Wrapper } from 'fatcat-ui-library/components/Atoms/Wrapper';

```

and then simply use it in your code with dynamic elements.

```jsx
<Wrapper
	maxWidth="50%"
>
	<div style={{ width: '200px', backgroundColor: 'orange'}} />
	<div style={{ width: '100px', backgroundColor: 'purple'}} />
	<div style={{ width: '200px', backgroundColor: 'orange'}} />
	<div style={{ width: '300px', backgroundColor: 'purple'}} />
</Wrapper>
```

Here we can see our example	:
