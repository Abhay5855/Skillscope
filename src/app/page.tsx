'use client';

import Hero from '@/components/landing/Hero';
import Navbar from '@/components/navbar/Navbar';
import Features from '@/components/landing/Features';
import HowItWorks from '@/components/landing/HowItWorks';
import Demo from '@/components/landing/Demo';
import Footer from '@/components/landing/Footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<HowItWorks />
			<Demo />
			<Footer />
		</>
	);
}
