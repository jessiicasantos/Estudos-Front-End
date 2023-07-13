import { ReactComponent as ArrowDown } from '../img/arrow-down.svg';
import Section from '../../../Section/Section';
import CheckedList from '../../../CheckedList/CheckedList';

const BannerHeadline = () => (
  <div className="banner-head">
    <Section
      className="section-banner"
      title={
        <h1>
          Muitos momentos <strong>em um só lugar.</strong>
        </h1>
      }
      text={
        <p>
          Uma verdadeira vila capaz de reunir,
          <br />
          em um só espaço, diferentes opções para você realizar o seu sonho.
        </p>
      }
    />
    <CheckedList />
    <a href="#a-villa-h" className="more">
      <ArrowDown />
      <p>
        Descubra mais sobre o espaço <br /> e se encante das mais diversas
        formas.
      </p>
    </a>
  </div>
);

export default BannerHeadline;
