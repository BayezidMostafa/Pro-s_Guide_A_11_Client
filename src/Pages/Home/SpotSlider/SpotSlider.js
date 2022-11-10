import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SpotSlider = () => {
    return (
        <div className='md:container mx-auto mt-10 w-[95%]'>
            <p className='font-semibold text-2xl md:text-4xl text-center mb-10'>Some Places That Will Amaze You</p>
            <Swiper
                className='rounded-lg'
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/F5SkbFk/1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/ngYWGk1/2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/BfGPqqv/3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/gTjX3dp/4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/2qqrgzp/5.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/YR7CRd7/6.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/rb3yWSx/7.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg' src="https://i.ibb.co/QHrTNgF/8.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SpotSlider;