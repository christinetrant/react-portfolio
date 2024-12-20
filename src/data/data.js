// src/data.js
import concentrationDesktop from '../assets/images/gallery/memory-desktop.webp';
import concentrationMobile from '../assets/images/gallery/memory-desktop.webp';
import robofriendsDesktop from '../assets/images/gallery/robofriends-desktop.webp';
import robofriendsMobile from '../assets/images/gallery/robofriends-mobile.webp';
import colorConvertDesktop from '../assets/images/gallery/colorconvert-desktop.webp';
import colorConvertMobile from '../assets/images/gallery/colorconvert-mobile.webp';
import bgGeneratorDesktop from '../assets/images/gallery/generator-desktop.webp';
import bgGeneratorMobile from '../assets/images/gallery/generator-mobile.webp';
import bromleyDesktop from '../assets/images/gallery/bromley-desktop.webp';
import bromleyMobile from '../assets/images/gallery/bromley-mobile.webp';
import bwwDesktop from '../assets/images/gallery/bww-desktop.webp';
import bwwMobile from '../assets/images/gallery/bww-mobile.webp';
import theResidentDesktop from '../assets/images/gallery/the-resident-desktop.webp';
import theResidentMobile from '../assets/images/gallery/the-resident-mobile.webp';
import ghgDesktop from '../assets/images/gallery/ghg-desktop.webp';
import ghgMobile from '../assets/images/gallery/ghg-mobile.webp';
import kirkerDesktop from '../assets/images/gallery/kirker-desktop.webp';
import kirkerMobile from '../assets/images/gallery/kirker-mobile.webp';

// import bgGeneratorDesktop from '../assets/images/gallery/generator-desktop.webp';
// import bgGeneratorMobile from '../assets/images/gallery/generator-mobile.webp';

export const projects = [
	{
		title: 'Concentration',
		tech: 'Javascript, CSS, HTML',
		description: 'A version of concentration - a card matching game.',
		desktopImage: concentrationDesktop,
		mobileImage: concentrationMobile,
		codeRepo: 'https://github.com/christinetrant/z2mChallenge14-MemoryGame',
		link: 'https://christinetrant.github.io/z2mChallenge14-MemoryGame/',
		featuredProject: true,
	},
	// {
	// 	title: 'RoboFriends',
	// 	tech: 'React, CSS',
	// 	description:
	// 		'A React App to search through robots by name and update cards.',
	// 	desktopImage: robofriendsDesktop,
	// 	mobileImage: robofriendsMobile,
	// 	codeRepo: 'https://github.com/christinetrant/robofriends',
	// 	link: 'https://christinetrant.github.io/robofriends/',
	// 	featuredProject: false,
	// },
	{
		title: 'Color Converter',
		tech: 'Javascript, CSS, HTML',
		description: 'A HEX<->RGB color converter developed using javascript.',
		desktopImage: colorConvertDesktop,
		mobileImage: colorConvertMobile,
		codeRepo: 'https://github.com/christinetrant/Coding_Challenge-6',
		link: 'https://christinetrant.github.io/Coding_Challenge-6/',
		featuredProject: false,
	},
	{
		title: 'Background Generator',
		tech: 'Javascript, HTML, NPM',
		description:
			'A background generator developed using javascript. Now also available as an npm package.',
		desktopImage: bgGeneratorDesktop,
		mobileImage: bgGeneratorMobile,
		codeRepo: 'https://github.com/christinetrant/Background-Generator',
		link: 'https://christinetrant.github.io/Background-Generator/',
		npmLink: 'https://www.npmjs.com/package/colorconverter-z2m',
		featuredProject: false,
	},
	{
		title: 'The Bromley Court Hotel',
		tech: 'Wordpress, PHP, SCSS, Javascript',
		description: '',
		desktopImage: bromleyDesktop,
		mobileImage: bromleyMobile,
		codeRepo: null,
		link: 'https://bromleycourthotel.co.uk/',
		featuredProject: false,
		liveSite: true,
	},
	{
		title: 'Body Works West',
		tech: 'Wordpress, PHP, SCSS, Javascript',
		description: '',
		desktopImage: bwwDesktop,
		mobileImage: bwwMobile,
		codeRepo: null,
		link: 'https://bodyworkswest.co.uk/',
		featuredProject: true,
		liveSite: true,
	},
	{
		title: 'The Resident Hotels',
		tech: 'Wordpress, PHP, SCSS, Javascript',
		description: '',
		desktopImage: theResidentDesktop,
		mobileImage: theResidentMobile,
		codeRepo: null,
		link: 'https://www.residenthotels.com/',
		featuredProject: true,
		liveSite: true,
	},
	{
		title: 'Good Hotel Guide',
		tech: 'Gatsby, Styled Components, GraphQl, Sanity CMS, Netlify',
		description: '',
		desktopImage: ghgDesktop,
		mobileImage: ghgMobile,
		codeRepo: '',
		link: 'https://gooodhotelguide.com/',
		liveSite: true,
	},
	{
		title: 'Kirker Holidays',
		tech: 'Gatsby, Styled Components, GraphQl, Sanity CMS, Netlify',
		description: '',
		desktopImage: kirkerDesktop,
		mobileImage: kirkerMobile,
		codeRepo: '',
		link: 'https://www.kirkerholidays.com/',
		liveSite: true,
	},
	// {
	// 	title: '',
	// 	tech: '',
	// 	description: '',
	// 	desktopImage: ,
	//   mobileImage: ,
	// 	codeRepo: '',
	//   link: ''
	// },
];

export const skills = [
	{ type: 'dev', name: 'HTML / CSS' },
	{ type: 'dev', name: 'Javascript' },
	{ type: 'dev', name: 'React' },
	{ type: 'dev', name: 'Vue' },
	{ type: 'dev', name: 'Node.js' },
	{ type: 'dev', name: 'WordPress' },
	{ type: 'dev', name: 'Headless CMS (Sanity, Strapi, Contentful)' },
	{ type: 'dev', name: 'PHP' },
	{ type: 'dev', name: 'Version Control (Git)' },
	{ type: 'dev', name: 'API Integration / GraphQL' },
	{ type: 'design', name: 'Figma' },
	{ type: 'design', name: 'Adobe XD' },
];
