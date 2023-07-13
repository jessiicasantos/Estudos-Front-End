import { Navigation, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../../styles.css';
import Suselle from '../img/Suselle.png';
import Leonardo from '../img/Leonardo.png';
import Bianca from '../img/Bianca.png';
import Felipe from '../img/Felipe.svg';
import Joao from '../img/joao.jpg';
import Joana from '../img/joana.jpg';
import { useState } from 'react';
import More from './More';

const InfoTestimonial = () => {
  const dataTestimonial = [
    {
      text: 'Suselle Falar da Villa H me desperta muitos sentimentos bons. Foi o local escolhido para o grande dia, meu casamento. Não poderia ter escolhido melhor lugar, além de lindo e com uma localização privilegiada, os seus responsáveis são pessoas maravilhosas. Agradeço à laudantium dolore soluta vitae quos eaque molestiae iusto illo.',
      photo: Suselle,
      name: 'Suselle Melo',
      type: 'Festa “Casamento tradicional”',
    },
    {
      text: 'Leonardo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit ipsa explicabo veniam porro optio impedit fuga ducimus, perferendis nulla tempore laudantium dolore soluta vitae quos eaque molestiae iusto illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam rerum ducimus odit corrupti ipsum deleniti? Sunt nihil quibusdam, reiciendis eius, ex eum laudantium recusandae corrupti ut eaque, hic voluptatem. um dolore soluta vitae quos eaque molestiae iusto illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga numquam rerum ducimus odit corrupti ipsum deleniti? Sunt nihil quibusdam, reiciendis eius, ex eum laudantium recusandae corrupti ut eaque, hic voluptatem. ',
      photo: Leonardo,
      name: 'Leonardo Cataldo',
      type: 'Festa “Evento Corporativo”',
    },
    {
      text: 'Bianca Perferendis asperiores molestias numquam consequuntur architecto vel animi quia fugiat nobis quidem, voluptatem eius sequi dicta soluta magnam exercitationem sit dolore illum.',
      photo: Bianca,
      name: 'Bianca Freire',
      type: 'Festa “Festa de 15 anos”',
    },
    {
      text: 'Felipe Sequi voluptatum modi temporibus deleniti, veritatis rerum consequuntur voluptatem. Debitis, eos recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime corrupti ducimus veniam accusamus odit debitis et neque?',
      photo: Felipe,
      name: 'Felipe Bourbon',
      type: 'Festa “Small Wedding”',
    },
    {
      text: 'João Sequi voluptatum modi temporibus deleniti, veritatis rerum consequuntur voluptatem. Debitis, eos recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime corrupti ducimus veniam accusamus odit debitis et neque?',
      photo: Joao,
      name: 'João Bourbon',
      type: 'Festa “Small Wedding”',
    },
    {
      text: 'Joana Sequi voluptatum modi temporibus deleniti, veritatis rerum consequuntur voluptatem. Debitis, eos recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maxime corrupti ducimus veniam accusamus odit debitis et neque?',
      photo: Joana,
      name: 'Joana Bourbon',
      type: 'Festa “Small Wedding”',
    },
  ];

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <>
      <Swiper
        modules={[Controller]}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        loopedSlides={dataTestimonial.length / 3}
        grabCursor={true}
        className="swiper-txt-testimonial"
      >
        {dataTestimonial.map((data, i) => (
          <SwiperSlide key={`data-${i}`}>
            <More data={data} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Controller, Navigation]}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        slidesPerView={3}
        slideToClickedSlide={true}
        loop={true}
        loopedSlides={dataTestimonial.length / 3}
        grabCursor={true}
        watchSlidesProgress
        navigation
        breakpoints={{
          1367: {
            slidesPerView: 3,
          },
          1025: {
            slidesPerView: 2,
          },
          319: {
            slidesPerView: 1,
          },
        }}
        className="swiper-testimonial"
      >
        {dataTestimonial.map((data, i) => (
          <SwiperSlide key={`data-${i}`}>
            <div className="info-testimonial">
              <img src={data.photo} alt={`Foto de ${data.name}`} />
              <div>
                <h5>{data.name}</h5>
                <h6>{data.type}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InfoTestimonial;
