'use client';
import React, { FC, useState } from 'react';
import {
	CAPITAL_LETTER_PATTERN,
	NUMBER_PATTERN,
	SYMBOL_PATTERN,
} from '../../helper';
import { ButtonWrapper } from '@/components/button/Button';
import Link from 'next/link';
import TextInput from '@/components/input/Input';
import FormLabel from '@/components/label/Label';
import { Field } from '@headlessui/react';

interface CheckBoxes {
	trigger: boolean;
	checkboxes: {
		checkbox1: boolean;
		checkbox2: boolean;
		checkbox3: boolean;
	};
}

type SignUp = {
	email: string;
	password: string;
};

const SignupContainer: FC = () => {
	const [formData, setFormData] = useState<SignUp>({ email: '', password: '' });
	const [emailError, setEmailError] = useState<string>('');
	const [checkBoxTrigger, setCheckBoxTrigger] = useState<CheckBoxes>({
		trigger: false,
		checkboxes: { checkbox1: false, checkbox2: false, checkbox3: false },
	});
	const val =
		checkBoxTrigger.checkboxes.checkbox1 ||
		checkBoxTrigger.checkboxes.checkbox2 ||
		checkBoxTrigger.checkboxes.checkbox3;

	const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		if (name === 'email') {
			setFormData((prevData) => ({ ...prevData, email: value }));
			setEmailError(value.includes('@') ? '' : 'Not a valid Email!');
		}
		if (name === 'password') {
			const checkboxes = {
				checkbox1: value.length >= 8,
				checkbox2: CAPITAL_LETTER_PATTERN.test(value),
				checkbox3: NUMBER_PATTERN.test(value) || SYMBOL_PATTERN.test(value),
			};
			setCheckBoxTrigger({ trigger: value.length > 0, checkboxes });
			setFormData((prevData) => ({ ...prevData, password: value }));
		}
	};

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (e.target.value.length > 0) return;
		setCheckBoxTrigger((prevData) => ({
			...prevData,
			trigger: val,
		}));
	};

	const disableButton: boolean =
		!val ||
		emailError !== '' ||
		formData.email === '' ||
		formData.password === '';

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const checkboxes = {
			checkbox1: false,
			checkbox2: false,
			checkbox3: false,
		};
		setCheckBoxTrigger((prevData) => ({
			...prevData,
			trigger: false,
			checkboxes,
		}));
		setFormData((prevData) => ({
			...prevData,
			email: '',
			password: '',
		}));
	};

	return (
		<section className='flex flex-col h-full w-full justify-center items-center tracking-tighter'>
			<form
				className='flex flex-col justify-center items-center w-auto lg:w-[60%] px-10 tracking-tighter gap-y-9 '
				onSubmit={handleSubmit}
				aria-labelledby='signup-form-title'
			>
				<h1
					id='signup-form-title'
					className='w-full text-3xl sm:text-4xl font-bold text-gray-800'
				>
					Let's get your account set up
				</h1>
				<div className='w-full flex flex-col tracking-normal'>
					<Field className='mb-3 flex flex-col gap-1'>
						<FormLabel htmlFor='email'>email</FormLabel>
						<TextInput
							type='email'
							name='email'
							value={formData.email}
							placeholder='Enter your email'
							onChange={handleOnchange}
							aria-describedby='email-error'
							required
						/>
						<p id='email-error' className='text-xs text-red-700 font-semibold'>
							{emailError}
						</p>
					</Field>
					<Field className='mb-3 flex flex-col gap-2'>
						<label
							htmlFor='password'
							className='block text-sm text-gray-900 dark:text-white'
						>
							Create a Password
						</label>
						<TextInput
							type='password'
							name='password'
							placeholder='•••••••••'
							value={formData.password}
							onChange={handleOnchange}
							required
						/>
					</Field>
					{checkBoxTrigger?.trigger && (
						<div
							className='flex flex-col gap-1 mb-3 tracking-tighter'
							aria-hidden={!checkBoxTrigger.trigger}
						>
							<div className='flex items-center'>
								<input
									checked={checkBoxTrigger.checkboxes.checkbox1}
									disabled
									id='default-checkbox'
									type='checkbox'
									className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-full dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									htmlFor='default-checkbox'
									className='ms-2 text-sm text-gray-600 dark:text-gray-300'
								>
									At least 8 characters long
								</label>
							</div>
							<div className='flex items-center'>
								<input
									checked={checkBoxTrigger?.checkboxes.checkbox2}
									disabled
									id='default-checkbox1'
									type='checkbox'
									className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-full dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									htmlFor='default-checkbox1'
									className='ms-2 text-sm text-gray-600 dark:text-gray-300'
								>
									Contains 1 uppercase character
								</label>
							</div>
							<div className='flex items-center'>
								<input
									checked={checkBoxTrigger?.checkboxes.checkbox3}
									disabled
									id='default-checkbox2'
									type='checkbox'
									className='w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-full dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
								/>
								<label
									htmlFor='default-checkbox2'
									className='ms-2 text-sm text-gray-600 dark:text-gray-300'
								>
									Contains 1 number or symbol
								</label>
							</div>
						</div>
					)}
					<ButtonWrapper
						type='submit'
						variant='primary'
						disabled={disableButton}
					>
						Sign Up
					</ButtonWrapper>
				</div>
				<div className='flex flex-col gap-2 justify-center items-center tracking-normal'>
					<p className='text-xs text-gray-500'>
						By proceeding, you agree to{' '}
						<Link href='#' className='text-blue-700 underline'>
							Our Terms of Service
						</Link>
					</p>
					<hr className='border border-t-0 border-gray-500 w-full' />
					<p className='text-sm'>
						Already have an account?{' '}
						<Link href='#' className='underline'>
							Log in instead
						</Link>
					</p>
				</div>
			</form>
		</section>
	);
};

export default SignupContainer;
