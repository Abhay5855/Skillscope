'use client';

import Navbar from '@/components/navbar/Navbar';
import SEO from '@/components/seo/Seo';
import { HelmetProvider } from 'react-helmet-async';

export default function Home() {
	const helmetContext = {};
	return (
		<>
			<HelmetProvider context={helmetContext}>
				<Navbar />
			</HelmetProvider>
		</>
	);
}
