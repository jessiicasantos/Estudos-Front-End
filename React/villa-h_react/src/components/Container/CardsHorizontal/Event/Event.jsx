import { useState } from 'react';
import Card from '../../../Card/Card';
import SwiperEvent from '../../EventSection/SwiperEvent/SwiperEvent';

const Event = ({ links, cardIsActive }) => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="event">
      {links.map((c, i) => (
        <Card
          className={`card-event theme-gray ${
            cardIsActive === c.id ? 'active' : ''
          }`}
          key={`c-${i}`}
          svg={c.svg}
          tag={c.tag}
          title={<h3>{c.title}</h3>}
          text={
            <p className={readMore ? 'read-more' : 'read-less'}>{c.text}</p>
          }
          more={
            <button className={`more`} onClick={handleReadMore}>
              {readMore ? 'Ler Menos' : 'Ler Mais'}
            </button>
          }
          btn={
            <a href="#orcamento" className="btn-dark-blue">
              SOLICITAR UM ORÇAMENTO
            </a>
          }
          slides={c.gallery ? <SwiperEvent gallery={c.gallery} /> : null}
        />
      ))}
    </div>
  );
};

export default Event;
