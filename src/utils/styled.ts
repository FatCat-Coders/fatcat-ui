import { default as styl } from 'styled-components'; // eslint-disable-line

// before adding new props to UI-components, check this prop list
// https://github.dev/styled-components/styled-components/tree/main/packages/styled-components
const UIprops: string[] = [
	'width',
	'height',
	'direction',
	'wrap',
	'overflow',
	'transform',
	'order',
	'scale',
	'fontSize',
	'fontWeight',
	'fontFamily',
	'fontStyle',
	'textDecoration',
	'letterSpacing',
	'visibility',
	'display',
	'opacity',
];

export const styled = (ele: any) => styl(ele).withConfig({
	shouldForwardProp: (prop: string) => !UIprops.includes(prop),
});
