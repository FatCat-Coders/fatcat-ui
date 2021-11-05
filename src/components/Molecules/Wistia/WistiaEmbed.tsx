import React from 'react';

export type TWistiaEmbed = {
	hashedId: string;
}

const WistiaEmbed: React.FC<TWistiaEmbed> = (props) => {
	const { hashedId } = props;

	const videoHandleRef = React.useRef(null);

	React.useEffect(() => {
		if (!document.getElementById('wistia_script')) {
			const wistiaScript = document.createElement('script');
			wistiaScript.id = 'wistia_script';
			wistiaScript.type = 'text/javascript';
			wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
			wistiaScript.async = true;
			document.body.appendChild(wistiaScript);
		}

		if (typeof window !== 'undefined') {
			const windowRef: any = window;

			windowRef._wq = windowRef._wq || []; // eslint-disable-line
			windowRef._wq.push({ // eslint-disable-line
				id: hashedId,
				onEmbedded: (video: null) => {
					videoHandleRef.current = video;
				},
			});
		}

		return () => {
			if (videoHandleRef.current) {
				// @ts-ignore
				videoHandleRef.current.remove();
			}
		};
	}, []);

	return (
		<div
			className="wistia_responsive_wrapper"
		>
			<div
				className={`wistia_embed wistia_async_${hashedId} videoFoam=true`}
				style={{ height: '100%', width: '100%' }}
			>
				&nbsp;
			</div>
		</div>
	);
};

export default WistiaEmbed;
