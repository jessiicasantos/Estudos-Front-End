const menus = [
  {
    href: '#a-villa-h',
    text: 'A Villa H',
  },
  {
    href: '#eventos',
    text: 'Eventos',
  },
  {
    href: '#estruturas',
    text: 'Estruturas',
  },
  {
    href: '#gastronomia',
    text: 'Gastronomia',
  },
  {
    href: '#depoimentos',
    text: 'Depoimentos',
  },
];

const NavMenu = () => (
  <ul className="nav-links">
    {menus.map((m, index) => (
      <li className="nav-link" key={`${m}`[index]}>
        <a href={m.href}>{m.text}</a>
      </li>
    ))}
  </ul>
);

export default NavMenu;
