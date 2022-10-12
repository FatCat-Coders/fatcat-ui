import { Link } from 'gatsby';

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
export function parseContentfulLink(link: TContentfulLink): TParsedLink {
	return {
		// eslint-disable-next-line no-underscore-dangle
		to: link.url || link.asset?.file.url || (link.page?.slug ? `/${getLinkPrefix(link.page?.__typename)}${link.page?.slug}/` : '#'),
		title: link.title,
		as: !link.page?.slug ? 'a' : Link,
		target: link.openInNewTab ? '_blank' : '_self',
	};
}

/**
 * Parse options system from contentful to enchance different widgets
 * @param options
 */
export function parseContentfulOptions(options: TContentfulOptions[]) {
	const result: { [x: string]: Array<string> | boolean | string } = {
		[CONTENTFUL_OPTIONS.PADDING]: [],
		[CONTENTFUL_OPTIONS.MARGIN]: [],

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
				if ((result[option.key] as Array<string>).indexOf(option.value) === -1) {
					(result[option.key] as Array<string>).push(option.value);
				}
				break;
			}
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
