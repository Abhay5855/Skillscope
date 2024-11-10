import React from 'react';
import {
	CalendarIcon,
	ClockIcon,
	MoveRightIcon,
	UsersIcon,
} from 'lucide-react';
import { sessions } from '@/data/data';
import Link from 'next/link';

const AdminSessionList = () => {
	return (
		<>
			<div className='bg-white rounded-xl shadow-md'>
				<div className='p-6'>
					<h1 className='text-xl font-semibold text-primary'>
						Upcoming Sessions
					</h1>
				</div>
				<div className='divide-y divide-gray-200'>
					{sessions?.map((item) => (
						<div
							key={item?.id}
							className='p-6 hover:bg-gray-50 transition-colors shadow-md'
						>
							<div className='flex items-center justify-between'>
								<div className='flex flex-col'>
									<div className='flex items-center space-x-4'>
										<div>
											{' '}
											<h1 className='text-lg font-semibold'>{item.title}</h1>
										</div>
										<div>
											<span className='bg-primary text-text px-4 py-2 text-sm rounded-full font-normal'>
												Scheduled
											</span>
										</div>
									</div>

									<div className='flex items-center space-x-6 text-gray-600 mt-4'>
										<div className='flex items-center space-x-2'>
											<CalendarIcon className='' />
											<span className='whitespace-nowrap'>{item?.date}</span>
										</div>

										<div className='flex items-center space-x-2'>
											<UsersIcon />
											<span className='whitespace-nowrap'>8 participants</span>
										</div>

										<div className='flex items-center space-x-2'>
											<ClockIcon />
											<span className='whitespace-nowrap'>
												{item?.duration}
											</span>
										</div>
									</div>
								</div>
								<div className=''>
									<Link
										href=''
										className='flex items-center space-x-2 whitespace-nowrap text-primary text-md font-bold'
									>
										<span>Join Room</span>
										<MoveRightIcon className='ml-2' />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default AdminSessionList;
