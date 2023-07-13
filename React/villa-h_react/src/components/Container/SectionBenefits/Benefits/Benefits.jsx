import SvgBuild from '../../img/SvgBuild.png';
import SvgWave from '../../img/SvgWave.png';

const cards = [
  {
    svg: SvgBuild,
    title:
      'Estrutura acessível a todos os públicos, incluindo pessoas com deficiência.',
    alt: 'Ícone Estrutura com rampa',
  },
  {
    svg: SvgWave,
    title: 'Localização e vista privilegiadas.',
    alt: 'Ícone Ondas',
  },
];

const Benefits = () => (
  <ul>
    {cards.map((c, index) => (
      <li key={`${c}`[index]}>
        <img src={c.svg} alt={c.alt} srcSet="" />
        {c.title}
      </li>
    ))}
  </ul>
);

export default Benefits;
