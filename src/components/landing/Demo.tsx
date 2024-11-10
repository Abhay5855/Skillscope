import React from 'react';

const Demo = () => {
	return (
		<div>
			<section className='bg-primary py-16 sm:py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col items-center '>
						<h2 className='text-3xl font-extrabold text-text sm:text-4xl'>
							Transform Your Testing Process Today
						</h2>
						<p className='mt-4 text-xl text-text'>
							Join thousands of organizations that have revolutionized their
							assessment methods
						</p>
					</div>
					<div className='mt-10 flex justify-center'>
						<div className='inline-flex rounded-md shadow'>
							<a
								href='#'
								className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50'
							>
								Start Your Free Trial
							</a>
						</div>
						<div className='ml-3 inline-flex'>
							<a
								href='#'
								className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#15803D] hover:bg-[#166534]'
							>
								Schedule a Demo
							</a>
						</div>
					</div>
					<div className='mt-8 flex items-center justify-center flex-col'>
						<p className='text-base text-text font-bold'>
							No credit card required. 14-day free trial.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Demo;
