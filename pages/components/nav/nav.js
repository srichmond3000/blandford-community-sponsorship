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
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href='/about' onNav={toggleMenu}>
        <a>About</a>
      </ActiveLink>
      <ActiveLink href='/news' onNav={toggleMenu}>
        <a>News</a>
      </ActiveLink>
      <ActiveLink href='/events' onNav={toggleMenu}>
        <a>Events</a>
      </ActiveLink>
      <ActiveLink href='/volunteer' onNav={toggleMenu}>
        <a>Get Involved</a>
      </ActiveLink>
      <ActiveLink href='/donate' onNav={toggleMenu}>
        <a>Donate</a>
      </ActiveLink>
      <ActiveLink href='/contact' onNav={toggleMenu}>
        <a>Contact</a>
      </ActiveLink>
    </nav>
  );
};

export default Nav;
