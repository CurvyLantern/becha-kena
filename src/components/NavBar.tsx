import Link from 'next/link';
import { useState } from 'react';
import BrandLogo from 'src/components/brand/BrandLogo';
import CollapsedMenu from 'src/components/NavItems/CollapsedMenu';
import NavLink from 'src/components/NavItems/NavLink';

export const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className='bg-gray-900'>
			<div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='relative flex items-center justify-between'>
					<BrandLogo brandName='Becha Kena' />
					<ul className='flex items-center hidden space-x-8 lg:flex'>
						<NavLink path='/' content='Product' />
						<NavLink path='/' content='Features' />
						<NavLink path='/' content='Pricing' />
						<NavLink path='/' content='About us' />
					</ul>
					<ul className='flex items-center hidden space-x-8 lg:flex'>
						<li>
							<Link
								href='/'
								className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'
								aria-label='Sign up'
								title='Sign up'>
								Sign up
							</Link>
						</li>
					</ul>
					<div className='lg:hidden'>
						<button
							aria-label='Open Menu'
							title='Open Menu'
							className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline'
							onClick={() => setIsMenuOpen(true)}>
							<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
								/>
								<path
									fill='currentColor'
									d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
								/>
								<path
									fill='currentColor'
									d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
								/>
							</svg>
						</button>
						{isMenuOpen && <CollapsedMenu onClick={() => setIsMenuOpen(false)} />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
