import { useState } from 'react';
import SalaoPrincipal from '../img/Salao-Principal.png';
import Loft from '../img/Loft-e-varanda-externa.png';
import Deck from '../img/Deck-Piscina.png';
import Gastronomia from '../img/Gastronomia_Villa H.png';
import Gastronomia2 from '../img/Gastronomia_Villa H-2.png';
import Aurora from '../img/beautiful-green-red-aurora.jpg';
import Bird from '../img/bird.png';
import Restaurant from '../img/restaurant-mesa-montada.png';
import Jantar from '../img/jantar-na-praia.png';
import VistaNatureza from '../img/vista-natureza.png';
import PartyPool from '../img/party-at-pool.png';
import Photo from './Photo/Photo';
import Section from '../../Section/Section';
import Modal from '../../Modal/Modal';
import './PhotoSection.css';
import SwiperGalleryMB from './SwiperGalleryMB/SwiperGalleryMB';

const galleryMB = [
  {
    url: SalaoPrincipal,
    alt: 'Salão Principal',
  },
  {
    url: Loft,
    alt: 'Loft',
  },
  {
    url: Deck,
    alt: 'Deck',
  },
  {
    url: Aurora,
    alt: 'Aurora Boreal',
  },
  {
    url: Bird,
    alt: 'Pássaro voando entre as árvores',
  },
  {
    url: Gastronomia,
    alt: 'Gastronomia',
  },
  {
    url: Loft,
    alt: 'loft',
  },
  {
    url: SalaoPrincipal,
    alt: 'Salão Principal',
  },
  {
    url: Restaurant,
    alt: 'Restaurante com mesa branca e buquê',
  },
  {
    url: Jantar,
    alt: 'Janta à beira da praia',
  },
];

const columns = [
  {
    id: 'salao-principal',
    photo: SalaoPrincipal,
    title: 'Salão principal e varanda',
    text: 'Ambiente totalmente climatizado, com cobertura e cortina de vidro, possibilitando que cerimônias e comemorações sejam realizadas com a vista deslumbrante que a Villa H proporciona.',
    gallery: [
      {
        url: SalaoPrincipal,
        alt: 'Salão Principal',
      },
      {
        url: Loft,
        alt: 'Loft',
      },
      {
        url: Deck,
        alt: 'Deck',
      },
      {
        url: Aurora,
        alt: 'Aurora Boreal',
      },
      {
        url: Bird,
        alt: 'Pássaro voando entre as árvores',
      },
    ],
  },
  {
    id: 'loft',
    photo: Loft,
    title: 'Loft e varanda externa',
    text: 'Ambiente parcialmente coberto, com uma varanda externa aberta, possibilitando a realização de cerimônias ao ar livre.',
    gallery: [
      {
        url: Gastronomia2,
        alt: 'Gastronomia',
      },
      {
        url: Gastronomia,
        alt: 'Gastronomia',
      },
      {
        url: VistaNatureza,
        alt: 'Vista da natureza',
      },
      {
        url: PartyPool,
        alt: 'Festa na piscina',
      },
      {
        url: Restaurant,
        alt: 'Restaurante com mesa branca e buquê',
      },
      {
        url: Jantar,
        alt: 'Janta à beira da praia',
      },
    ],
  },
  {
    id: 'deck',
    photo: Deck,
    title: 'Deck piscina',
    text: 'Área coberta e área ao redor da piscina, ambiente ao ar livre. Neste espaço é possível realizar cerimônias com vista direta para o Cristo redentor.',
    alt: '',
  },
  {
    id: 'gastronomia',
    photo: Gastronomia,
    title: 'Gastronomia da Villa H',
    text: 'Área coberta e área ao redor da piscina, ambiente ao ar livre. Neste espaço é possível realizar cerimônias com vista direta para o Cristo redentor.',
    alt: '',
  },
];

function PhotoSection() {
  const [modalIsOpen, setModalIsOpen] = useState('');

  const openModal = (id) => {
    setModalIsOpen(id);
    document.body.addEventListener('click', closeModal);
  };

  const closeModal = (event) => {
    event.stopPropagation();

    let evTarget = event.target;

    if (
      evTarget.classList.contains('open') ||
      evTarget.classList.contains('btn-close')
    ) {
      setModalIsOpen('');
    }
  };

  return (
    <div className="photos-section">
      <SwiperGalleryMB galleryMB={galleryMB} />
      {columns.map((c, index) => (
        <div key={`photo-section-${index}`}>
          <div
            className={`photo-section photo-${index % 2 ? 'right' : 'left'}`}
          >
            <Photo src={c.photo} alt={c.alt} />
            <Section
              className="section section-dark"
              title={<h2>{c.title}</h2>}
              text={<p>{c.text}</p>}
              btn={
                c.gallery ? (
                  <button
                    className="btn-dark-blue"
                    onClick={() => openModal(c.id)}
                  >
                    VER GALERIA DO AMBIENTE
                  </button>
                ) : null
              }
            />
            <Modal
              id={`modal-${c.id}`}
              className={`modal-photoSection ${
                modalIsOpen === c.id ? 'open' : ''
              }`}
              title={<h2>{c.title}</h2>}
              photo={<img src={c.photo} alt={c.alt} />}
              closeBtn={
                <button className="btn-close" onClick={closeModal}>
                  x
                </button>
              }
              gallery={c.gallery}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotoSection;
