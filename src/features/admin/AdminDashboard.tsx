import { ButtonWrapper } from '@/components/button/Button';
import Navbar from '@/components/navbar/Navbar';
import { Calendar1Icon, PlusIcon } from 'lucide-react';
import React from 'react';
import AdminSessionList from './AdminSessionList';

const AdminDashboard = () => {
	return (
		<>
			<Navbar />
			<div className='container mx-auto py-8'>
				<div className='mt-12'>
					<div className='flex justify-between items-center mb-8 p-6'>
						<div className='flex flex-col gap-2'>
							<h1 className='text-2xl  font-bold text-primary'>
								Welcome back, Creator!
							</h1>
							<p className='text-gray-600 '>
								Manage your assessment sessions and create new ones.
							</p>
						</div>

						<div>
							<ButtonWrapper type='button' variant='primary'>
								<span className='inline-flex items-center'>
									<PlusIcon className='w-2 h-2' /> New Assesment
								</span>
							</ButtonWrapper>
						</div>
					</div>

					<AdminSessionList />
				</div>
			</div>
		</>
	);
};

export default AdminDashboard;
