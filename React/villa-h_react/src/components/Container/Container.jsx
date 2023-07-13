import Section from '../Section/Section';
import SectionBenefits from './SectionBenefits/SectionBenefits';
import './Container.css';
import { ReactComponent as Fish } from '../../assets/img/fish-icon.svg';
import PhotoSection from './PhotoSection/PhotoSection';
import CardsHorizontal from './CardsHorizontal/CardsHorizontal';
import EventSection from './EventSection/EventSection';
import SectionBGPhoto from './SectionBGPhoto/SectionBGPhoto';
import CardBGGastronomy from './Gastronomy/CardBGGastronomy/CardBGGastronomy';
import Footer from './Footer/Footer';

const Container = () => (
  <>
    <div className="container">
      <div className="benefits" id="a-villa-h">
        <Section
          className="section section-dark"
          svg={<Fish />}
          title={<h2>Em cada ambiente, um encanto no olhar.</h2>}
          text={
            <p>
              Localizada em São Francisco, no coração de Niterói, a Villa H é um
              projeto único, obra do arquiteto mundialmente reconhecido, Zanine
              Caldas. Ela nasceu para ser um complexo multiuso para todos
              aqueles que sonham viver momentos inesquecíveis e diferenciados.
            </p>
          }
        />
        <SectionBenefits
          className="section-benefits"
          title={<h6>CONFIRA ALGUNS BENEFÍCIOS</h6>}
        />
      </div>
      <PhotoSection />
    </div>
    <div className="cards-benefits container-md theme-dark-blue">
      <CardsHorizontal />
    </div>
    <EventSection />
    <SectionBGPhoto />
    <CardBGGastronomy />
    <Footer />
  </>
);

export default Container;
