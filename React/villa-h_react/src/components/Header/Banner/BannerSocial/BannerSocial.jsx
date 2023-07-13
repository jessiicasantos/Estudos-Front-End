import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Instagram } from '../img/instagram.svg';

const socials = [
  {
    href: 'https://www.facebook.com/villaheventos/',
    social: <Facebook />,
  },
  {
    href: 'https://www.instagram.com/villa__h/?hl=pt-br',
    social: <Instagram />,
  },
];

const BannerSocial = ({ className, line }) => (
  <div className={`socials${className ? ` ${className}` : ''}`}>
    {socials.map((s, index) => (
      <a href={s.href} key={`${s}`[index]} target="_blank" rel="noreferrer">
        {s.social}
      </a>
    ))}
    <>{line}</>
  </div>
);

export default BannerSocial;
