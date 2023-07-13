import Benefits from './Benefits/Benefits';
import './SectionBenefits.css';

const SectionBenefits = ({ className, title }) => (
  <div className={className}>
    <>{title}</>
    <Benefits />
  </div>
);

export default SectionBenefits;
