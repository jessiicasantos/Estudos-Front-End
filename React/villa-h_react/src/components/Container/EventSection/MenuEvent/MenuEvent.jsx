import { ReactComponent as PreWedding } from '../../../../assets/img/pre-wedding-icon.svg';
import { ReactComponent as Bride } from '../../../../assets/img/bride-icon.svg';
import { ReactComponent as Couple } from '../../../../assets/img/couple-icon.svg';
import { ReactComponent as StreamIcon } from '../../../../assets/img/stream-icon.svg';
import { ReactComponent as CakeHeart } from '../../../../assets/img/cake-heart-icon.svg';
import { ReactComponent as Camera } from '../../../../assets/img/camera-icon.svg';
import { ReactComponent as GlassDrink } from '../../../../assets/img/glass-drink-icon.svg';
import { ReactComponent as BreakFast } from '../../../../assets/img/breakfast-icon.svg';
import { ReactComponent as Handshake } from '../../../../assets/img/handshake-icon.svg';
import { ReactComponent as PartyBuild } from '../../../../assets/img/party-build-icon.svg';
import { ReactComponent as Foot } from '../../../../assets/img/foot-icon.svg';
import { ReactComponent as Ring } from '../../../../assets/img/ring-icon.svg';
import Event from '../Event/Event';

import { useState } from 'react';

import PreWedd1 from '../img/pre-wddg-1.png';
import PreWedd2 from '../img/pre-wddg-2.png';
import SlidePre6 from '../img/elop-7.png';

import SlidePre1 from '../img/elop-wedding-happy-couple.png';
import SlidePre2 from '../img/elop-wedding-photography.png';
import SlidePre3 from '../img/elop-wedding-up.png';
import SlidePre4 from '../img/elop-wedding.png';
import SlidePre5 from '../img/elop-5.png';

import MiniWddg1 from '../img/mini-wddg-1.png';
import MiniWddg2 from '../img/mini-wddg-2.png';
import MiniWddg3 from '../img/mini-wddg-3.png';
import MiniWddg4 from '../img/mini-wddg-4.png';

import SmallWddg1 from '../img/small-wddg-1.png';
import SmallWddg2 from '../img/small-wddg-2.png';
import SmallWddg3 from '../img/small-wddg-3.png';

import CasamentoTrad1 from '../img/casamento-trad-1.png';
import CasamentoTrad2 from '../img/casamento-trad-2.png';
import CasamentoTrad3 from '../img/casamento-trad-3.png';
import CasamentoTrad4 from '../img/casamento-trad-4.png';

import SessaoFoto1 from '../img/sessao-foto-1.png';
import SessaoFoto2 from '../img/sessao-foto-2.png';
import SessaoFoto3 from '../img/sessao-foto-3.png';
import SessaoFoto4 from '../img/sessao-foto-4.png';

import DayUse1 from '../img/day-use-1.png';
import DayUse2 from '../img/day-use-2.png';
import DayUse4 from '../img/day-use-4.png';

import Cafe1 from '../img/cafe-1.png';
import Cafe2 from '../img/cafe-2.png';
import Cafe3 from '../img/cafe-3.png';

import EventoCorp1 from '../img/evento-corp-1.png';
import EventoCorp2 from '../img/evento-corp-2.png';
import EventoCorp3 from '../img/evento-corp-3.png';

import Niver1 from '../img/niver-1.png';
import Niver2 from '../img/niver-2.png';
import Niver3 from '../img/niver-3.png';
import Niver4 from '../img/niver-4.png';
import Niver5 from '../img/niver-5.png';
import Niver6 from '../img/niver-6.png';
import Niver7 from '../img/niver-7.png';
import Niver8 from '../img/niver-8.png';

import Batizado1 from '../img/batizado-1.png';
import Batizado2 from '../img/batizado-2.png';
import Batizado3 from '../img/batizado-3.png';
import Batizado4 from '../img/batizado-4.png';

import Live1 from '../img/livre-1.png';
import Live2 from '../img/livre-2.png';

const links = [
  {
    svg: <PreWedding />,
    id: 'preWed',
    title: 'Pré Wedding',
    className: 'active',
    tag: <h5 className="tag"></h5>,
    text: 'Uma sessão fotográfica pré-casamento, na qual as fotos registram a interação, o romantismo e o envolvimento do casal. Elas podem ser usadas na decoração, no site do casamento, nos convites e nas lembrancinhas. Nossa vista e o cenário ao ar livre prometem fazer com que os registros sejam inesquecíveis.',
    gallery: [
      {
        url: PreWedd1,
        alt: 'SlidePreWedd1 Alt',
      },
      {
        url: PreWedd2,
        alt: 'Confraternização com paisagem paradisíaca ao pôr do sol.',
      },
      {
        url: SlidePre6,
        alt: 'SlidePre5 Alt',
      },
    ],
  },
  {
    svg: <Bride />,
    id: 'elopWed',
    title: 'Elopement Wedding',
    text: 'É realizada uma cerimônia, sendo indicado para os casais que desejam viver intensamente o romantismo do momento. O ideal é que seja realizado apenas com os noivos, podendo contar com um número máximo de 10 pessoas, incluindo celebrante e fotógrafo. Os locais escolhidos para essa celebração normalmente conta com um visual de maravilhoso e a Villa H se encaixa perfeitamente, contribuindo com fotos incríveis deste dia.',
    gallery: [
      {
        url: SlidePre1,
        alt: 'SlidePre1 Alt',
      },
      {
        url: SlidePre4,
        alt: 'SlidePre4 Alt',
      },
      {
        url: SlidePre2,
        alt: 'SlidePre2 Alt',
      },
      {
        url: SlidePre3,
        alt: 'SlidePre3 Alt',
      },
      {
        url: SlidePre5,
        alt: 'SlidePre5 Alt',
      },
    ],
  },
  {
    svg: <Couple />,
    id: 'miniWed',
    title: 'Mini Wedding',
    text: 'A proposta do Mini Wedding é uma cerimônia mais intimista e com poucos convidados, sendo principalmente familiares e os amigos mais queridos, variando de 30 até 80 convidados. Mantém todo o charme de uma grande festa de casamento e tudo que este dia especial merece. Pode ser apenas uma cerimônia ou contar ainda com uma comemoração após a celebração.',
    gallery: [
      {
        url: MiniWddg1,
        alt: 'MiniWddg1 Alt',
      },
      {
        url: MiniWddg2,
        alt: 'MiniWddg1 Alt',
      },
      {
        url: MiniWddg3,
        alt: 'MiniWddg1 Alt',
      },
      {
        url: MiniWddg4,
        alt: 'MiniWddg1 Alt',
      },
    ],
  },
  {
    svg: <StreamIcon />,
    id: 'smallWed',
    title: 'Small Wedding & Streaming',
    text: 'O tempo de incertezas fez com que a Villa H se reinventasse. Com o Small Wedding Streaming, você pode ter o seu casamento dos sonhos, recebendo pessoalmente até 30 convidados mais íntimos e permitindo que muitos outros possam curtir e acompanhar cada detalhe de maneira remota, sem sair de casa.',
    gallery: [
      {
        url: SmallWddg1,
        alt: 'SmallWddg1 Alt',
      },
      {
        url: SmallWddg2,
        alt: 'SmallWddg2 Alt',
      },
      {
        url: SmallWddg3,
        alt: 'SmallWddg3 Alt',
      },
    ],
  },
  {
    svg: <CakeHeart />,
    id: 'casaTrad',
    title: 'Casamento Tradicional',
    text: 'Tradicional mesmo é apenas o nome, cada casamento é único por ter a personalidade de cada casal. Geralmente ocorre à tarde/à noite, com cerimônia seguida de festa (a partir de 80 pessoas), tendo a possibilidade de realizar a cerimônia no mesmo local da festa. Comportamos até 300 pessoas, para que ninguém fique de fora do seu sonho.',
    gallery: [
      {
        url: CasamentoTrad1,
        alt: 'CasamentoTrad1 Alt',
      },
      {
        url: CasamentoTrad2,
        alt: 'CasamentoTrad2 Alt',
      },
      {
        url: CasamentoTrad3,
        alt: 'CasamentoTrad3 Alt',
      },
      {
        url: CasamentoTrad4,
        alt: 'CasamentoTrad4 Alt',
      },
    ],
  },
  {
    svg: <Camera />,
    id: 'sessao',
    title: 'Sessão Fotográfica e Vídeo',
    text: 'Com o design e sofisticação dos espaços e ainda o cenário deslumbrante, a Villa H se torna um local perfeito para ensaios fotográficos individuais ou com marcas que queiram fotografar seus produtos e modelos em um ambiente diferenciado.',
    gallery: [
      {
        url: SessaoFoto1,
        alt: 'SessaoFoto1 Alt',
      },
      {
        url: SessaoFoto2,
        alt: 'SessaoFoto2 Alt',
      },
      {
        url: SessaoFoto3,
        alt: 'SessaoFoto3 Alt',
      },
      {
        url: SessaoFoto4,
        alt: 'SessaoFoto4 Alt',
      },
    ],
  },
  {
    svg: <GlassDrink />,
    id: 'dayUse',
    title: 'Day Use',
    text: 'Day use é uma modalidade de hospedagem sem pernoite, podendo-se aproveitar a estrutura do local. Além da nossa vista maravilhosa, você pode aproveitar um dia de sol na piscina da Villa H. Assim, você pode curtir ao máximo tudo o que o nosso espaço tem a oferecer',
    tag: <h5 className="tag"></h5>,
    gallery: [
      {
        url: DayUse1,
        alt: 'DayUse1 Alt',
      },
      {
        url: DayUse2,
        alt: 'DayUse2 Alt',
      },
      {
        url: DayUse4,
        alt: 'DayUse4 Alt',
      },
    ],
  },
  {
    svg: <BreakFast />,
    id: 'break',
    title: 'Café da Manhã',
    text: 'Já pensou em unir a família e amigos para curtir um café da manhã com a vista incrível da Villa H? Você curte um momento de lazer, aprecia o melhor da gastronomia e de quebra, tira várias fotos para atualizar as redes sociais.',
    gallery: [
      {
        url: Cafe1,
        alt: 'Cafe1 Alt',
      },
      {
        url: Cafe2,
        alt: 'Cafe2 Alt',
      },
      {
        url: Cafe3,
        alt: 'Cafe3 Alt',
      },
    ],
  },
  {
    svg: <Handshake />,
    id: 'eventoCorp',
    title: 'Evento Corporativo',
    text: 'Convenções, seminários, workshops, palestras, reuniões e confraternizações. Com capacidade para até 250 pessoas (espaços 1 e 2) e espaço total com aproximadamente 430 m², o local oferece estrutura moderna que se adapta perfeitamente ao seu tipo de evento, dando possibilidade a diversos formatos, desde reuniões mais formais até confraternizações, coquetéis e festas.Possuímos espaço para exposição com projetor, espaço para coffee break. Disponibilizamos mesas e cadeiras, e oferecemos internet wireless para maior comodidade.',
    gallery: [
      {
        url: EventoCorp1,
        alt: 'EventoCorp1 Alt',
      },
      {
        url: EventoCorp2,
        alt: 'EventoCorp2 Alt',
      },
      {
        url: EventoCorp3,
        alt: 'EventoCorp3 Alt',
      },
    ],
  },
  {
    svg: <PartyBuild />,
    id: 'aniversario',
    title: 'Aniversário/Festa 15 anos',
    text: 'Para comemorar o seu dia e mais um ano cheio de sonhos a serem realizados, nada melhor do que fazer a sua festa na Villa H, um espaço com boas vibrações, ambiente aconchegante e uma vista que promete encantar os seus convidados.',
    gallery: [
      {
        url: Niver1,
        alt: 'Niver1 Alt',
      },
      {
        url: Niver2,
        alt: 'Niver2 Alt',
      },
      {
        url: Niver3,
        alt: 'Niver3 Alt',
      },
      {
        url: Niver4,
        alt: 'Niver4 Alt',
      },
      {
        url: Niver5,
        alt: 'Niver5 Alt',
      },
      {
        url: Niver6,
        alt: 'Niver6 Alt',
      },
      {
        url: Niver7,
        alt: 'Niver7 Alt',
      },
      {
        url: Niver8,
        alt: 'Niver8 Alt',
      },
    ],
  },
  {
    svg: <Foot />,
    id: 'batizado',
    title: 'Batizado',
    gallery: [
      {
        url: Batizado1,
        alt: 'Batizado1 Alt',
      },
      {
        url: Batizado2,
        alt: 'Batizado2 Alt',
      },
      {
        url: Batizado3,
        alt: 'Batizado3 Alt',
      },
      {
        url: Batizado4,
        alt: 'Batizado4 Alt',
      },
    ],
  },
  {
    svg: <Ring />,
    id: 'noivado',
    title: 'Noivado',
    text: 'A Villa H oferece vários formatos de festas de noivado para que seu compromisso seja inesquecível desde o início. Temos espaço para brunch, jantar e confraternização ao entardecer, sempre acompanhados da vista linda que cerca a Villa H.',
  },
  {
    svg: <Camera />,
    id: 'live',
    title: 'Live',
    text: 'Aluguel do espaço para realização do seu evento. Aqui, a sua Live terá um ambiente aconchegante, com uma decoração única, além da vista sensacional como fundo da sua transmissão.',
    gallery: [
      {
        url: Live1,
        alt: 'Live1 Alt',
      },
      {
        url: Live2,
        alt: 'Live2 Alt',
      },
    ],
  },
];

const MenuEvent = ({ subtitle }) => {
  const [isActive, setIsActive] = useState(links[0].id);

  const handleIsActive = (id) => {
    setIsActive(id, !isActive);
  };

  return (
    <div className="menu-event theme-dark-blue">
      <>{subtitle}</>
      <ul>
        {links.map((l, i) => (
          <li key={`menu-${i}`} className={isActive === l.id ? 'active' : ''}>
            <button
              className="btn-event"
              href={l.id}
              onClick={() => handleIsActive(l.id)}
            >
              {l.svg}
              {l.title}
            </button>
          </li>
        ))}
      </ul>
      <Event links={links} cardIsActive={isActive} />
    </div>
  );
};

export default MenuEvent;
