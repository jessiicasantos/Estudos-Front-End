import { useEffect, useState } from 'react';
import NavLogo from './NavLogo/NavLogo';
import NavMbWrapper from './NavMbWrapper/NavMbWrapper';
import Burguer from './Burguer/Burguer';
import './Nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const active = isOpen ? 'active' : '';

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNav);

    return () => {
      window.removeEventListener('scroll', stickNav);
    };
  }, []);

  const stickNav = () => {
    if (window !== undefined) {
      let windowHeight = window.pageYOffset;

      console.log(windowHeight);

      windowHeight > 457 ? setSticky('sticky') : setSticky('');
    }
  };

  return (
    <nav className={`top-nav${active ? ' active' : ''} ${sticky}`}>
      <div className="main-nav">
        <NavLogo />
        <Burguer id="btn-nav-mb" isOpen={active} handleIsOpen={handleIsOpen} />
      </div>
      <NavMbWrapper isOpen={active} handleIsOpen={handleIsOpen} />
    </nav>
  );
};

export default Nav;
