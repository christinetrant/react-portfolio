// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';

const NavbarStyles = styled.header`
	/************************/
	/*     TITLE / LOGO     */
	/************************/

	background: var(--background);
	display: sticky;
	top: 0;
	z-index: 10;
	.container {
		width: 100%;
		display: flex;
		flex-flow: wrap;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		align-content: center;
		text-align: center;
		padding: 20px;
		/* mx-auto  */
		@media (max-width: 768px) {
			flex-direction: row;
		}

		.title {
			font-family: var(--body-font);
			margin-bottom: 16px;

			margin: 0 auto;
			font-size: 4rem;
			/* font-family: 'Josefin Sans', sans-serif; */
			position: relative;
			/* Gradient Effects */
			background: -webkit-linear-gradient(left, #6a246a 50%, #3c80a3);
			background: -o-linear-gradient(left, #6a246a 50%, #3c80a3);
			background: linear-gradient(to right, #6a246a 50%, #3c80a3);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			@media (max-width: 768px) {
				margin-bottom: 0;
			}
			/* a {
      margin-left: 12px;
      font-size: 20px;
      line-height: 175%;
    } */
		}
		.navbar {
			display: flex;
			flex-flow: wrap;
			align-items: center;
			justify-content: center;
			font-size: var(--body-font-size-mobile);
			@media (max-width: 768px) {
				/* margin-right: auto; */
				/* margin-left: 16px; */
				padding: 4px 16px;
				/* border-left-width: 1px; */
			}
			a {
				&:not(:last-child) {
					margin-right: 20px;
				}

				/* &:hover {
        color: red;
      } */
				/* mr-5 hover:text-white */
			}
		}
	}
`;

export default function Navbar() {
	return (
		<NavbarStyles>
			<div className='container'>
				<div className='title'>
					<a href='#about'>Christine Trant</a>
				</div>
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
			</div>
		</NavbarStyles>
	);
}
