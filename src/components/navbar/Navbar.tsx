import React from 'react';
import { Brain } from 'lucide-react';
import Link from 'next/link';
import Seo from '../seo/Seo';
import { NavbarLinks } from '@/data/data';

export default function Navbar() {
	const renderLinks = () => {
		return NavbarLinks.map((item) => (
			<Link
				key={item?.id}
				href={item?.link}
				className=' text-gray-700 font-semibold hover:text-primary transition-colors capitalize'
			>
				{item?.title}
			</Link>
		));
	};
	return (
		<>
			<Seo title='Skillscope' description='navbar for the page' />
			<nav className='bg-white shadow-md'>
				<div className='container mx-auto px-2'>
					<div className='flex justify-between items-center h-16'>
						<Link href='/' className='flex items-center space-x-2'>
							<Brain className='h-8 w-8 text-primary' />
							<span className='text-lg sm:text-xl font-bold text-primary hidden sm:block'>
								SkillScope
							</span>
						</Link>
						<div className='flex items-center space-x-4'>
							{renderLinks()}
							<Link
								href='/signin'
								className=' inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-btnHover'
							>
								Sign in
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
