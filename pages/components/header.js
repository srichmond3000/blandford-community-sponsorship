import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav/nav';
import TitleArea from './titleArea';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className={styles.wrapper}>
        <div className={styles.logoArea}>
          <Link href='/'>
            <a>
              <Image
                src='/images/logo-without-text.png'
                alt='Logo'
                width={150}
                height={135}
              />
            </a>
          </Link>
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
