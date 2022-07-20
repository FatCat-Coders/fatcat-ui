A simple Flex component that we can use for our layouts. Props that we can use for this component are:

- `Animation`
- `Background`
- `Border`
- `Flex`
- `Hover`
- `Overflow`
- `Position`
- `Responsive`
- `Size`
- `Space`
- `Transitions`
- `Visibility`

listed in `Element Props` section.

## Usage 

First we simply start with importing component:

```jsx

import { Flex } from 'fatcat-ui-library/components/Atoms/Flex';

```

and then simply use it in your code with dynamic elements.

```jsx
<Flex
	gap="8px 16px"
	wrap
>
	<div style={{ width: '200px'}} />
	<div style={{ width: '100px'}} />
	<div style={{ width: '200px'}} />
	<div style={{ width: '300px'}} />
</Flex>
```

Here we can see our example	:
