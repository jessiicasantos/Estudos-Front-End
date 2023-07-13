import Card from '../../../Card/Card';
import ChefBG from '../../img/chef-cooking.png';
import { ReactComponent as Chef } from '../../../../assets/img/cook-icon.svg';
import '../Gastronomy.css';

const CardBGastronomy = () => (
  <div className="container card-bg-gastronomy" id="gastronomia">
    <div className="bg-gastronomy">
      <img src={ChefBG} alt="" />
    </div>
    <Card
      className="card-gastronomy theme-dark-blue"
      svg={<Chef />}
      tag={<h5 className="tag"></h5>}
      title={<h3>Gastronomia</h3>}
      text={
        <p>
          Oportunidade de fazer a combinação perfeita entre o melhor da
          gastronomia com a melhor vista do Rio de Janeiro. Seja para uma
          refeição ou para o seu evento, a experiência promete ser inesquecível.
        </p>
      }
      // btn={
      //   <div className="btns">
      //     <button className="btn-gold">Ver Menu</button>
      //     <button className="btn-brd-gold">Carta de Vinho</button>
      //   </div>
      // }
    />
  </div>
);

export default CardBGastronomy;
