import memoize from 'fast-memoize';
import { css, DefaultTheme } from 'styled-components';

// Definitions
import { SpaceDefinition } from '../../definitions';

// Utils
import { capitalize } from '../../../utils/capitalize';

type SideSpacingType = 'padding' | 'margin';
export type SideSpacingTypesValue =
	| 'l0' | 'r0' | 't0' | 'b0'
	| 'l2' | 'r2' | 't2' | 'b2'
	| 'l4' | 'r4' | 't4' | 'b4'
	| 'l6' | 'r6' | 't6' | 'b6'
	| 'l8' | 'r8' | 't8' | 'b8'
	| 'l10' | 'r10' | 't10' | 'b10'
	| 'l12' | 'r12' | 't12' | 'b12'
	| 'l16' | 'r16' | 't16' | 'b16'
	| 'l18' | 'r18' | 't18' | 'b18'
	| 'l20' | 'r20' | 't20' | 'b20'
	| 'l24' | 'r24' | 't24' | 'b24'
	| 'l28' | 'r28' | 't28' | 'b28'
	| 'l32' | 'r32' | 't32' | 'b32'
	| 'l36' | 'r36' | 't36' | 'b36'
	| 'l40' | 'r40' | 't40' | 'b40'
	| 'l44' | 'r44' | 't44' | 'b44'
	| 'l48' | 'r48' | 't48' | 'b48'
	| 'l52' | 'r52' | 't52' | 'b52'
	| 'l56' | 'r56' | 't56' | 'b56'
	| 'l64' | 'r64' | 't64' | 'b64'
	| 'l72' | 'r72' | 't72' | 'b72'
	| 'l80' | 'r80' | 't80' | 'b80'
	| 'l96' | 'r96' | 't96' | 'b96'
	| 'l104' | 'r104' | 't104' | 'b104'
	| 'l112' | 'r112' | 't112' | 'b112'
	| 'l120' | 'r120' | 't120' | 'b120'
	| 'l136' | 'r136' | 't136' | 'b136'
	| 'l152' | 'r152' | 't152' | 'b152'
	| 'l168' | 'r168' | 't168' | 'b168'
	| 'l184' | 'r184' | 't184' | 'b184'
	| 'l200' | 'r200' | 't200' | 'b200'
	| 'l232' | 'r232' | 't232' | 'b232'
	| 'l264' | 'r264' | 't264' | 'b264'
	| 'lauto' | 'rauto' | 'tauto' | 'bauto';

export type SideSpacingValue = DefaultTheme['sideSpace']

const SIDES: Record<string, string> = {
	t: 'top',
	r: 'right',
	b: 'bottom',
	l: 'left',
} as const;

type SpacingSides = typeof SIDES;
type SpacingSideMap = Partial<Record<SpacingSides[keyof SpacingSides], number>> | { [x: string]: (string | boolean | SideSpacingValue[]); };
type SpaceParser = (value: SpaceDefinition | [SpaceDefinition] | SideSpacingValue[], SPACE: { [x: string]: string }) => SpacingSideMap;

export const parseSpace = memoize<SpaceParser>((value, SPACE) => {
	const spaces = Array.isArray(value) ? value : String(value).split(' ');
	return spaces.reduce((accumulator, value) => {
		if (value?.length >= 2) {
			const side = SIDES[value.charAt(0)];
			const size = SPACE[`s${value.slice(1)}`];

			if (side && space) {
				accumulator[side] = size === 'auto' ? size : parseInt(size, 10);
			}
			if (value.charAt(0) === 's' && spaces.length < 2) {
				Object.values(SIDES).forEach((item) => {
					accumulator[item] = parseInt(size, 10);
				});
			}
		}
		return accumulator;
	}, {});
});

export type SpaceProps = {
	padding?: SpaceDefinition | [SpaceDefinition] | SideSpacingValue[];
	paddingBottom?: SpaceDefinition;
	paddingTop?: SpaceDefinition;
	paddingLeft?: SpaceDefinition;
	paddingRight?: SpaceDefinition;
	paddingX?: SpaceDefinition | [SpaceDefinition];
	paddingY?: SpaceDefinition | [SpaceDefinition];
	margin?: SpaceDefinition | [SpaceDefinition] | SideSpacingValue[];
	marginBottom?: SpaceDefinition;
	marginTop?: SpaceDefinition;
	marginLeft?: SpaceDefinition;
	marginRight?: SpaceDefinition;
	marginX?: SpaceDefinition | [SpaceDefinition];
	marginY?: SpaceDefinition | [SpaceDefinition];
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
		return `${spacingType}-${side}: ${((sideMap[side] as number) / screenRatio).toFixed(4)}px`;
	}).join(';');
};

const sideSpacing = (type: SideSpacingType) => css<SpaceProps>`
	${(props) => {
		if (props[type]) {
			const sides = parseSpace(props[type], props.theme.space);
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
		}
		return null;
	}};
`;

const generateSingleSideSpace = (type: SideSpacingType, side: TSpaceSide) => {
	const cssProp = `${type}${capitalize(side)}` as keyof SpaceProps;
	return css<SpaceProps>`
		${(props) => {
		if (props[cssProp]) {
			// remove s prefix and convert to num
			const size = +(props[cssProp]as string).substring(1);
			return css`
			${type}-${side}: ${props.theme.space[props[cssProp] as SpaceDefinition]};
			${props.scale && css`
				${props.theme.media.largeTablet} {
					${createSideSpacingRule(type, { [side]: size }, props.theme.screenRatio.largeTablet)};
				}

				${props.theme.media.tablet} {
					${createSideSpacingRule(type, { [side]: size }, props.theme.screenRatio.tablet)};
				}

				${props.theme.media.mobile} {
					${createSideSpacingRule(type, { [side]: size }, props.theme.screenRatio.mobile)};
				}
			`};
		`;
		}
		return null;
	}}
	`;
};

const AXIS_SIDES: Record<string, Array<string>> = {
	x: ['left', 'right'],
	y: ['top', 'bottom'],
};

const generateAxisSpace = (type: SideSpacingType, side: keyof typeof AXIS_SIDES) => {
	const cssProp = `${type}${capitalize(side)}` as keyof SpaceProps;
	const axis = AXIS_SIDES[side];
	return css<SpaceProps>`
	${(props) => {
		if (props[cssProp]) {
			// remove s prefix and convert to num
			const size = +(props[cssProp]as string).substring(1);
			return css`
			${type}-${axis[0]}: ${props.theme.space[props[cssProp] as SpaceDefinition]};
			${type}-${axis[1]}: ${props.theme.space[props[cssProp] as SpaceDefinition]};
			${props.scale && css`
				${props.theme.media.largeTablet} {
					${createSideSpacingRule(type, { [axis[0]]: size }, props.theme.screenRatio.largeTablet)};
					${createSideSpacingRule(type, { [axis[1]]: size }, props.theme.screenRatio.largeTablet)};
				}

				${props.theme.media.tablet} {
					${createSideSpacingRule(type, { [axis[0]]: size }, props.theme.screenRatio.tablet)};
					${createSideSpacingRule(type, { [axis[1]]: size }, props.theme.screenRatio.tablet)};
				}

				${props.theme.media.mobile} {
					${createSideSpacingRule(type, { [axis[0]]: size }, props.theme.screenRatio.mobile)};
					${createSideSpacingRule(type, { [axis[1]]: size }, props.theme.screenRatio.mobile)};
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
	${generateAxisSpace('padding', 'x')}
	${generateAxisSpace('padding', 'y')}
	${generateAxisSpace('margin', 'x')}
	${generateAxisSpace('margin', 'y')}
	${generateSingleSideSpace('padding', 'left')};
	${generateSingleSideSpace('padding', 'right')};
	${generateSingleSideSpace('padding', 'top')};
	${generateSingleSideSpace('padding', 'bottom')};
	${generateSingleSideSpace('margin', 'left')};
	${generateSingleSideSpace('margin', 'right')};
	${generateSingleSideSpace('margin', 'top')};
	${generateSingleSideSpace('margin', 'bottom')};
`;
