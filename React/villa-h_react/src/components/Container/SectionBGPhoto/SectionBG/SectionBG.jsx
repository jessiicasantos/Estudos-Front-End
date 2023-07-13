import { ReactComponent as FishLogo } from '../img/fish_logo_rotate.svg';
import { ReactComponent as TagsCircle } from '../img/tags_cicle.svg';
import Section from '../../../Section/Section';
import { ReactComponent as Fish } from '../../../../assets/img/fish-icon.svg';

const SectionBG = () => (
  <div className="section-bg">
    <div className="fish-rotate-wrapper">
      <div className="fish-rotate">
        <TagsCircle className="tag-circle" />
        <FishLogo className="fish-logo" />
      </div>
    </div>
    <Section
      className="section-dark"
      svg={<Fish />}
      title={
        <h2>
          A Villa H é ideal para <strong>todos os tipos</strong> de evento.
        </h2>
      }
      text={
        <p>
          São quatro ambientes, cada um com suas peculiaridades, prontos para te
          ajudar a realizar o seu sonho. Nós somos mais do que um espaço para
          eventos, somos a oportunidade de viver experiências inesquecíveis.
        </p>
      }
    />
  </div>
);

export default SectionBG;
