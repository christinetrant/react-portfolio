import React from 'react';
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';
import styled from 'styled-components';

const FooterStyles = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	text-align: center;
	color: black;
	a {
		&:hover,
		&:active,
		&:focus {
			text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);
		}
	}
	.footer-wrapper {
		padding: 20px 50px;
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: 12px;
		@media (max-width: 575px) {
			justify-content: center;
			flex-direction: column;
			align-content: center;
		}
		a {
			@media (max-width: 575px) {
				font-size: 1.2rem;
			}
		}
		nav {
			display: inline-flex;
			justify-content: center;
			gap: 12px;
			@media (max-width: 575px) {
				flex-wrap: wrap;
			}
		}
		.social-links {
			display: flex;
			justify-content: center;
			gap: 8px;
			a {
				transition: color 0.3s ease-in-out;
				&:hover {
					color: var(--purple);
				}
			}
		}
	}
`;

const Footer = () => {
	return (
		<FooterStyles>
			<div className='footer-wrapper'>
				<nav className='navbar'>
					<a href='#projects' className='slide-in'>
						Past Work
					</a>
					<a href='#skills' className='slide-in'>
						Skills
					</a>
					<a href='#projects' className='slide-in'>
						My Work
					</a>
					<a href='#contact' className='slide-in'>
						Contact Me
					</a>
				</nav>
				<div className='social-links'>
					<a
						href='http://ie.linkedin.com/in/christinetrant'
						aria-label="My LinkedIn"
						target='_blank'
						rel='noreferrer'
						className='green'>
						<TbBrandLinkedin className='icon-marker' />
					</a>
					<a
						href='https://github.com/christinetrant'
						aria-label="My Github"
						target='_blank'
						rel='noreferrer'
						className='green'>
						<TbBrandGithub className='icon-marker' />
					</a>
				</div>
			</div>
		</FooterStyles>
	);
};

export default Footer;
