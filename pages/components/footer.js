import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>Blandford Welcome Group</p>
      <p>
        &nbsp;
        <a href='mailto:info@blandfordwelcome.group?subject=Enquiry from website'>
          info@blandfordwelcome.group
        </a>
      </p>
    </div>
  );
};

export default Footer;
