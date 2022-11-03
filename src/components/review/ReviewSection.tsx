import ReviewCard from 'src/components/review/ReviewCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ReviewSection = () => {
	return (
		<div>
			{/* <ReviewCard></ReviewCard> */}
			<Swiper
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
				<SwiperSlide>
					<ReviewCard />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ReviewSection;
