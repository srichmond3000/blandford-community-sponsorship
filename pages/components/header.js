import Nav from './nav/nav';
import TitleArea from './titleArea';

const Header = () => {
  return (
    <>
      <header className='header'>
        <TitleArea />
        <Nav />
      </header>
    </>
  );
};

export default Header;
