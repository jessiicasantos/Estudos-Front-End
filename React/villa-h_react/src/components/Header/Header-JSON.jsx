// JSON Header > Nav

const Header = [
  {
    NavLogo: <svg id="villa-h" />,
    NavMenu: [
      {
        txt: 'A Villa H',
        link: '#a-villa-h',
      },
      {
        txt: 'Eventos',
        link: '#eventos',
      },
      {
        txt: 'Estruturas',
        link: '#estruturas',
      },
      {
        txt: 'Gastronomia',
        link: '#gastronomia',
      },
      {
        txt: 'Depoimentos',
        link: '#depoimentos',
      },
    ],
    linkForm: {
      txt: 'SOLICITAR UM ORÇAMENTO',
      link: '#orcamento',
    },
    btnNavMb: [
      {
        component: <Burguer />,
        state: ['', 'open'],
      },
    ],
  },
];

const NavMb = [
  {
    component: <NavLogo />,
    className: 'nav-logo',
  },
  {
    component: <Burguer />,
    className: 'btn-nav-mb',
    state: ['', 'open'],
  },
  {
    component: <NavMenu />,
    className: 'nav-links',
    state: ['', 'open'],
  },
];
