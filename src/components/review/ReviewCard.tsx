import Avatar from 'src/components/ui/Avatar';
import Separator from 'src/components/ui/Seperator';
import profileImg from 'public/assets/avatar-2009.jpg';

const UpperPart = () => {
	return (
		<p className='text-md min-h-32 flex-1 pb-4 font-thin'>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quisquam. Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Iure, quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Iure, quisquam.
		</p>
	);
};

const LowerPart = () => {
	return (
		<section className='flex items-center gap-4 pt-4'>
			<Avatar src={profileImg} />
			<div>
				<h3 className='text-md font-semibold tracking-wide'>Nasim</h3>
				<div className='text-orange-500'>Stars</div>
			</div>
		</section>
	);
};

const ReviewCard = () => {
	return (
		<div className='w-80 flex flex-col p-4 border-2 rounded-md shadow-md'>
			<UpperPart />
			<Separator />
			<LowerPart />
		</div>
	);
};

export default ReviewCard;
