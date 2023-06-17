// SCROLL TO TOP BUTTON
import React, { useState } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTopButton = styled.button`
	/* display: none; */
	position: fixed;
	bottom: 15px;
	right: 0px;
	z-index: 99;
	border: none;
	outline: none;
	color: white;
	cursor: pointer;
	padding: 15px;
	border-radius: 4px;
	color: #ce4c6e;
	background: transparent;
	font-size: 2.5rem;
	@media (max-width: 575px) {
		font-size: 1.5rem;
	}
	/* Tooltip text */
	.scrollTooltip {
		visibility: hidden;
		position: absolute;
		z-index: 1;
		width: 120px;
		bottom: 100%;
		left: 50%;
		margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
		padding: 0;
		border-radius: 6px;
		font-family: 'Josefin Sans', sans-serif;
		font-size: 1.5em;
		text-align: center;
		background-color: transparent;
		color: #ce4c6e;
	}
	/* Show the tooltip text when you mouse over the tooltip container */
	#scrollTopBtn:hover .scrollTooltip {
		visibility: visible;
	}
`;

const ScrollToTop = () => {
	// When the user scrolls down 20px from the top of the document, show the button
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 20) {
			setVisible(true);
		} else if (scrolled <= 20) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
			/* you can also use 'auto' behaviour
           in place of 'smooth' */
		});
	};

	window.addEventListener('scroll', toggleVisible);
	return (
		<ScrollToTopButton
			id='scrollTopBtn'
			onClick={scrollToTop}
			style={{ display: visible ? 'inline' : 'none' }}>
			<FaChevronCircleUp />
			<span className='scrollTooltip'>Scroll to Top</span>
		</ScrollToTopButton>
	);
};

export default ScrollToTop;
