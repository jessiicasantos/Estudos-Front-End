import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
import { Keyboard, Navigation } from 'swiper';
import '../../../Swiper.css';

const SwiperEvent = ({ gallery }) => {
  return (
    <>
      <hr />
      <h6>Veja fotos desse evento</h6>
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation
        modules={[Keyboard, Navigation]}
        spaceBetween={10}
        slidesPerView={2.4}
        grabCursor={true}
        className="swiper-event"
        breakpoints={{
          1025: {
            slidesPerView: 2.4,
          },
          500: {
            slidesPerView: 2.5,
          },
          319: {
            slidesPerView: 1.3,
          },
        }}
      >
        {gallery?.map((g, index) => {
          return (
            <SwiperSlide key={`g-${index}`}>
              <img src={g.url} alt={g.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperEvent;
