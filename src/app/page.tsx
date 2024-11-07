'use client';

import Hero from '@/components/landing/Hero';
import Navbar from '@/components/navbar/Navbar';
import { HelmetProvider } from 'react-helmet-async';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Demo from '@/components/landing/Demo';
import Footer from '@/components/landing/Footer';

export default function Home() {
	const helmetContext = {};
	return (
		<>
			<HelmetProvider context={helmetContext}>
				<Navbar />
				<Hero />
				<Features />
				<HowItWorks />
				<Demo />
				<Footer />
			</HelmetProvider>
		</>
	);
}
