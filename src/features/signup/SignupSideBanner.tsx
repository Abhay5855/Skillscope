import { FC } from 'react';
import image from '../../../public/image.png';
import Image from 'next/image';
const SignupSideBanner: FC = () => {
	return (
		<aside className='flex flex-col justify-center items-center text-white max-xl:hidden bg-side-banner overflow-hidden'>
			<div className='grid grid-rows-[auto-1fr] gap-6 tracking-tighter'>
				<blockquote className='text-2xl h-fit text-center font-bold'>
					"With Skill Scope Taking Interview has become a game-changer for the
					Industry"
				</blockquote>
				<div className='flex flex-col justify-center items-center gap-1 p-0 m-0'></div>
			</div>
		</aside>
	);
};
export default SignupSideBanner;
