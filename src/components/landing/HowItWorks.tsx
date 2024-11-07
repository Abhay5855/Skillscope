import { CirclePlus, ClipboardCheck, Eye, LogIn, Mail } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
	return (
		<>
			<section className='bg-white py-12 sm:py-16 lg:py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h2 className='text-3xl mb-3 font-extrabold text-gray-900 sm:text-4xl'>
							How It Works
						</h2>
						<span className='mt-4 text-xl text-gray-600 text-center'>
							Our platform simplifies the process of conducting and monitoring
							live tests
						</span>
					</div>

					<div className='mt-16'>
						<div className='relative'>
							<div
								className='absolute inset-0 flex items-center'
								aria-hidden='true'
							>
								<div className='w-full border-t border-gray-300'></div>
							</div>
							<div className='relative flex justify-center'>
								<span className='px-3 bg-white text-lg font-medium text-gray-900'>
									Follow these simple steps
								</span>
							</div>
						</div>

						<div className='mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none'>
							<div className='flex flex-col bg-white rounded-lg shadow-md p-6'>
								<div className='flex-shrink-0'>
									<div className='flex items-center justify-center h-12 w-12'>
										<CirclePlus className='text-primary' />
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium text-gray-900'>
										1. Create a Test Room
									</h3>
									<p className='mt-2 text-base text-gray-500'>
										Set up a virtual room with test details, instructions, and
										customize settings according to your needs.
									</p>
								</div>
							</div>

							<div className='flex flex-col bg-white rounded-lg shadow-md p-6'>
								<div className='flex-shrink-0'>
									<div className='flex items-center justify-center h-12 w-12'>
										<LogIn className='text-primary' />
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium text-gray-900'>
										2. Attendees Join the Room
									</h3>
									<p className='mt-2 text-base text-gray-500'>
										Participants enter the waiting hall and then move to the
										common area when the test begins.
									</p>
								</div>
							</div>

							<div className='flex flex-col bg-white rounded-lg shadow-md p-6'>
								<div className='flex-shrink-0'>
									<div className='flex items-center justify-center h-12 w-12'>
										<Eye className='text-primary' />
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium text-gray-900'>
										3. Live Monitoring
									</h3>
									<p className='mt-2 text-base text-gray-500'>
										Hosts view live screen feeds and evaluate participants in
										real-time as they solve problems.
									</p>
								</div>
							</div>
						</div>

						<div className='mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none'>
							<div className='flex flex-col bg-white rounded-lg shadow-md p-6'>
								<div className='flex-shrink-0'>
									<div className='flex items-center justify-center h-12 w-12'>
										<ClipboardCheck className='text-primary' />
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium text-gray-900'>
										4. Test Completion
									</h3>
									<p className='mt-2 text-base text-gray-500'>
										Attendees move to the sign-off hall after completing the
										test, ensuring a structured end to the session.
									</p>
								</div>
							</div>

							<div className='flex flex-col bg-white rounded-lg shadow-md p-6'>
								<div className='flex-shrink-0'>
									<div className='flex items-center justify-center h-12 w-12'>
										<Mail className='text-primary' />
									</div>
								</div>
								<div className='mt-4'>
									<h3 className='text-lg font-medium text-gray-900'>
										5. Results and Feedback
									</h3>
									<p className='mt-2 text-base text-gray-500'>
										Participants receive their scores via email and can view
										detailed feedback on the platform.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HowItWorks;
