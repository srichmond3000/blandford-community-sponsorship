import Image from 'next/image';
import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2 className={styles.pastEventsHeading}>Past events</h2>
      <h3 className={styles.pastEvents}>
        Film Screenings - <i>Son of Rambow</i>
      </h3>
      <p>
        The BWG screened the film <i>Son of Rambow</i>, followed by Q&amp;A with
        its producer, Nick Goldsmith, on May 10th, 2022.
      </p>
      <h3 className={styles.pastEvents}>
        Film Screenings - <i>Pleasure at Her Majesty's</i>
      </h3>
      <p>
        On April 8, the BWG screened the film <i>Pleasure at Her Majesty's</i>,
        followed by a fascinating Q&amp;A with Susan Richards, wife of Roger
        Graef, the director of the film, who sadly died in March.
      </p>
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
