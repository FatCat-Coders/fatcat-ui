Simple Image component. Props that we can use for this component are:

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

listed in `Element Props` section and additionally:

## Usage 

First we simply start with importing component:

```jsx

import { Image } from 'fatcat-ui-library/components/Atoms/Image';

// Asset import
import img from '../../assets/images/canteen.jpeg';

```

and then simply use it in your code.

```jsx
<Flex
	padding={['t64', 'b64']}
>
	<Image
		width="300px"
		height="auto"
		src={img}
		alt=""
	/>
</Flex>
```

Here we can see our example	:
