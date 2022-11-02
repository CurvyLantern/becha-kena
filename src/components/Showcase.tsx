import { FaRegStar, FaHammer, FaMoneyBill } from 'react-icons/fa';

import Image from 'next/legacy/image';
import ResponsiveImage from 'src/components/essential/ResponsiveImage';

import laptopImg from 'public/laptop.png';

const HDivider = () => <div className='w-[2px] bg-gray-300'>&nbsp;</div>;

const ProductImage = () => (
	<div className='relative flex-1'>
		<FaRegStar className='absolute top-4 right-4' />
		{/* <ResponsiveImage src='/laptop.png' /> */}
		<Image src={laptopImg} alt='Laptop' layout='responsive' objectFit='cover' />
	</div>
);
const DescriptionSection = () => (
	<div className='flex-2 '>
		{/* Title Area */}
		<div className='p-3'>
			{/* name */}
			<h2 className='my-4 text-2xl font-semibold'>Toyota balalaalaa</h2>
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
			<p className='flex-1 px-4'>
				Last Bid : <span className='text-green-500'>7 mins ago</span>
			</p>
		</div>
	</div>
);
const SubmitSection = () => {
	return (
		<div className='flex-1 py-5 text-center rounded-lg bg-slate-100'>
			<p className='font-semibold text-accent'>Bidding ends in</p>
			<p className='tracking-wide text-red-400'>0d : 19h : 8m : 52s</p>
			<div className='px-6 py-5'>
				<p className='font-thin'>Bid Increment</p>
				<h3 className='mt-3 text-3xl font-bold'>$3</h3>
			</div>
			<button className='py-4 font-semibold text-white bg-purple-600 rounded-full shadow-lg px-7 bg-gradient-to-b from-blue-700 to-blue-400 hover:from-blue-400 hover:to-blue-700 shadow-blue-800'>
				Submit a bid
			</button>
		</div>
	);
};

const Showcase = () => {
	return (
		<div className='flex flex-col gap-4 p-2 text-black rounded-lg shadow-lg md:flex-row'>
			<ProductImage />
			<DescriptionSection />
			<SubmitSection />
		</div>
	);
};

export default Showcase;
