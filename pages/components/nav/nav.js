import ActiveLink from './activeLink';

const Nav = () => {
  return (
    <nav>
      <ActiveLink href='/'>
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href='/about'>
        <a>About</a>
      </ActiveLink>
      <ActiveLink href='/news'>
        <a>News</a>
      </ActiveLink>
      <ActiveLink href='/events'>
        <a>Events</a>
      </ActiveLink>
      <ActiveLink href='/volunteer'>
        <a>Get Involved</a>
      </ActiveLink>
      <ActiveLink href='/donate'>
        <a>Donate</a>
      </ActiveLink>
      <ActiveLink href='/contact'>
        <a>Contact</a>
      </ActiveLink>
    </nav>
  );
};

export default Nav;
