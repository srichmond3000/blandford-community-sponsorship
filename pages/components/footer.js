import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.name}>Blandford Welcome Group</span>
      <div className={styles.lower}>
        <span className={styles.contact}>
          <a href='mailto:info@blandfordwelcome.group?subject=Enquiry from website'>
            info@blandfordwelcome.group
          </a>
          &nbsp;|&nbsp;
          <Link href='/privacy'>
            <a>Privacy policy</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
