import Link from 'next/link';

import { cva } from 'class-variance-authority';

const useCvaStyles = cva('font-medium tracking-wide transition-colors duration-200', {
	variants: {
		intent: {
			normal: ' text-gray-100 hover:text-teal-accent-400',
			collapsed: ' text-gray-700 hover:text-deep-purple-accent-400',
		},
	},
	defaultVariants: {
		intent: 'normal',
	},
});

type Props = {
	content: string;
	path: string;
	collapsed?: boolean;
};

const NavLink = ({ content, path, collapsed, ...props }: Props) => {
	return (
		<li>
			<Link
				href={{
					pathname: path,
				}}
				aria-label='Our product'
				title='Our product'
				className={useCvaStyles({ intent: collapsed ? 'collapsed' : 'normal' })}>
				{content}
			</Link>
		</li>
	);
};

export default NavLink;
