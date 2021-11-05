// eslint-disable-file no-restricted-globals
type LabelsType = ShareLabelsType | CTALabelsType;
type CategoriesType = string;
type ShareLabelsType = 'linkedin-share' | 'fb-share' | 'twitter-share';
// eslint-disable-next-line max-len
type CTALabelsType = 'Get in touch' | 'Contact us' | "Let's work together" | 'Get your agent' | 'Start hiring' | 'Contact us (from header)' | 'Contact us (from navigation menu)' | 'Submit' | 'See job board' | 'Send message';
type ActionsType = 'share-button-click' | 'cta-button-click';

export const TRACK_LABELS = {
	LINKEDIN_SHARE: 'linkedin-share',
	FB_SHARE: 'fb-share',
	TWITTER_SHARE: 'twitter-share',
	GET_IN_TOUCH: 'Get in touch',
	LETS_WORK_TOGETHER: "Let's work together",
	CONTACT_US: 'Contact us',
	CONTACT_US_NAVIGATION_MENU: 'Contact us (from navigation menu)',
	CONTACT_US_HEADER: 'Contact us (from header)',
	START_HIRING: 'Start hiring',
	SUBMIT: 'Submit',
	SEE_JOB_BOARD: 'See job board',
	SEND_MESSAGE: 'Send message',
	GET_YOUR_AGENT: 'Get your agent',
} as const;

export const TRACK_ACTIONS = {
	SHARE_BUTTON_CLICK: 'share-button-click',
	CTA_BUTTON_CLICK: 'cta-button-click',
} as const;

function gtagEvent(action: ActionsType, label: LabelsType, category: CategoriesType): void {
	// @ts-ignore
	if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
		// @ts-ignore
		window.gtag('event', action, {
			event_category: category,
			event_label: label,
		});
	}
}

// function fbEvent(action: ActionsType, label: LabelsType): void {
// 	// @ts-ignore
// 	if (typeof window.parent !== 'undefined' && typeof window.parent.fbq === 'function') {
// 		// @ts-ignore
// 		window.parent.fbq('trackCustom', action, {
// 			event_category: 'ConvertMore',
// 			event_label: label,
// 		});
// 	}
// }

export function trackAnalytic(action: ActionsType, label: LabelsType, category: CategoriesType): void {
	gtagEvent(action, label, category);
	// fbEvent(action, label);
}
