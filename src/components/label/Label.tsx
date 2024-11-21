import { Label } from '@headlessui/react';
import { FC } from 'react';

type LabelProps = {
	htmlFor: string;
	children: React.ReactNode;
};

const FormLabel: FC<LabelProps> = ({ htmlFor, children }) => {
	return (
		<>
			<Label
				className='block text-sm font-medium text-gray-700 dark:text-gray-300 capitalize'
				htmlFor={htmlFor}
			>
				{children}
			</Label>
		</>
	);
};

export default FormLabel;
