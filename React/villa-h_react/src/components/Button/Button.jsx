import './Button.css';

const Button = (className, txt, onClick) => (
  <button className={className} onClick={onClick}>
    {txt}
  </button>
);

export default Button;
