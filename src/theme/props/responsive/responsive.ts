import { css, DefaultTheme } from 'styled-components';

// Helpers
import pickObjectProperties from '../../../utils/pick-object-properties';

import { MEDIA } from '../../definitions';
import { RESPONSIVE_BEHAVIORS } from '../../styles/responsive';
import { SideSpacingValue } from '../space/space';

type ResponsiveTypes = keyof DefaultTheme['responsive'];

type ResponsiveTypePropCheck = (ResponsiveTypes | Partial<Record<'padding' | 'margin', SideSpacingValue[]>> | Partial<Record<Exclude<ResponsiveTypes, 'padding' | 'margin'>, any>>)[];

export type ResponsiveProps = {
	mobile?: ResponsiveTypePropCheck
	tablet?: ResponsiveTypePropCheck
	largeTablet?: ResponsiveTypePropCheck
	desktop?: ResponsiveTypePropCheck
	largeDesktop?: ResponsiveTypePropCheck
	desktopStandard?: ResponsiveTypePropCheck
};

export const responsive = css<ResponsiveProps>`
	${props => props.desktop && css`
		${props.theme.media.desktop} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.desktop)}
		}
	`}
	${props => props.largeTablet && css`
		${props.theme.media.largeTablet} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.largeTablet)}
		}
	`}
	${props => props.tablet && css`
		${props.theme.media.tablet} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.tablet)}
		}
	`}
	${props => props.mobile && css`
		${props.theme.media.mobile} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.mobile)}
		}
	`}
	${props => props.largeDesktop && css`
		${props.theme.media.largeDesktop} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.largeDesktop)}
		}
	`}
	${props => props.desktopStandard && css`
		${props.theme.media.desktopStandard} {
			${pickObjectProperties(RESPONSIVE_BEHAVIORS, props.desktopStandard)}
		}
	`}
`;
