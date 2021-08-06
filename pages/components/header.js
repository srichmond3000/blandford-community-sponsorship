import Image from 'next/image';
import Nav from './nav/nav';
import TitleArea from './titleArea';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className={styles.wrapper}>
        <div className={styles.logoArea}>
          <Image
            src='/images/main-logo.png'
            alt='Logo'
            width={150}
            height={135}
          />
        </div>
        <div className={styles.titleArea}>
          <TitleArea className={styles.title} />
        </div>
        <div className={styles.navArea}>
          <Nav className={styles.nav} />
        </div>
      </div>
    </header>
  );
};

export default Header;
