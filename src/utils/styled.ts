import { default as styl } from 'styled-components'; // eslint-disable-line

// before adding new props to UI-components, check list if it's included here:
// https://github.dev/styled-components/styled-components/tree/main/packages/styled-components
export const UIprops: string[] = [
	// animation props
	'animation',
	'animationName',
	'animationDuration',
	'animationTimingFunction',
	'animationDelay',
	'animationIterationCount',
	'animationDirection',
	'animationFillMode',
	'animationPlayState',
	// background props
	'background',
	'backgroundColor',
	'backgroundColorOpacity',
	'backgroundImage',
	'backgroundRepeat',
	'backgroundPosition',
	'backgroundSize',
	'backgroundGradient',
	'backgroundBlur',
	'backgroundAttachment',
	'backgroundBlendMode',
	// border props
	'border',
	'borderTop',
	'borderRight',
	'borderBottom',
	'borderLeft',
	'borderRadius',
	'boxShadow',
	// flex props
	'flex',
	'direction',
	'wrap',
	'overflow',
	'transform',
	'order',
	'width',
	'height',
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
	'color',
	'size',
	'profile',
];

export const styled = (ele: any) => styl(ele).withConfig({
	shouldForwardProp: (prop: string, defaultValidatorFn) => !UIprops.includes(prop) && defaultValidatorFn(prop),
});
