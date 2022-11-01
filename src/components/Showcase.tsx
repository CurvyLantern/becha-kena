import { FaRegStar, FaHammer, FaMoneyBill } from 'react-icons/fa';

import Image from 'next/legacy/image';

const HDivider = () => <div className='w-[2px] bg-gray-300'>&nbsp;</div>;

const ProductImage = () => (
	<div className='relative flex-1'>
		<FaRegStar className='absolute top-4 right-4' />
		<Image src='/laptop.png' alt='Laptop' layout='fill' />
	</div>
);
const DescriptionSection = () => (
	<div className='flex-2 '>
		{/* Title Area */}
		<div className='p-3'>
			{/* name */}
			<h2 className='text-2xl font-semibold my-4'>Toyota balalaalaa</h2>
			<div className='flex'>
				<p className='flex-1'>
					<strong className='font-semibold'>Listing ID</strong> : 1554200
				</p>
				<HDivider />
				<p className='flex-1 px-4'>
					<strong className='font-semibold'>Item #</strong> : 09999-222222
				</p>
			</div>
		</div>

		{/* Bid Area */}
		<div className='flex p-3 border-dotted border-y-2'>
			<div className='flex flex-1 gap-5'>
				{/* icon */}
				<div className='text-green-500'>
					<FaHammer color='inherit' size={35} />
				</div>
				<div>
					<p className='text-green-500'>Current Bid</p>
					<p>$876.00</p>
				</div>
			</div>
			<HDivider />
			<div className='flex flex-1 gap-5 px-4'>
				{/* icon */}
				<div className='text-orange-600'>
					<FaMoneyBill color='inherit' size={35} />
				</div>
				<div>
					<p className='text-orange-600'>Buy Now</p>
					<p>$500.00</p>
				</div>
			</div>
		</div>

		{/* Bid Count Area */}
		<div className='flex p-3'>
			<p className='flex-1'>
				Total Bids : <span className='text-green-500'>97 Bids</span>
			</p>
			<HDivider></HDivider>
			<p className='px-4 flex-1'>
				Last Bid : <span className='text-green-500'>7 mins ago</span>
			</p>
		</div>
	</div>
);
const SubmitSection = () => {
	return (
		<div className='flex-1 text-center bg-slate-100 rounded-lg py-5'>
			<p className='text-accent font-semibold'>Bidding ends in</p>
			<p className='text-red-400 tracking-wide'>0d : 19h : 8m : 52s</p>
			<div className='px-6 py-5'>
				<p className='font-thin'>Bid Increment</p>
				<h3 className='text-3xl font-bold mt-3'>$3</h3>
			</div>
			<button
				className='rounded-full px-7 py-4 
			bg-purple-600 text-white bg-gradient-to-b 
			from-blue-700 to-blue-400 hover:from-blue-400 hover:to-blue-700 
			shadow-lg shadow-blue-800 font-semibold'>
				Submit a bid
			</button>
		</div>
	);
};

const Showcase = () => {
	return (
		<div className='flex text-black shadow-lg rounded-lg p-2 gap-4'>
			<ProductImage />
			<DescriptionSection />
			<SubmitSection />
		</div>
	);
};

export default Showcase;
