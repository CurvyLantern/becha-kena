import Link from 'next/link';

import type { NextPage } from 'next';

export type LogoProp = {
	brandName: string;
};

const logo: NextPage<LogoProp> = ({ brandName }) => {
	return (
		<Link href='/' aria-label='Company' title='Company' className='inline-flex items-center'>
			<svg
				className='w-8 text-teal-accent-400'
				viewBox='0 0 24 24'
				strokeLinejoin='round'
				strokeWidth='2'
				strokeLinecap='round'
				strokeMiterlimit='10'
				stroke='currentColor'
				fill='none'>
				<rect x='3' y='1' width='7' height='12' />
				<rect x='3' y='17' width='7' height='6' />
				<rect x='14' y='1' width='7' height='6' />
				<rect x='14' y='11' width='7' height='12' />
			</svg>
			<span className='ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase'>{brandName}</span>
		</Link>
	);
};

export default logo;
