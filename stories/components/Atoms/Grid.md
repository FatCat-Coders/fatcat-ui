A simple Grid component that we can use for our layouts. Props that we can use for this component are:

- `Animation`
- `Background`
- `Border`
- `Hover`
- `Position`
- `Responsive`
- `Size`
- `Space`
- `Transitions`
- `Visibility`

listed in `Element Props` section and additionally:

- `alignItems`
- `justifyContent`
- `justifyItems`
- `gridTemplateColumns`
- `gap`

## Usage 

First we simply start with importing component:

```jsx

import { Grid } from 'fatcat-ui-library/components/Atoms/Grid';

```

and then simply use it in your code with dynamic elements.

```jsx
<Grid
	gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
>
	<div style={{ width: '200px'}} />
	<div style={{ width: '100px'}} />
	<div style={{ width: '200px'}} />
	<div style={{ width: '300px'}} />
</Grid>
```

Here we can see our example	:
