import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>
        Film Screenings: <i>Notting Hill</i> on March 9th
      </h2>
      <p>
        <b>
          <i>
            Enjoy a heart-warming and fascinating evening, and contribute to a
            good cause.
          </i>
        </b>
      </p>
      <p>
        The BWG will be screening the highly enjoyable romantic comedy,{' '}
        <b>
          <i>Notting Hill</i>
        </b>{' '}
        (124 minutes, certificate PG13), on{' '}
        <b>March 9th, at Blandford School</b> (doors open from 6.45, film starts
        at 7.15). Uniquely, the evening includes a short introduction and
        Q&amp;A afterwards with the film&apos;s producer,{' '}
        <b>Duncan Kenworthy</b>, one of the UK&apos;s most successful
        film-makers of the past 30 years, responsible also for{' '}
        <i>Four Weddings and a Funeral, Love Actually</i> and{' '}
        <i>The Children Act</i>.
      </p>
      <p>
        The second film is{' '}
        <b>
          <i>Pleasure at Her Majesty&apos;s</i>
        </b>{' '}
        (U; 1976; 74 mins), a brilliantly funny series of famous comic sketches
        from Monty Python, the Goodies and Beyond the Fringe and others - filmed
        live at a ground-breaking theatre performance in 1976. The evening
        includes a short introduction and Q&amp;A afterwards with the
        film&apos;s director, <b>Roger Graef</b>. This will be on{' '}
        <b>March 9th, at Blandford School</b>, DT11 0SQ (doors open from 6.45,
        film starts at 7.15).
      </p>
      <p>
        TICKETS for each film are £10 per person, with all funds raised going to
        the Blandford Welcome Group (BWG). Either <b>purchase online</b> by
        following this link{' '}
        <a href='https://www.ticketsource.co.uk/blandford-welcome-group'>
          Ticket Shop
        </a>
      </p>
      <p>
        Or buy in-person, for cash, from <i>The Blandford School</i> (reception
        desk), Milldown Road, Blandford DT11 0SQ OR from{' '}
        <i>Hambledon Gallery</i>, 44 Salisbury Street, Blandford, DT11 7PR
      </p>
      <p>Later films are not yet finalised.</p>

      <h2 className={styles.pastEventsHeading}>Past events</h2>
      <h3 className={styles.pastEvents}>
        Quiz Evening 7.30pm Saturday February 5th, 2022
      </h3>
      <p>We had a very successful online quiz night.</p>
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
