import { Keyboard, Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Modal.css';

const Modal = ({ id, className, title, closeBtn, gallery }) => (
  <div className={`modal ${className}`} id={id}>
    <>{closeBtn}</>
    <div className="modal-wrapper">
      <>{title}</>
      <Swiper
        modules={[Keyboard, Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={3}
        keyboard={{
          enabled: true,
        }}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1365: {
            slidesPerView: 3,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          319: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {gallery?.map((mg, ind) => (
          <SwiperSlide key={`${mg.id}${ind}`}>
            <img src={mg.url} alt={mg.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Modal;
