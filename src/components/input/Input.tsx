import { Input } from '@headlessui/react';
import { FC } from 'react';

type InputProps = {
	type: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
	placeholder: string;
	name: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	disabled?: boolean;
};

const TextInput: FC<InputProps> = ({
	type,
	placeholder,
	name,
	value,
	onChange,
	required,
	disabled,
}) => {
	return (
		<>
			<Input
				className='block w-full px-4 py-3 text-sm text-gray-900 border border-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				disabled={disabled}
			/>
		</>
	);
};

export default TextInput;
