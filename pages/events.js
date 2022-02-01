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

      <h2>
        Film Screenings: <i>Notting Hill</i> on March 9th and{' '}
        <i>Pleasure at Her Majesty's</i> on April 8th
      </h2>
      <p>
        We are very pleased to announce that we will be screening the highly
        enjoyable romantic comedy,{' '}
        <strong>
          <i>Notting Hill</i>
        </strong>{' '}
        (124 minutes, certificate PG13), at 6 pm on <strong>March 9th</strong>,
        at Blandford School. The film will be preceded by a talk by the
        producer, Duncan Kenworthy, one of the UK&apos;s most eminent
        film-makers, who lives locally.
      </p>
      <p>
        Tickets will soon be on sale (details to be announced) for £10 per seat.
        Advance purchasing will be necessary. All proceeds go to help the
        refugee family settle in Blandford.
      </p>
      <p>
        The second film planned is{' '}
        <strong>
          <i>Pleasure at Her Majesty&apos;s</i>
        </strong>{' '}
        (74 minutes), a brilliantly funny series of famous comic sketches from
        Monty Python, the Goodies, Beyond the Fringe, Peter Cook - filmed live
        at a ground-breaking theatre performance in 1976. The film will be
        preceded by a talk by the director, Roger Graef, who also lives locally.
        This will be on <strong>April 8th</strong>, also at Blandford School.
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
