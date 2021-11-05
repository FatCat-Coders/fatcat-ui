import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

// Assets
import logo from '../../../assets/images/logo.svg';

// Theme
import { COLOR } from '../../../theme/definitions';

// Atoms
import {
	Flex, Image, Link, Paragraph, Wrapper,
} from '../../Atoms';

// Molecules
import Section from '../../Molecules/Section/Section';

const FooterSimple = () => {
	return (
		<Section
			backgroundColor="transparent"
			padding={['b56', 't20']}
		>
			<Wrapper
				borderBottom={`1px solid ${COLOR.white10}`}
				width="100%"
				margin={['b40', 't32']}
			/>
			<Flex
				justifyContent="space-between"
				alignItems="center"
				tablet={['flexWrap']}
			>
				<Wrapper
					tablet={['fluid', 'autoWidth']}
					width="auto"
				>
					<Wrapper
						as={GatsbyLink}
						to="/"
						width="auto"
					>
						<Image
							width="auto"
							src={logo}
							maxHeight="32px"
						/>
					</Wrapper>
				</Wrapper>
				<Wrapper
					width="auto"
					tablet={['fluid', {
						padding: ['b32', 't32'],
					}]}
				>
					<Paragraph
						textColorOpacity={0.8}
						textSize="paragraph14"
						tablet={['textLeft']}
					>
						Copyright 2021 Grok. All rights reserved.
					</Paragraph>
				</Wrapper>
				<Flex
					width="auto"
					tablet={['flexWrap']}
				>
					<Wrapper
						width="auto"
						padding={['r56']}
						tablet={['fluid', {
							padding: ['b32'],
						}]}
					>
						<Link
							as={GatsbyLink}
							to="/privacy-policy"
							type="white"

						>
							Privacy Policy
						</Link>
					</Wrapper>
					<Wrapper
						width="auto"
						tablet={['fluid']}
					>
						<Link
							as={GatsbyLink}
							to="/terms-of-use"
							type="white"
						>
							Terms and Conditions
						</Link>
					</Wrapper>
				</Flex>
			</Flex>
		</Section>
	);
};

export default FooterSimple;
