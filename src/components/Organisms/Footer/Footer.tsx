import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Assets
import logo from '../../../assets/images/logo.svg';

// Theme
import { COLOR } from '../../../theme/definitions';

// FontAwesome
import {
	faEnvelope, faMapMarkerAlt, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faFacebookF, faInstagram, faLinkedinIn, faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Atoms
import {
	Flex, Image, Link, Paragraph, Wrapper,
} from '../../Atoms';
import { Icon } from '../../Atoms/Icons/Icon';

// Molecules
import Section from '../../Molecules/Section/Section';
import SocialShareIcon from '../../Molecules/SocialShare/SocialShareIcon';

const Footer = () => {
	return (
		<>
			<Section
				backgroundColor="background"
				padding={['b184', 't112']}
				scale
			>
				<Flex
					justifyContent="space-between"
					alignItems="flex-start"
					largeTablet={['flexWrap', 'textCenter']}
					height="100%"
				>
					<Flex
						direction="column"
						justifyContent="space-between"
						alignItems="flex-start"
						largeTablet={['autoHeight']}
						height="100%"
					>
						<Wrapper
							tablet={['fluid', 'autoWidth']}
							largeTablet={['fluid', 'autoWidth', 'clearRightSideSpacing', {
								padding: ['b32'],
							}]}
							margin={['r24']}
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
						<Flex
							width="auto"
							gap="16px"
						>
							<SocialShareIcon icon={faFacebookF} />
							<SocialShareIcon icon={faTwitter} />
							<SocialShareIcon icon={faLinkedinIn} />
							<SocialShareIcon icon={faInstagram} />
						</Flex>
					</Flex>
					<Flex
						direction="column"
						largeTablet={['fluid',
							{
								padding: ['t40'],
							},
						]}
					>
						<Paragraph
							textColor="primary"
							fontWeight="bold"
							textSize="paragraph14"
							padding={['b32']}
							largeTablet={[{
								padding: ['b24'],
							}]}
						>
							Contact
						</Paragraph>
						<Flex
							padding={['b24']}
							width="auto"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								color="white"
								height="8px"
							/>
							<Wrapper
								margin={['l12']}
								width="auto"
							>
								<Link
									as={GatsbyLink}
									to="#"
									type="white"
								>
									Grok123@gmail.com
								</Link>
							</Wrapper>
						</Flex>
						<Flex
							padding={['b24']}
							width="auto"
						>
							<FontAwesomeIcon
								icon={faPhone}
								color="white"
								height="8px"
							/>
							<Wrapper
								margin={['l12']}
								width="auto"
							>
								<Link
									as={GatsbyLink}
									to="#"
									type="white"
								>
									0000 000 000
								</Link>
							</Wrapper>
						</Flex>
						<Flex
							width="auto"
						>
							<FontAwesomeIcon
								icon={faMapMarkerAlt}
								color="white"
								height="8px"
							/>
							<Wrapper
								margin={['l12']}
								width="auto"
							>
								<Link
									as={GatsbyLink}
									to="#"
									type="white"
								>
									Here is the business street address
								</Link>
							</Wrapper>
						</Flex>
					</Flex>
					<Flex
						direction="column"
						largeTablet={['fluid',
							{
								padding: ['t40'],
							},
						]}
					>
						<Paragraph
							textColor="primary"
							fontWeight="bold"
							textSize="paragraph14"
							padding={['b32']}
							largeTablet={[{
								padding: ['b24'],
							}]}
						>
							Terms
						</Paragraph>
						<Flex
							padding={['b24']}
							width="auto"
						>
							<Link
								as={GatsbyLink}
								to="/privacy-policy"
								type="white"
							>
								Privacy Policy
							</Link>
						</Flex>
						<Flex
							padding={['b24']}
							width="auto"
						>
							<Link
								as={GatsbyLink}
								to="/terms-of-use"
								type="white"
							>
								Terms and Conditions
							</Link>
						</Flex>
						<Flex
							width="auto"
						>
							<Link
								as={GatsbyLink}
								to="#"
								type="white"
							>
								Copyright Policy
							</Link>
						</Flex>
					</Flex>
				</Flex>
			</Section>
			<Section
				backgroundColor="background"
			>
				<Wrapper
					borderBottom={`1px solid ${COLOR.white10}`}
					width="100%"
					margin={['b16']}
				/>
				<Paragraph
					textAlign="center"
					padding={['b32']}
					textColorOpacity={0.8}
					textSize="paragraph14"
				>
					Copyright 2021 Grok. All rights reserved.
				</Paragraph>
			</Section>
		</>
	);
};

export default Footer;
