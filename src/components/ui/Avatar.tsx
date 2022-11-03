import Image, { StaticImageData } from 'next/legacy/image';

const AvatarContainer = ({ children }: { children: React.ReactNode }) => {
	return <span className='relative flex w-16 h-16 overflow-hidden rounded-full'>{children}</span>;
};

export type AvatarProps = {
	src: string | StaticImageData;
};
const Avatar = ({ src }: AvatarProps) => {
	return (
		<AvatarContainer>
			<Image src={src} layout='fill' objectFit='cover' placeholder='blur' />
		</AvatarContainer>
	);
};

export default Avatar;
