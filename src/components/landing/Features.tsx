import React from 'react';
import {
	SquarePen,
	School,
	Users,
	ScreenShare,
	Calendar,
	CircleCheck,
} from 'lucide-react';

const Features = () => {
	return (
		<div>
			<section className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-3xl mb-3 font-extrabold text-gray-900 sm:text-4xl'>
							Key Features
						</h1>
						<span className='text-xl text-gray-600 text-center'>
							Discover the powerful features that make our platform unique
						</span>
					</div>

					<div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<div className='bg-white rounded-lg shadow-md p-6'>
							<div className='flex items-center justify-center h-12 w-12 rounded-md'>
								<SquarePen className='w-14 h-14 text-primary' />
							</div>

							<h1 className='mt-5 text-lg font-medium text-gray-900'>
								Create Test Rooms
							</h1>
							<p className='mt-2 text-base text-gray-500'>
								Easily set up rooms for conducting tests with detailed
								instructions and customizable settings.
							</p>
						</div>

						<div className='bg-white rounded-lg shadow-md p-6'>
							<div className='flex items-center justify-center h-12 w-12 '>
								<Users className='w-14 h-14 text-primary' />
							</div>
							<h1 className='mt-5 text-lg font-medium text-gray-900'>
								Live Monitoring
							</h1>
							<p className='mt-2 text-base text-gray-500'>
								Host and co-hosts can view live feeds from all attendees'
								screens, providing real-time insights.
							</p>
						</div>

						<div className='bg-white rounded-lg shadow-md p-6'>
							<div className='flex items-center justify-center h-12 w-12 '>
								<SquarePen className='w-14 h-14 text-primary' />
							</div>
							<h1 className='mt-5 text-lg font-medium text-gray-900'>
								Real-time Evaluation
							</h1>
							<p className='mt-2 text-base text-gray-500'>
								Hosts can rate and assign marks to users in real-time as they
								solve problems during the test.
							</p>
						</div>

						<div className='bg-white rounded-lg shadow-md p-6'>
							<div className='flex items-center justify-center h-12 w-12 '>
								<ScreenShare className='w-14 h-14 text-primary' />
							</div>
							<h1 className='mt-5 text-lg font-medium text-gray-900'>
								Screen Sharing
							</h1>
							<p className='mt-2 text-base text-gray-500'>
								Attendees can easily share their screens, allowing for a
								comprehensive view of their problem-solving process.
							</p>
						</div>

						<div className='bg-white rounded-lg shadow-md p-6'>
							<div className='flex items-center justify-center h-12 w-12 '>
								<Calendar className='w-14 h-14 text-primary' />
							</div>
							<h1 className='mt-5 text-lg font-medium text-gray-900'>
								Flexible Test Environments
							</h1>
							<p className='mt-2 text-base text-gray-500'>
								From waiting halls to common test areas and sign-off halls, our
								platform offers versatile test environments.
							</p>
						</div>

						<div className='bg-white rounded-lg shadow-md p-6'>
							<div className='flex items-center justify-center h-12 w-12 '>
								<CircleCheck className='w-14 h-14  text-primary' />
							</div>
							<h1 className='mt-5 text-lg font-medium text-gray-900'>
								Instant Results
							</h1>
							<p className='mt-2 text-base text-gray-500'>
								Attendees receive their scores via email and can view them on
								the site, with options to share on social platforms.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Features;
