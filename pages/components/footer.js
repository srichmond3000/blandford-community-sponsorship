import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.name}>Blandford Welcome Group</span>
      <span className={styles.contact}>
        <a href='mailto:info@blandfordwelcome.group?subject=Enquiry from website'>
          info@blandfordwelcome.group
        </a>
      </span>
    </div>
  );
};

export default Footer;
