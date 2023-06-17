// Import Styles
import GlobalStyle from './styles/GlobalStyle';
// Import Components
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
	return (
		<main>
			<GlobalStyle />
			<Navbar />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<ScrollToTop />
		</main>
	);
}

export default App;
