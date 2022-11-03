import type { NextPage } from "next";
import Head from "next/head";
import FeatureItem from "src/components/FeatureItem";
import HeroSection from "src/components/HeroSection";
import Highlights from "src/components/Highlights";
import NavBar from "src/components/NavBar";
import ReviewCard from 'src/components/review/ReviewCard';
import ReviewSection from 'src/components/review/ReviewSection';
import Showcase from 'src/components/Showcase';
import Avatar from 'src/components/ui/Avatar';
import Button from 'src/components/ui/Button';


const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-2/3 mx-auto mb-10">{children}</div>;
};

const Home: NextPage = () => (
	<>
		<Head>
			<title>Create Next App</title>
			<meta name='description' content='Generated by create next app' />
			<link rel='icon' href='/favicon.ico' />
		</Head>

		<NavBar></NavBar>
		<HeroSection></HeroSection>
		<Highlights></Highlights>
		<FeatureItem />
		<Container>
			<Showcase />
		</Container>

		<Container>
			<div className='bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center gap-5 p-8 rounded-lg'>
				<div className='text-white'>
					<h4 className='text-2xl'>Register For Free & Start Bidding Now!</h4>
					<small>From cars to diamonds to iPhones, we have it all.</small>
				</div>
				<div>
					<Button className='btn hover:bg-purple-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300 px-5 py-2 text-purple-600 bg-white rounded-full'>
						REGISTER
					</Button>
				</div>
			</div>
		</Container>
		<Container>
			<div className=' p-6 bg-white rounded-lg'>
				<h4 className='text-xl font-semibold text-blue-600'>Subscribe to Sbidu</h4>
				<h1 className='m-2 text-2xl font-bold'>To Get Exclusive Benefits</h1>
				<div className='flex justify-between gap-2 pl-2 mt-4 overflow-hidden border-2 rounded-full'>
					<input type='email' name='email' placeholder='Enter Your Email ' required className=' p-2 m-1' />
					<Button className=' bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:text-white focus:outline-none focus:ring focus:ring-violet-300 px-6 py-2 text-lg text-white rounded-full'>
						SUBSCRIBE
					</Button>
				</div>
			</div>
		</Container>
		<ReviewSection />
	</>
);

export default Home;
