import SwiperTestimonial from './SwiperTestimonial/SwiperTestimonial';
import './Footer.css';
import Section from '../../Section/Section';
import { ReactComponent as Fish } from '../../../assets/img/fish-icon.svg';
import BoxContact from './BoxContact/BoxContact';
import { ReactComponent as DoubleCircle } from './img/double-circle.svg';
import InputMask from 'react-input-mask';

const dataSelect = [
  {
    txt: '',
  },
  {
    txt: 'Pré Wedding',
  },
  {
    txt: 'Elopment Wedding',
  },
  {
    txt: 'Mini Wedding',
  },
];

const Footer = () => (
  <footer id="depoimentos">
    <div className="container">
      <SwiperTestimonial />
      <hr />
      <div className="orcamento" id="orcamento">
        <div className="orcamento-info">
          <Section
            className="theme-dark-blue"
            svg={<Fish className="fish" />}
            title={<h3>Faça um orçamento</h3>}
            text={
              <p>
                Estamos com o atendimento <strong>online e presencial</strong>,
                dedicado a fazer desse primeiro contato o primeiro passo para o
                seu sonho.
              </p>
            }
          />
          <BoxContact />
          <a
            href="https://www.google.com/maps/dir//Villa+H+-+Estrada+Leopoldo+Fr%C3%B3es,+170+A+-+S%C3%A3o+Francisco,+Niter%C3%B3i+-+RJ,+24360-005/@-22.9152238,-43.1125778,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x99815a29e69905:0xbaa84dcba9860517!2m2!1d-43.1103891!2d-22.9152238"
            className="theme-gold"
            target="_blank"
            rel="noreferrer"
          >
            Saiba como chegar
            <span className="arrow-gold">{'>'}</span>
          </a>
          <DoubleCircle className="double-circle" />
        </div>

        <form action="" method="" className="form-contact">
          <div className="columns">
            <label htmlFor="name">
              Nome Completo*
              <InputMask type="text" id="name" required />
            </label>
            <label htmlFor="Email">
              Email*
              <InputMask type="text" id="email" required />
            </label>
          </div>
          <div className="columns">
            <label htmlFor="name">
              Celular*
              <InputMask
                type="text"
                id="cel"
                required
                mask="(99) 99999-9999"
                maskPlaceholder="(__) _____-____"
                alwaysShowMask
              />
            </label>
            <label htmlFor="tel">
              Telefone
              <InputMask
                type="text"
                id="tel"
                mask="(99) 99999-9999"
                maskPlaceholder={'(__) _____-____'}
                alwaysShowMask
              />
            </label>
          </div>
          <div className="columns multi-columns">
            <div>
              <label htmlFor="type-party">
                Tipo da festa
                <select name="sel-party" id="sel-party">
                  {dataSelect.map((d, i) => (
                    <option key={`${d}`[i]}>{d.txt}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="mb-columns">
              <div>
                <label htmlFor="Email">
                  Data do evento
                  <InputMask
                    type="text"
                    id="email"
                    mask="99/99/9999"
                    alwaysShowMask
                  />
                </label>
              </div>
              <div>
                <label htmlFor="guests">
                  Convidados
                  <InputMask type="text" id="guests" mask="99999" />
                </label>
              </div>
            </div>
          </div>
          <label htmlFor="msg">
            Deseja enviar um mensagem? Escreve para gente :-)
            <textarea name="msg-txt" id="msg-txt" cols="30" rows="3"></textarea>
          </label>
          <div className="check">
            <InputMask type="checkbox" id="check-email" name="check-email" />
            <label htmlFor="check-email">
              Desejo receber o material de fornecedores parceiros por email.
            </label>
          </div>
          <div className="check">
            <InputMask type="checkbox" id="furniture" name="furniture" />
            <label htmlFor="furniture">
              Tenho interesse em contar com a mobília da Villa H para o meu
              evento.
            </label>
          </div>
          <button className="btn-dark-blue">Solicitar um orçamento</button>
          <p>
            Ao solicitar um orçamento, você está concordando com o envio dos
            seus dados e a utilização deles conforme a nossa
            <a href="#">Politica de Privacidade.</a>
          </p>
        </form>
        <Section
          className="theme-dark-blue orca-mb"
          svg={<Fish className="fish" />}
          title={<h3>Faça um orçamento</h3>}
        />
      </div>
      <hr />
      <div className="copyright">
        <h6>VILLA H® 2020 - TODOS OS DIREITOS RESERVADOS</h6>
      </div>
    </div>
  </footer>
);

export default Footer;
