import {
	Award,
	BookOpen,
	BriefcaseBusiness,
	ClipboardCheckIcon,
	Code,
	Users,
} from 'lucide-react';
import React from 'react';

const UseCases = () => {
	return (
		<div>
			<section className='bg-gray-50 py-12 sm:py-16 lg:py-20'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mb-2'>
							Use Cases
						</h1>
						<span className='mt-4 text-xl text-gray-600'>
							Our platform serves a wide range of testing needs across various
							sectors
						</span>
					</div>

					<div className='mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-primary mb-4'>
									<BriefcaseBusiness className='' />
								</div>
								<h3 className='text-lg font-medium text-gray-900'>
									Corporate Hiring
								</h3>
								<p className='mt-2 text-base text-gray-500'>
									Conduct technical interviews and coding tests for potential
									employees, observing their problem-solving approaches in
									real-time.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-primary mb-4'>
									<BookOpen />
								</div>
								<h3 className='text-lg font-medium text-gray-900'>
									Educational Institutions
								</h3>
								<p className='mt-2 text-base text-gray-500'>
									Administer exams and quizzes to students, providing a secure
									environment with live monitoring capabilities.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-primary mb-4'>
									<ClipboardCheckIcon />
								</div>
								<h3 className='text-lg font-medium text-gray-900'>
									Skill Assessment
								</h3>
								<p className='mt-2 text-base text-gray-500'>
									Evaluate the competencies of professionals in various fields,
									from programming to design, with real-time task completion.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-primary mb-4'>
									<Users />
								</div>
								<h3 className='text-lg font-medium text-gray-900'>
									Team Training
								</h3>
								<p className='mt-2 text-base text-gray-500'>
									Conduct interactive training sessions and assessments for
									employees, ensuring engagement and immediate feedback.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-primary mb-4'>
									<Code />
								</div>
								<h3 className='text-lg font-medium text-gray-900'>
									Coding Challenges
								</h3>
								<p className='mt-2 text-base text-gray-500'>
									Host programming contests and hackathons, allowing
									participants to showcase their skills in a competitive
									environment.
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg shadow-md overflow-hidden'>
							<div className='p-6'>
								<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-primary mb-4'>
									<Award />
								</div>
								<h3 className='text-lg font-medium text-gray-900'>
									Certification Programs
								</h3>
								<p className='mt-2 text-base text-gray-500'>
									Offer professional certifications with secure, proctored
									online exams that maintain integrity and credibility.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default UseCases;
