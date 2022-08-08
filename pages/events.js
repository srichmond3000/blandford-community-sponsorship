import Image from 'next/image';
import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>
        Take home a beautiful piece of art - enjoy a good social evening - and
        contribute to supporting a refugee family
      </h2>
      <p>
        You are warmly invited to take part in the Blandford Welcome
        Group&apos;s fundraising initiative to support a refugee family from a
        UN Refugee camp to come to live and settle in Blandford.
      </p>
      <p>
        We have invited artists (professional and amateur) to donate paintings
        and works of art to be shown at a special Art Exhibition which will be
        held at St Nicholas&apos; Church, Durweston on Saturday October 8th
        starting at 7.00pm. During the evening each ticket holder will pick a
        number from a lucky dip. That number will correspond with the same
        number on one of the works of art, so that each ticket-holder will
        receive a work of art to take home.{' '}
        <strong>Drinks and snacks will be provided</strong>.
      </p>
      <p>
        Tickets are £30 each (<strong>purchase via the link above</strong>) and
        the number of tickets is limited to the number of works of art
        displayed.{' '}
        <strong>IT IS ESSENTIAL TO BUY A TICKET PRIOR TO THE EVENT</strong>. NO
        TICKETS WILL BE SOLD ON THE DOOR.
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
