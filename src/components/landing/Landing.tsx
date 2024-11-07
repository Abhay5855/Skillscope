import Navbar from '../navbar/Navbar';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Demo from './Demo';
import Footer from './Footer';
import Seo from '../seo/Seo';

const Landing = () => {
	return (
		<>
			<Seo
				title='A landing page for the skillscope'
				description='A landing page with navbar, footer, about us and features'
			/>
			<Navbar />
			<Hero />
			<Features />
			<HowItWorks />
			<Demo />
			<Footer />
		</>
	);
};

export default Landing;
