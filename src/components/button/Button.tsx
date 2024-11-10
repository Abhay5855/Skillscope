import { Button } from '@headlessui/react';
import { FC } from 'react';
import classNames from 'classnames';

type ButtonProps = {
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
	children: React.ReactNode;
	pill?: boolean;
	variant?: 'primary' | 'secondary' | 'icon';
};

export const ButtonWrapper: FC<ButtonProps> = ({
	children,
	type,
	onClick,
	pill = false,
	variant = 'primary',
	...props
}) => {
	const baseClasses =
		'inline-flex items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-btnHover focus:ring transition whitespace-nowrap';

	const variantClasses = {
		primary: 'bg-primary',
		secondary:
			'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300',
		icon: 'p-2 text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
	};

	const pillClass = pill ? 'rounded-full' : 'rounded-md';
	return (
		<Button
			className={classNames(baseClasses, variantClasses[variant], pillClass)}
			{...props}
			type={type}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};
