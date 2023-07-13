import { ReactComponent as Fish } from '../../../assets/img/fish-icon.svg';
import Section from '../../Section/Section';
import MenuEvent from './MenuEvent/MenuEvent';
import './EventSection.css';

const EventSection = ({ data }) => (
  <div className="container event-section" id="eventos">
    <Section
      svg={<Fish />}
      title={
        <h2>
          Vários eventos. <strong>Um só lugar.</strong>
        </h2>
      }
      text={
        <p>
          Os espaços da Villa H foram planejados e decorados para acomodar todos
          os tipos de eventos. Desde pequenas comemorações com a família a
          celebrações grandiosas, com aquele toque de bom gosto e versatilidade
          que só a Villa H tem.
        </p>
      }
    />
    <MenuEvent subtitle={<h6>ESCOLHA UMA FESTA</h6>} data={data} />
  </div>
);

export default EventSection;
