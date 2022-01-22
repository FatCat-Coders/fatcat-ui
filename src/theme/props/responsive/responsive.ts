import { css, DefaultTheme } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

import { RESPONSIVE_BEHAVIORS } from '../../styles/responsive';
import { SideSpacingValue } from '../space/space';

type ResponsiveTypes = keyof DefaultTheme['responsive'];

export type ResponsiveTypePropCheck = (ResponsiveTypes | Partial<Record<'padding' | 'margin', SideSpacingValue[]>> | Partial<Record<Exclude<ResponsiveTypes, 'padding' | 'margin'>, any>>)[];

export type ResponsiveProps = {
	$mobile?: ResponsiveTypePropCheck
	$tablet?: ResponsiveTypePropCheck
	$largeTablet?: ResponsiveTypePropCheck
	$desktop?: ResponsiveTypePropCheck
	$largeDesktop?: ResponsiveTypePropCheck
	$desktopStandard?: ResponsiveTypePropCheck
};

export const responsive = css<ResponsiveProps>`
	${props => props.$largeDesktop && css`
		${props.theme.media.largeDesktop} {
			${pickObjectProperties(props.theme.responsive, props.$largeDesktop)}
		}
	`}
	${props => props.$desktopStandard && css`
		${props.theme.media.desktopStandard} {
			${pickObjectProperties(props.theme.responsive, props.$desktopStandard)}
		}
	`}
	${props => props.$desktop && css`
		${props.theme.media.desktop} {
			${pickObjectProperties(props.theme.responsive, props.$desktop)}
		}
	`}
	${props => props.$largeTablet && css`
		${props.theme.media.largeTablet} {
			${pickObjectProperties(props.theme.responsive, props.$largeTablet)}
		}
	`}
	${props => props.$tablet && css`
		${props.theme.media.tablet} {
			${pickObjectProperties(props.theme.responsive, props.$tablet)}
		}
	`}
	${props => props.$mobile && css`
		${props.theme.media.mobile} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.$mobile)}
		}
	`}
`;
