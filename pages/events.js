import Image from 'next/image';
import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>Fundraising with Art</h2>
      <p>
        The Blandford Welcome Group invites artists (professional and amateur)
        to donate a painting or small work of art, around 15-30cm (6"-12") in a
        mount, for a special exhibition in September (date to be announced).
        Raffle tickets to match the number of paintings and works of art donated
        will be sold in advance. Raffle ticket holders and donors will be
        invited for an evening where a lucky dip will decide which painting they
        take home.
      </p>
      <p>
        Thank you for supporting this exciting fundraising initiative. It well
        result in an enjoyable social event with friends, family, wine &amp;
        nibbles, and the certainty of a beautiful piece of art to own and enjoy.
      </p>
      <p>
        Please email your willingness to participate by emailing{' '}
        <a href='mailto:info@blandfordwelcome.group?subject=Fundraising%20with%20Art'>
          info@blandfordwelcome.group
        </a>{' '}
        with your name, address and phone number. Note that the deadline for
        submissions is 15th July 2022.
      </p>

      <h2 className={styles.pastEventsHeading}>Past events</h2>

      <h3 className={styles.pastEvents}>Choral Concert</h3>
      <p>
        The BWG hosted a delightful choral concert with the Shaftesbury-based
        acappella choir <a href='https://www.palidachoir.com'>Palida</a>,
        conducted by Karen Wimhurst, on 1st July 2022 at St Nicholas Church,
        Durweston
      </p>
      <h3 className={styles.pastEvents}>
        Film Screenings: <i>Son of Rambow</i>
      </h3>
      <p>
        The BWG screened <i>Son of Rambow</i> on May 10th 2022, followed by a
        Q&amp;A session with the producer Nick Goldsmith.
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
