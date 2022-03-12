import Image from 'next/image';
import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>
        Film Screenings: <i>Pleasure at Her Majesty&apos;s</i> on April 8th and{' '}
        <i>Son of Rambow</i> on May 10th
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
          On <strong>April 8th</strong>, the BWG is screening{' '}
          <strong className={styles.name}>
            Pleasure at Her Majesty&apos;s
          </strong>{' '}
          (U; 1976; 74 mins), a brilliantly funny series of famous comic
          sketches from Monty Python, the Goodies and Beyond the Fringe and
          others - filmed live at a ground-breaking theatre performance in 1976.
          This will be shown at <strong>Blandford School</strong> (
          <a href='https://goo.gl/maps/qeEcXRvSf4JZozhm6'>map</a>), DT11 7SQ
          (doors open from 6.15, film starts at 7.00).
        </div>
        <div className={styles.filmImageRambow}>
          <Image
            src='/images/SonOfRambow.jpg'
            alt='Logo'
            width={300}
            height={444}
            priority={true}
          />
        </div>
        <div className={styles.filmDescriptionRambow}>
          <strong>Special comedy for families and the young at heart</strong>:
          on May 10th we are showing{' '}
          <strong className={styles.name}>Son of Rambow</strong> (12; 91 mins),
          which is a hilariously fresh take on friendship, family and film
          heroes. <i>Son of Rambow</i> is the story of two young boys who, after
          watching Sylvester Stallone in action in <i>First Blood</i>, the first
          Rambo film, decide that they will make their own home movie version in
          the wilds of Berkhamstead. The film won the{' '}
          <strong className={styles.name}>Empire Award for Best Comedy</strong>,
          as well as other high praise. Unusually, the evening concludes with a
          short introduction and Q&amp;A afterwards with the film&apos;s
          producer,
          <strong>Nick Goldsmith</strong>. This will be shown at{' '}
          <strong>Blandford School</strong> (
          <a href='https://goo.gl/maps/qeEcXRvSf4JZozhm6'>map</a>), DT11 7SQ
          (doors open from 6.15, film starts at 7.00).
        </div>
      </section>
      <section className={styles.tickets}>
        Tickets for all films are £10 each - or £5 for those aged under 19 or
        over 65. Available from:
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

      <h2 className={styles.pastEventsHeading}>Past events</h2>
      <h3 className={styles.pastEvents}>
        Film Screenings - <i>Notting Hill</i>
      </h3>
      <p>
        The BWG screened the film <i>Notting Hill</i>, followed by Q&amp;A with
        its distinguished producer, Duncan Kenworthy, on March 9, 2022.
      </p>
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
