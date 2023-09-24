// src/components/Projects.js

import { CodeBracketIcon } from '@heroicons/react/24/solid';
import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/data';

const ProjectsSection = styled.section`
	.section-wrapper {
		* {
			-webkit-transition: 0.4s ease-in-out all;
			-o-transition: 0.4s ease-in-out all;
			transition: 0.4s ease-in-out all;
		}
		.gallery {
			/* display: grid; */
			/* grid-gap: 10px; */
			/* grid-gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
      grid-auto-rows: 225px;
      grid-auto-flow: dense;
      */
			max-width: 100vw;
			width: 100%;
			margin: 10px auto;
			padding: 0 10px;

			/**
      * User input values.
      */
			--grid-column-count: 4;
			--grid-layout-gap: 24px;
			--grid-item--min-width: 275px;
			@media (max-width: 575px) {
				--grid-layout-gap: 15px;
				--grid-item--min-width: 250px;
			}

			/**
      * Calculated values.
      */
			--gap-count: calc(var(--grid-column-count) - 1);
			--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
			--grid-item--max-width: calc(
				(100% - var(--total-gap-width)) / var(--grid-column-count)
			);

			display: grid;
			grid-template-columns: repeat(
				auto-fill,
				minmax(
					max(var(--grid-item--min-width), var(--grid-item--max-width)),
					1fr
				)
			);
			grid-gap: var(--grid-layout-gap);

			.gallery-item {
				position: relative;
				align-items: center;
				display: flex;
				justify-content: center;

				> img,
				.image-placeholder {
					height: 100%;
					object-fit: cover;
					width: 100%;
					border-radius: 5px;
					filter: blur(0px);
					box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
						rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
					&:hover {
						box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
							rgba(0, 0, 0, 0.05) 0px 5px 10px;
					}
					@media (max-width: 575px) {
						filter: blur(2px);
					}
				}
				.image-placeholder {
					background-color: rgba(var(--purple-rgb), 0.8);
					color: white;
					display: flex;
					justify-content: center;
					align-items: center;
					svg {
						height: 50%;
						width: 50%;
					}
				}
				.gallery-item_content {
					border-radius: 5px;

					position: absolute;
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					background-color: transparent;
					color: white;
					z-index: 2;
					opacity: 0;
					text-align: center;
					padding: 16px;
					gap: 12px;
					/* Show content on mobile (displays on hover for desktops) */
					@media (max-width: 768px) {
						background-color: rgba(120, 73, 112, 0.5);
						opacity: 1;
					}
					h5 {
						margin: 0;
					}
					p {
						font-size: 0.875rem;
						line-height: 1.25rem;
						margin: 0;
					}
					.btn-holder {
						gap: 16px;
						.btn {
							padding: 0;
							height: unset;
						}
					}
				}

				/* Different grid views */
				/* &.gallery-item_hor {
          grid-column: span 2;
        }
        
        &.gallery-item_vert {
          grid-row: span 2;
        }
        
        &.gallery-item_lg {
          grid-column: span 2;
          grid-row: span 2;
          .gallery-item_content {
            padding: 24px 32px;
            gap: 32px;
          }
        } */

				&:focus,
				&:hover {
					> img {
						filter: blur(2px);
					}
					.gallery-item_content {
						background-color: rgba(120, 73, 112, 0.5);
						opacity: 1;
					}
				}
			}
		}
	}
`;

export default function Projects() {
	return (
		<ProjectsSection id='projects' className=''>
			<div className='section-header section-3'>
				<CodeBracketIcon className='icon' />
				<h2>Projects</h2>
			</div>
			<div className='slanted slanted-3'></div>

			<div className='section-wrapper'>
				<div>
					<div className='gallery'>
						{projects.map((project, index) => {
							const {
								title,
								description,
								tech,
								desktopImage,
								mobileImage,
								codeRepo,
								link,
								npmLink,
								featuredProject,
								liveSite,
							} = project;
							return (
								<article
									key={index}
									className={
										featuredProject
											? 'gallery-item gallery-item_lg'
											: 'gallery-item'
									}>
									{desktopImage && mobileImage ? (
										<img
											srcSet={`${desktopImage} 480w, ${mobileImage} 800w`}
											sizes='(max-width: 600px) 480px, 800px'
											src={desktopImage}
											alt={title}
										/>
									) : (
										<div className='image-placeholder'>
											<CodeBracketIcon />
										</div>
									)}
									<div className='gallery-item_content'>
										<h3>{title}</h3>
										{description && <p>{description}</p>}
										{tech && <p>{tech}</p>}
										<div className='btn-holder'>
											{codeRepo && (
												<a
													href={codeRepo}
													className='btn code-btn'
													target='_blank'
													rel='noreferrer'>
													<span data-hover='Code'>Code</span>
												</a>
											)}
											{link && (
												<a
													href={link}
													className='btn code-btn'
													target='_blank'
													rel='noreferrer'>
													<span data-hover='Demo'>
														{liveSite ? 'View' : 'Demo'}
													</span>
												</a>
											)}
											{npmLink && (
												<a
													href={npmLink}
													className='btn code-btn'
													target='_blank'
													rel='noreferrer'>
													<span data-hover='npm'>npm</span>
												</a>
											)}
										</div>
									</div>
								</article>
							);
						})}

						{/* <article className="gallery-item gallery-item_hor">
            <img src="https://source.unsplash.com/random/500x500" alt=""/>
            <div className="gallery-item_content">
              <h4>Concentration</h4>
              <p>A version of concentration - a card matching game</p>
              <p>Javascript, CSS, HTML</p>
              <div className="btn-holder">
              <a href="https://github.com/christinetrant/z2mChallenge14-MemoryGame" className="btn code-btn" target="_blank" rel="noreferrer"><span data-hover="Code">Code</span></a>
              <a href="https://christinetrant.github.io/z2mChallenge14-MemoryGame/" className="btn code-btn" target="_blank" rel="noreferrer"><span data-hover="Demo">Demo</span></a>
              </div>
            </div>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/collection/190727/300x300" alt=""/>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/user/erondu/600x600" alt=""/>
          </article>
          <article className="gallery-item gallery-item_vert">
            <img src="https://source.unsplash.com/user/timmarshall/300x300" alt=""/>
          </article>
          <article className="gallery-item gallery-item_lg">
            <img src="https://source.unsplash.com/user/randomlies/300x300" alt=""/>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/user/joannecaselynsuarez/300x300" alt=""/>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/user/liamsimpson/600x600" alt=""/>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/user/stephanvancephoto/300x300" alt=""/>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/user/beataratuszniak/300x300" alt=""/>
          </article>
          <article className="gallery-item">
            <img src="https://source.unsplash.com/user/tonill/300x300" alt=""/>
          </article> */}
					</div>
				</div>
			</div>
		</ProjectsSection>
	);
}
