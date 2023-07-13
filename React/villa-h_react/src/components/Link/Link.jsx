import '../Button/Button.css';

const Link = ({ href, className, txt }) => (
  <a href={href} className={className}>
    {txt}
  </a>
);

export default Link;
