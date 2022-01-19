import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>Quiz Evening 7.30pm Saturday February 5th, 2022</h2>
      <p>
        Friends, family and fellow parishioners are most welcome. As well as
        raising funds for the cause, these evenings are always good fun and
        there will be a nominal prize for the winning team! Entry is £10 per
        link, with payment via{' '}
        <a href='https://givealittle.co/campaigns/accd22da-915c-4783-9181-205993d98bfe'>
          Blandford Welcome Group - Give A Little
        </a>
        . This will generate an e-mail receipt which should then be forwarded to
        aprwas@hotmail.com and we will forward you a Zoom link to join the quiz.
      </p>

      <h2>Film Screenings</h2>
      <p>
        Planning is under way to screen several famous and highly enjoyable
        comedies, beginning with Notting Hill, starring Julia Roberts and Hugh
        Grant, at a venue in Blandford. The screening will include a short talk
        by Duncan Kenworthy, one of Britain&apos;s most successful film
        producers, who was also responsible for Four Weddings and a Funeral, and
        Love Actually. Details will be announced later.
      </p>

      <h2 className={styles.pastEventsHeading}>Past events</h2>
      <h3 className={styles.pastEvents}>
        Blandford Yuletide Festival - Friday 3 December
      </h3>
      <p>
        The BWG stall at the Blandford Yuletide Festival was a great success,
        especially on the first day.
      </p>
      <h3 className={styles.pastEvents}>Church BBQ - August 15, 2021</h3>
      <p>
        The BWG hosted a very successful BBQ in the garden of the Blandford
        Catholic Church (Our Lady of Lourdes and St Cecilia) on August 15, 2021.
      </p>
    </Layout>
  );
}
