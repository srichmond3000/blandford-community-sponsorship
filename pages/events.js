import Image from 'next/image';
import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>
        Film Screenings: <i>Notting Hill</i> on March 9th and{' '}
        <i>Pleasure at Her Majesty&apos;s</i> on April 8th
      </h2>
      <p>
        <b>
          <i>
            Enjoy heart-warming and fascinating evenings, and contribute to a
            good cause.
          </i>
        </b>
      </p>
      <section className={styles.filmsContainer}>
        <div className={styles.filmImageNotting}>
          <Image
            src='/images/NottingHill.jpg'
            alt='Logo'
            width={260}
            height={387}
            priority={true}
          />
        </div>
        <div className={styles.filmDescriptionNotting}>
          The BWG will be screening the highly enjoyable romantic comedy,{' '}
          <strong className={styles.name}>Notting Hill</strong> (124 minutes,
          certificate PG12A), on <b>March 9th, at Blandford School</b> (doors
          open from 6.30, film starts at 7.00) (
          <a href='https://goo.gl/maps/qeEcXRvSf4JZozhm6'>map</a>). Uniquely,
          the evening includes a short introduction and Q&amp;A afterwards with
          the film&apos;s producer, <b>Duncan Kenworthy</b>, one of the
          UK&apos;s most successful film-makers of the past 30 years,
          responsible also for <i>Four Weddings and a Funeral, Love Actually</i>{' '}
          and <i>The Children Act</i>.
        </div>
        <div className={styles.filmImageMonty}>
          <Image
            src='/images/MontyPython.png'
            alt='Logo'
            width={358}
            height={378}
            priority={true}
          />
        </div>
        <div className={styles.filmDescriptionMonty}>
          The second film is{' '}
          <strong className={styles.name}>
            Pleasure at Her Majesty&apos;s
          </strong>{' '}
          (U; 1976; 74 mins), a brilliantly funny series of famous comic
          sketches from Monty Python, the Goodies and Beyond the Fringe and
          others - filmed live at a ground-breaking theatre performance in 1976.
          The evening includes a short introduction and Q&amp;A afterwards with
          the film&apos;s director, <b>Roger Graef</b>. This will be on{' '}
          <b>March 9th, at Blandford School</b> (
          <a href='https://goo.gl/maps/qeEcXRvSf4JZozhm6'>map</a>), DT11 7SQ
          (doors open from 6.30, film starts at 7.00).
        </div>
      </section>
      <section className={styles.tickets}>
        Tickets (£10 each) for either/both films available from:
        <ul>
          <li>
            <a
              href='https://www.ticketsource.co.uk/blandford-welcome-group'
              className={styles.button}
            >
              Online
            </a>
          </li>
          <li>
            <span className={styles.or}>OR buy in-person for cash from</span>
            <i>The Blandford School</i> (reception desk), Milldown Road,
            Blandford DT11 7SQ{' '}
            <a
              href='https://goo.gl/maps/qeEcXRvSf4JZozhm6'
              className={styles.mapLink}
            >
              map
            </a>
          </li>
          <li>
            <span className={styles.or}>OR from</span>
            <i>Hambledon Gallery</i>, 44 Salisbury Street, Blandford, DT11 7PR{' '}
            <a
              href='https://goo.gl/maps/mpNEPBVeoBLJ3fnD7'
              className={styles.mapLink}
            >
              map
            </a>
          </li>
        </ul>
        <span>
          All funds raised will go to the Blandford Welcome Group (BWG).
        </span>
      </section>
      <p>You may like to bring a cushion to sit on.</p>
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
