import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
// import required modules
import { Keyboard, Navigation } from 'swiper';
import Slide1 from '../img/Decoracao-Vila-H-1.png';
import Slide2 from '../img/Festa-e-Paisagem-Villa-H.png';
import Slide3 from '../img/Paisagem-Villa-H.png';
import Slide4 from '../img/Sala-de-Visitas.png';

const slides = [
  {
    img: Slide1,
    altText: 'Mesa com paisagem paradisíaca e flores.',
  },
  {
    img: Slide2,
    altText: 'Confraternização com paisagem paradisíaca ao pôr do sol.',
  },
  {
    img: Slide3,
    altText: 'Paisagem do mar e barco ao pôr do sol.',
  },
  {
    img: Slide4,
    altText: 'Sala de visitas.',
  },
];

const SwiperGallery = () => {
  return (
    <>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation
        modules={[Keyboard, Navigation]}
        spaceBetween={15}
        slidesPerView={'auto'}
        grabCursor={true}
        className="swiper-gallery"
        breakpoints={{
          1366: {
            spaceBetween: 15,
            slidesPerView: 'auto',
          },
          1024: {
            slidesPerView: 'auto',
          },
          769: {
            spaceBetween: 0,
            slidesPerView: 1,
          },
          319: {
            spaceBetween: 10,
            slidesPerView: 1.2,
          },
        }}
      >
        {slides.map((s, index) => (
          <SwiperSlide key={`${s}`[index]}>
            <img src={s.img} alt={s.altText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperGallery;
