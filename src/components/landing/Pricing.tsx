import React from 'react';

const Pricing = () => {
	return (
		<>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
				<div className='text-center'>
					<h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
						Flexible Pricing for Every Need
					</h2>
					<p className='mt-4 text-xl text-gray-600'>
						Choose the plan that fits your organization's testing requirements
					</p>
				</div>
				<div className='mt-16 grid gap-8 lg:grid-cols-3'>
					<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
						<div className='p-8'>
							<h3 className='text-2xl font-semibold text-gray-900'>Basic</h3>
							<p className='mt-4 text-gray-600'>
								For small teams and organizations
							</p>
							<p className='mt-8'>
								<span className='text-4xl font-extrabold text-primary'>
									$29
								</span>
								<span className='text-base font-medium text-gray-500'>
									/month
								</span>
							</p>
							<ul className='mt-8 space-y-4'>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Up to 50 participants
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Basic screen sharing
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>Email support</span>
								</li>
							</ul>
							<a
								href='#'
								className='mt-8 block w-full bg-primary text-center py-3 rounded-md text-white font-semibold hover:bg-primary-700 transition duration-300'
							>
								Get Started
							</a>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-lg overflow-hidden border-4 border-primary-500'>
						<div className='p-8'>
							<h3 className='text-2xl font-semibold text-gray-900'>Pro</h3>
							<p className='mt-4 text-gray-600'>
								For growing businesses and institutions
							</p>
							<p className='mt-8'>
								<span className='text-4xl font-extrabold text-primary'>
									$99
								</span>
								<span className='text-base font-medium text-gray-500'>
									/month
								</span>
							</p>
							<ul className='mt-8 space-y-4'>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Up to 200 participants
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Advanced screen sharing
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										24/7 phone &amp; email support
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>Custom branding</span>
								</li>
							</ul>
							<a
								href='#'
								className='mt-8 block w-full bg-primary text-center py-3 rounded-md text-white font-semibold hover:bg-primary-700 transition duration-300'
							>
								Get Started
							</a>
						</div>
					</div>

					<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
						<div className='p-8'>
							<h3 className='text-2xl font-semibold text-gray-900'>
								Enterprise
							</h3>
							<p className='mt-4 text-gray-600'>
								For large-scale operations and customized needs
							</p>
							<p className='mt-8'>
								<span className='text-4xl font-extrabold text-primary'>
									Custom
								</span>
							</p>
							<ul className='mt-8 space-y-4'>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Unlimited participants
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>Full API access</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Dedicated account manager
									</span>
								</li>
								<li className='flex items-center'>
									<svg
										className='h-6 w-6 text-green-500'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											d='M5 13l4 4L19 7'
										></path>
									</svg>
									<span className='ml-3 text-gray-700'>
										Custom integrations
									</span>
								</li>
							</ul>
							<a
								href='#'
								className='mt-8 block w-full bg-primary text-center py-3 rounded-md text-white font-semibold hover:bg-primary-700 transition duration-300'
							>
								Contact Sales
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pricing;
