import NavMenu from '../NavMenu/NavMenu';
import Link from '../../../Link/Link';
import BannerSocial from '../../Banner/BannerSocial/BannerSocial';

const NavMbWrapper = ({ isOpen }) => (
  <div className={`mb-wrapper ${isOpen}`}>
    <NavMenu />
    <Link
      href={'#orcamento'}
      txt={'SOLICITAR UM ORÇAMENTO'}
      className="btn-brd-gold"
    />
    <BannerSocial className="socials-mb" />
  </div>
);

export default NavMbWrapper;
