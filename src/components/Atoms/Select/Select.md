Create a drop-down list with `n` number of options. Props that we can use for this component are:

- `Animation`
- `Background`
- `Border`
- `Position`
- `Size`
- `Space`
- `Text`
- `Visibility`
- `Hover`
- `Responsive`

listed in `Element Props` section.

## Usage 

`Select` element are used in combination with `Option` element

```jsx

import { Select } from 'fatcat-ui-library/components/Atoms/Select';
import { Option } from 'fatcat-ui-library/components/Atoms/Option';

```

and then simply use it in your code like this

```jsx
<Select
	padding={['t8', 'b8', 'l16', 'r16']}
	minWidth="200px"
>
	<Option padding={['t8', 'b8', 'l16', 'r16']}>Option 1</Option>
	<Option padding={['t8', 'b8', 'l16', 'r16']}>Option 2</Option>
	<Option padding={['t8', 'b8', 'l16', 'r16']}>Option 3</Option>
	<Option padding={['t8', 'b8', 'l16', 'r16']}>Option 4</Option>
</Select>
```

Here we can see our example:
