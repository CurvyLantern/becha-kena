import Image from 'next/legacy/image';

import styles from './ResponsiveImage.module.css';

console.log(styles);

type Props = {
	src: string;
};

const ResponsiveImage = ({ src, ...props }: Props) => {
	return (
		<div className={styles['image-container']}>
			<Image src={src} alt='Image' layout='fill' className={styles.image} />
		</div>
	);
};

export default ResponsiveImage;
