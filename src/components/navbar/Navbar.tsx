import React from 'react';
import { Brain, Users } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='bg-white shadow-lg'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-between items-center h-16'>
					<Link href='/' className='flex items-center space-x-2'>
						<Brain className='h-8 w-8 text-indigo-600' />
						<span className='text-xl font-bold text-gray-800 hidden sm:block'>
							SkillScope
						</span>
					</Link>

					<div className='flex items-center space-x-4'>
						<Link
							href='/create'
							className='px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors'
						>
							Create Room
						</Link>
						<Link
							href='/join'
							className='px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition-colors flex items-center'
						>
							<Users className='h-4 w-4 mr-2' />
							Join Room
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
