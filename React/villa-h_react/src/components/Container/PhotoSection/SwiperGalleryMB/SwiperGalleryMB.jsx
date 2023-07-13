import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperGalleryMB = ({ galleryMB }) => (
  <Swiper
    className="swiper-gallery-mb"
    modules={[Navigation]}
    slidesPerView={1}
    navigation
  >
    {galleryMB?.map((g, ind) => (
      <SwiperSlide key={`g-${ind}`}>
        <img src={g.url} alt={g.alt} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperGalleryMB;
