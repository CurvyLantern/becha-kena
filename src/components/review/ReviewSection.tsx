import ReviewCard from 'src/components/review/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { useEffect, useLayoutEffect, useState } from 'react';

const array = new Array(10).fill(0, 1, 10);

function Slider() {
	return (
		<Swiper
			breakpoints={{
				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				// when window width is >= 640px
				640: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			}}
			grabCursor
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={swiper => console.log(swiper)}>
			{array.map(a => {
				return (
					<SwiperSlide key={a}>
						<ReviewCard />
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

function ReviewSection() {
	const [component, setComponent] = useState(false);
	useEffect(() => {
		setComponent(true);
	}, []);

	if (!component) return null;

	return <Slider />;
}

export default ReviewSection;
