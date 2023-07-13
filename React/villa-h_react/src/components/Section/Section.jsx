import './Section.css';

const Section = ({ className, svg, title, text, btn }) => (
  <section className={className}>
    <>{svg}</>
    <>{title}</>
    <>{text}</>
    <>{btn}</>
  </section>
);

export default Section;
