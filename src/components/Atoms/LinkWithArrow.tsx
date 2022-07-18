import React from 'react';
import styled from 'styled-components';
import { LinkBase, LinkComponent } from './Link';

const Arrow = styled.i`
	border-style: solid;
	border-color: inherit;
	border-width: 0 calc(1em * 0.1) calc(1em * 0.1) 0;
	display: inline-block;
	width: calc(1em/4);
	height: calc(1em/4);
	transform: rotate(-45deg) translateY(-33%);
	margin-left: 10px;
`;

export const LinkWWithArrow: LinkComponent = (props) => {
	const { children, to, ...linkProps } = props;
	return (
		<LinkBase href={to} to={props.as ? to : undefined} {...linkProps}>
			{children}
			<Arrow />
		</LinkBase>
	);
};

LinkWWithArrow.defaultProps = {
	variant: 'base',
};
