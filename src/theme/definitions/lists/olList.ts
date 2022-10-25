import { css } from 'styled-components';

export const OLLIST_VARIANT = {
	base: css`
		li::before {
			content: counter(item) ". ";
		}
	`,
	alphabet: css`
		li::before {
			content: counter(item, lower-alpha) ". ";
		}
	`,
	alphabetUpper: css`
		li::before {
			content: counter(item, upper-alpha) ". ";
		}
	`,
	noStyle: css``,
};
