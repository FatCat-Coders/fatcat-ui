import React from 'react';

const SplitText = (text: string) => {
	return text.split('\n')
		// @ts-ignore
		.reduce((children, textSegment, index) => [...children, index > 0 && <br key={index} />, textSegment], []); // eslint-disable-line
};

export default SplitText;
