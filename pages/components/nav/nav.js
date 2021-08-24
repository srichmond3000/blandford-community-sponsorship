import { useState } from 'react';
import ActiveLink from './activeLink';
import Hamburger from './hamburger';
import styles from './nav.module.scss';

const Nav = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  };

  let navClass = expandMenu
    ? `${styles.nav} ${styles.responsive}`
    : `${styles.nav}`;

  return (
    <nav className={navClass}>
      <Hamburger handleClick={toggleMenu} />
      <ActiveLink href='/' onNav={toggleMenu}>
        <span>Home</span>
      </ActiveLink>
      <ActiveLink href='/events' onNav={toggleMenu}>
        <span>Events</span>
      </ActiveLink>
      <ActiveLink href='/volunteer' onNav={toggleMenu}>
        <span>Get Involved</span>
      </ActiveLink>
      <ActiveLink href='/donate' onNav={toggleMenu}>
        <span>Donate</span>
      </ActiveLink>
      <ActiveLink href='/faq' onNav={toggleMenu}>
        <span>FAQ</span>
      </ActiveLink>
      <ActiveLink href='/privacy' onNav={toggleMenu}>
        <span>Privacy policy</span>
      </ActiveLink>
      <ActiveLink href='/contact' onNav={toggleMenu}>
        <span>Contact</span>
      </ActiveLink>
    </nav>
  );
};

export default Nav;
