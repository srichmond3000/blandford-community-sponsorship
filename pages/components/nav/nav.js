import ActiveLink from './activeLink';

const Nav = () => {
  return (
    <nav>
      <ActiveLink href='/'>
        <a>Home</a>
      </ActiveLink>
    </nav>
  );
};

export default Nav;
