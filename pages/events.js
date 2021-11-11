import Layout from './components/layout';
import styles from './events.module.scss';

export default function Events() {
  return (
    <Layout title='BWG - Events'>
      <h2>Blandford Yuletide Festival - Friday 3 December</h2>
      <p>
        The BWG will have a stall at the Blandford Yuletide Festival, on Friday
        3 December.
      </p>
      <h2>Film Showings</h2>
      <p>
        Planning is under way to screen a series of famous and enjoyable old
        favourites, possibly including Four Weddings and a Funeral and Get
        Carter, at a venue in or near Blandford. The screening will include a
        short Q&amp;A session with the directors afterwards. Details will be
        announced later.
      </p>

      <h2 className={styles.pastEventsHeading}>Past events</h2>
      <h3 className={styles.pastEvents}>Church BBQ - August 15, 2021</h3>
      <p>
        The BWG hosted a very successful BBQ in the garden of the Blandford
        Catholic Church (Our Lady of Lourdes and St Cecilia) on August 15, 2021.
        Further events are being planned and will be posted up here when the
        details are finalised.
      </p>
    </Layout>
  );
}
