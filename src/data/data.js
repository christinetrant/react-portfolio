// src/data.js
import concentrationDesktop from '../assets/images/gallery/memory-desktop.png';
import concentrationMobile from '../assets/images/gallery/memory-desktop.png';
import robofriendsDesktop from '../assets/images/gallery/robofriends-desktop.png';
import robofriendsMobile from '../assets/images/gallery/robofriends-mobile.png';
import colorConvertDesktop from '../assets/images/gallery/colorconvert-desktop.png';
import colorConvertMobile from '../assets/images/gallery/colorconvert-mobile.png';
import bgGeneratorDesktop from '../assets/images/gallery/generator-desktop.png';
import bgGeneratorMobile from '../assets/images/gallery/generator-mobile.png';
import bromleyDesktop from '../assets/images/gallery/bromley-desktop.png';
// import bromleyMobile from '../assets/images/gallery/generator-mobile.png';
import bwwDesktop from '../assets/images/gallery/bww-desktop.png';
// import bwwMobile from '../assets/images/gallery/generator-mobile.png';
import theResidentDesktop from '../assets/images/gallery/the-resident-desktop.png';
import ghgDesktop from '../assets/images/gallery/ghg-desktop.png';
// import theResidentMobile from '../assets/images/gallery/generator-mobile.png';

// import bgGeneratorDesktop from '../assets/images/gallery/generator-desktop.png';
// import bgGeneratorMobile from '../assets/images/gallery/generator-mobile.png';

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
	{
		title: 'RoboFriends',
		tech: 'React, CSS',
		description:
			'A React App to search through robots by name and update cards.',
		desktopImage: robofriendsDesktop,
		mobileImage: robofriendsMobile,
		codeRepo: 'https://github.com/christinetrant/robofriends',
		link: 'https://christinetrant.github.io/robofriends/',
		featuredProject: false,
	},
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
	// TODO: ADD PROJECTS FROM UMI
	{
		title: 'The Bromley Court Hotel',
		tech: 'Wordpress, PHP, SCSS, Javascript',
		description: '',
		desktopImage: bromleyDesktop,
		mobileImage: bromleyDesktop,
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
		mobileImage: bwwDesktop,
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
		mobileImage: theResidentDesktop,
		codeRepo: null,
		link: 'https://www.residenthotels.com/',
		featuredProject: true,
		liveSite: true,
	},
	{
		title: 'Good Hotel Guide',
		tech: 'Gatsby, Styled Components, GraphQl, Sanity CMS, Netlify',
		description: 'Coming Soon! A new bespoke design for the Good Hotel Guide',
		desktopImage: ghgDesktop,
		mobileImage: ghgDesktop,
		codeRepo: '',
		link: '',
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

// {
// 	title: '',
// 	tech: '',
// 	description: '',
// 	desktopImage: ,
//   mobileImage: ,
// 	codeRepo: '',
//   link: ''
// },

export const skills = [
	{ type: 'dev', name: 'HTML / CSS' },
	{ type: 'dev', name: 'Javascript' },
	{ type: 'dev', name: 'React' },
	{ type: 'dev', name: 'Vue' },
	{ type: 'dev', name: 'Node.js' },
	{ type: 'dev', name: 'WordPress' },
	{ type: 'dev', name: 'Headless CMS (Sanity, Strapi)' },
	{ type: 'dev', name: 'PHP' },
	{ type: 'dev', name: 'Version Control (Git)' },
	{ type: 'dev', name: 'API Integration' },
	{ type: 'design', name: 'Figma' },
	{ type: 'design', name: 'Adobe XD' },
];
