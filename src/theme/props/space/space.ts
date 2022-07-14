import memoize from 'fast-memoize';
import { css, DefaultTheme } from 'styled-components';

// Definitions
import { SpaceDefinition } from '../../definitions';

// Utils
import { capitalize } from '../../../utils/capitalize';

type SideSpacingType = 'padding' | 'margin';
export type SideSpacingTypesValue =
	| 'l0'
	| 'l4'
	| 'l8'
	| 'l12'
	| 'l16'
	| 'l20'
	| 'l24'
	| 'l28'
	| 'l32'
	| 'l36'
	| 'l40'
	| 'l44'
	| 'l48'
	| 'l52'
	| 'l56'
	| 'l64'
	| 'l72'
	| 'l80'
	| 'l96'
	| 'l104'
	| 'l112'
	| 'l120'
	| 'l136'
	| 'l152'
	| 'l168'
	| 'l184'
	| 'l200'
	| 'l232'
	| 'l264'
	| 'lauto'
	| 'r0'
	| 'r4'
	| 'r8'
	| 'r12'
	| 'r16'
	| 'r20'
	| 'r24'
	| 'r28'
	| 'r32'
	| 'r36'
	| 'r40'
	| 'r44'
	| 'r48'
	| 'r52'
	| 'r56'
	| 'r64'
	| 'r72'
	| 'r80'
	| 'r96'
	| 'r104'
	| 'r112'
	| 'r120'
	| 'r136'
	| 'r152'
	| 'r168'
	| 'r184'
	| 'r200'
	| 'r232'
	| 'r264'
	| 'rauto'
	| 't0'
	| 't4'
	| 't8'
	| 't12'
	| 't16'
	| 't20'
	| 't24'
	| 't28'
	| 't32'
	| 't36'
	| 't40'
	| 't44'
	| 't48'
	| 't52'
	| 't56'
	| 't64'
	| 't72'
	| 't80'
	| 't96'
	| 't104'
	| 't112'
	| 't120'
	| 't136'
	| 't152'
	| 't168'
	| 't184'
	| 't200'
	| 't232'
	| 't264'
	| 'tauto'
	| 'b0'
	| 'b4'
	| 'b8'
	| 'b12'
	| 'b16'
	| 'b20'
	| 'b24'
	| 'b28'
	| 'b32'
	| 'b36'
	| 'b40'
	| 'b44'
	| 'b48'
	| 'b52'
	| 'b56'
	| 'b64'
	| 'b72'
	| 'b80'
	| 'b96'
	| 'b104'
	| 'b112'
	| 'b120'
	| 'b136'
	| 'b152'
	| 'b168'
	| 'b184'
	| 'b200'
	| 'b232'
	| 'b264'
	| 'bauto';

export type SideSpacingValue = DefaultTheme['sideSpace']

const SIDES: Record<string, string> = {
	t: 'top',
	r: 'right',
	b: 'bottom',
	l: 'left',
} as const;

type SpacingSides = typeof SIDES;
// TODO: fix second part of types
type SpacingSideMap = Partial<Record<SpacingSides[keyof SpacingSides], number>> | { [x: string]: string | boolean | SideSpacingValue[]; };
type SpaceParser = (value: SpaceDefinition | SideSpacingValue[], SPACE: {[x:string]: string}) => SpacingSideMap;

export const parseSpace = memoize<SpaceParser>((value, SPACE) => {
	const spaces = Array.isArray(value) ? value : value.split(' ');
	return spaces.reduce((accumulator, value) => {
		if (value?.length >= 2) {
			const side = SIDES[value.charAt(0)];
			// @ts-ignore
			const size = SPACE[`s${value.slice(1)}`];

			if (side && space) {
				// @ts-ignore
				accumulator[side] = size === 'auto' ? size : parseInt(size, 10);
			}
		}

		return accumulator;
	}, {});
});

export type SpaceProps = {
	padding?: string | SideSpacingValue[];
	paddingBottom?: SpaceDefinition;
	paddingTop?: SpaceDefinition;
	paddingLeft?: SpaceDefinition;
	paddingRight?: SpaceDefinition;
	margin?: string | SideSpacingValue[];
	marginBottom?: SpaceDefinition;
	marginTop?: SpaceDefinition;
	marginLeft?: SpaceDefinition;
	marginRight?: SpaceDefinition;
	scale?: boolean;
};

export type TSpaceSide = 'left' | 'right' | 'top' | 'bottom';

export const createSideSpacingRule = (
	spacingType: SideSpacingType,
	sideMap: SpacingSideMap,
	screenRatio = 1
) => {
	return Object.keys(sideMap).map((side) => {
		if (sideMap[side] === 'auto') {
			return `${spacingType}-${side}: ${sideMap[side]}`;
		}
		// @ts-ignore
		return `${spacingType}-${side}: ${sideMap[side] / screenRatio}px`;
	}).join(';');
};

const sideSpacing = (type: SideSpacingType) => css<SpaceProps>`
	${(props) => {
		const parsedType = `$${type}`;
		if (!props[parsedType]) {
			return null;
		}

		// @ts-ignore
		const sides = parseSpace(props[parsedType], props.theme.space);
		return css`
			${createSideSpacingRule(type, sides)};
			${props.scale && css`
				${props.theme.media.largeTablet} {
					${createSideSpacingRule(type, sides, props.theme.screenRatio.largeTablet)};
				}

				${props.theme.media.tablet} {
					${createSideSpacingRule(type, sides, props.theme.screenRatio.tablet)};
				}

				${props.theme.media.mobile} {
					${createSideSpacingRule(type, sides, props.theme.screenRatio.mobile)};
				}
			`};
		`;
	}};
`;

const generateSingleSideSpace = (type: SideSpacingType, side: TSpaceSide) => {
	const cssProp = `$${type}${capitalize(side)}` as keyof SpaceProps;
	return css<SpaceProps>`
		${(props) => {
		if (props[cssProp]) {
			return css`
					${type}-${side}: ${props.theme.space[props[cssProp] as SpaceDefinition]};
					${props.scale && css`
						${props.theme.media.largeTablet} {
							${createSideSpacingRule(type, { [side]: props[cssProp] }, props.theme.screenRatio.largeTablet)};
						}

						${props.theme.media.tablet} {
							${createSideSpacingRule(type, { [side]: props[cssProp] }, props.theme.screenRatio.tablet)};
						}

						${props.theme.media.mobile} {
							${createSideSpacingRule(type, { [side]: props[cssProp] }, props.theme.screenRatio.mobile)};
						}
					`};
				`;
		}

		return null;
	}}
	`;
};

export const space = css<SpaceProps>`
	${sideSpacing('padding')};
	${sideSpacing('margin')};
	${generateSingleSideSpace('padding', 'left')};
	${generateSingleSideSpace('padding', 'right')};
	${generateSingleSideSpace('padding', 'top')};
	${generateSingleSideSpace('padding', 'bottom')};
	${generateSingleSideSpace('margin', 'left')};
	${generateSingleSideSpace('margin', 'right')};
	${generateSingleSideSpace('margin', 'top')};
	${generateSingleSideSpace('margin', 'bottom')};
`;
