const Card = ({
  className,
  svg,
  tag,
  title,
  text,
  more,
  btn,
  line,
  subtitle,
  slides,
  onClick,
}) => (
  <div className={`card ${className ? className : ''}`} onClick={onClick}>
    <div className="card-wrapper">
      <>{svg}</>
      <>{tag}</>
      <>{title}</>
    </div>
    <>{text}</>
    <>{more}</>
    <>{btn}</>
    <>{line}</>
    <>{subtitle}</>
    <>{slides}</>
  </div>
);

export default Card;
