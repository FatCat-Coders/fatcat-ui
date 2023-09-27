// Types
import { TContentfulLink, TContentfulOptions, TParsedLink } from './types';

// Constants
import { CONTENTFUL_OPTIONS } from './constants';

function getLinkPrefix(typename: string | undefined): string {
	if (typename && typename === 'ContentfulBlogPost') {
		return 'blog/';
	}
	return '';
}

/**
 * A function to parse contentful response
 * @param link
 */
export function parseContentfulLink(link: TContentfulLink, linkComponent: any): TParsedLink {
	return {
		// eslint-disable-next-line no-underscore-dangle
		to: link.url || (link.page?.slug ? `/${getLinkPrefix(link.page?.__typename)}${link.page?.slug}/` : '#') || link.asset?.file.url || '',
		title: link.title,
		'aria-label': link.title,
		as: !link.page?.slug ? 'a' : linkComponent || 'a',
		target: link.openInNewTab ? '_blank' : '_self',
	};
}

/**
 * Parse options system from contentful to enchance different widgets
 * @param options
 */
export function parseContentfulOptions(options: TContentfulOptions[]) {
	const result: any = {
		[CONTENTFUL_OPTIONS.PADDING]: [],
		[CONTENTFUL_OPTIONS.PADDING_TOP]: '',
		[CONTENTFUL_OPTIONS.PADDING_RIGHT]: '',
		[CONTENTFUL_OPTIONS.PADDING_BOTTOM]: '',
		[CONTENTFUL_OPTIONS.PADDING_LEFT]: '',
		[CONTENTFUL_OPTIONS.PADDING_Y]: '',
		[CONTENTFUL_OPTIONS.PADDING_X]: '',
		[CONTENTFUL_OPTIONS.MARGIN]: [],
		[CONTENTFUL_OPTIONS.MARGIN_TOP]: '',
		[CONTENTFUL_OPTIONS.MARGIN_RIGHT]: '',
		[CONTENTFUL_OPTIONS.MARGIN_BOTTOM]: '',
		[CONTENTFUL_OPTIONS.MARGIN_LEFT]: '',
		[CONTENTFUL_OPTIONS.MARGIN_Y]: '',
		[CONTENTFUL_OPTIONS.MARGIN_X]: '',

		[CONTENTFUL_OPTIONS.LARGE_TABLET]: [],
		[CONTENTFUL_OPTIONS.TABLET]: [],
		[CONTENTFUL_OPTIONS.MOBILE]: [],
		[CONTENTFUL_OPTIONS.DESKTOP]: [],

		[CONTENTFUL_OPTIONS.OVERFLOW]: false,
	};

	if (!options) {
		return result;
	}

	options.forEach((option) => {
		switch (option.key) {
			case CONTENTFUL_OPTIONS.MARGIN:
			case CONTENTFUL_OPTIONS.LARGE_TABLET:
			case CONTENTFUL_OPTIONS.TABLET:
			case CONTENTFUL_OPTIONS.MOBILE:
			case CONTENTFUL_OPTIONS.DESKTOP:
			case CONTENTFUL_OPTIONS.PADDING: {
				if ((result[option.key]).indexOf(option.value) === -1) {
					(result[option.key]).push(option.value);
				}
				break;
			}
			case CONTENTFUL_OPTIONS.PADDING_TOP:
			case CONTENTFUL_OPTIONS.PADDING_RIGHT:
			case CONTENTFUL_OPTIONS.PADDING_BOTTOM:
			case CONTENTFUL_OPTIONS.PADDING_LEFT:
			case CONTENTFUL_OPTIONS.PADDING_Y:
			case CONTENTFUL_OPTIONS.PADDING_X:
			case CONTENTFUL_OPTIONS.MARGIN_TOP:
			case CONTENTFUL_OPTIONS.MARGIN_RIGHT:
			case CONTENTFUL_OPTIONS.MARGIN_BOTTOM:
			case CONTENTFUL_OPTIONS.MARGIN_LEFT:
			case CONTENTFUL_OPTIONS.MARGIN_Y:
			case CONTENTFUL_OPTIONS.MARGIN_X:
			case CONTENTFUL_OPTIONS.OVERFLOW: {
				result[option.key] = option.value;
				break;
			}
			default: {
				throw new Error(`The option ${option.key} doesn't exist`);
			}
		}
	});

	return result;
}
