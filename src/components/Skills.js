// src/components/Skills.js
// Import Core
import React from 'react';
// Import Libraries
import styled from 'styled-components';
// Import Icons
import { BiPaint } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { HiCpuChip } from 'react-icons/hi2';
// Import Assets
import cvIcon from '../assets/images/cv-icon.svg';
import cvPdf from '../assets/files/Christine_Trant_CV_2024.pdf';
// Import Data
import { skills } from '../data/data';

const SkillsSection = styled.section`
	.skills-list {
		ul {
			columns: 2;
			margin-bottom: 16px;
			@media (max-width: 575px) {
				columns: unset;
			}
			li {
				display: flex;
				align-items: center;
				&:nth-child(4n + 0) {
					.icon-marker {
						color: var(--pink);
					}
				}
				&:nth-child(4n + 1) {
					.icon-marker {
						color: var(--blue);
					}
				}
				&:nth-child(4n + 2) {
					.icon-marker {
						color: var(--purple);
					}
				}
				&:nth-child(4n + 3) {
					.icon-marker {
						color: var(--green);
					}
				}
			}
		}
	}

	.icon-btn {
		&:before {
			content: '';
			background-image: url(${cvIcon});
		}
	}
`;

export default function Skills() {
	return (
		<SkillsSection id='skills'>
			<div className='section-header section-2'>
				<HiCpuChip className='icon' />
				<h2>Skills / My Resume</h2>
			</div>
			<div className='slanted slanted-2'></div>

			<div className='section-wrapper'>
				<div>
					<div className='skills-list'>
						{/* TODO: ADD ANIMATION */}
						<ul>
							{skills.map((skill) => (
								<li key={skill.name}>
									{skill.type === 'dev' ? (
										<BsCodeSlash className='icon-marker' />
									) : (
										<BiPaint className='icon-marker' />
									)}
									<span>{skill.name}</span>
								</li>
							))}
						</ul>
					</div>

					<div className='btn-holder'>
						<a
							href={cvPdf}
							target='_blank'
							className='btn blue-btn icon-btn'
							rel='noreferrer'>
							My Resume
						</a>
					</div>
				</div>
			</div>
		</SkillsSection>
	);
}
