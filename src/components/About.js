// src/components/About.js
// ABOUT ME / RESUME

import React from 'react';
import { FaPencilAlt, FaRegPaperPlane, FaRegSmileBeam } from 'react-icons/fa';
import { HiAcademicCap, HiDesktopComputer } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb';

export default function About() {
	return (
		<section id='about'>
			<div className='section-header section-1'>
				<h2>"Everything stinks till it's finished." ~ Dr. Seuss</h2>
			</div>
			<div className='slanted slanted-1'></div>
			<div className='section-wrapper'>
				<div>
					<p>
						<FaRegSmileBeam className='icon-marker blue' />
						I'm Christine, a front-end developer.
					</p>

					<p>
						<FaRegPaperPlane className='icon-marker green' />
						<a className='slide-in page-scroll' href='#contact'>
							christinetrant@gmail.com
						</a>
					</p>

					<p>
						<FaPencilAlt className='icon-marker purple' />
						I'm a London-Irish girl based in London, UK.
					</p>
					<p className='padLeft'>
						<HiAcademicCap className='icon-marker pink' />
						I have a BSc. in Computer
						Science and a HND in Digital Media.
					</p>
					<p className='padLeft'>
						<HiDesktopComputer className='icon-marker blue'/>
						I have 2+ years of
						experience in the industry.
					</p>
					<p className='social-links'>
						<TbBrandLinkedin className='icon-marker' />
						<a
							href='http://ie.linkedin.com/in/christinetrant'
							target='_blank'
							rel='noreferrer'
							className='slide-in green'>
							linkedin.com/in/christinetrant
						</a>
					</p>

					<p className='social-links'>
						<TbBrandGithub className='icon-marker' />
						<a
							href='https://github.com/christinetrant'
							target='_blank'
							rel='noreferrer'
							className='slide-in green'>
							github.com/christinetrant
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
