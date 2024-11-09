'use client';

import { HelmetProvider } from 'react-helmet-async';
import './globals.css';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const helmetContext = {};
	return (
		<HelmetProvider context={helmetContext}>
			<html lang='en'>
				<body className=''>{children}</body>
			</html>
		</HelmetProvider>
	);
}
