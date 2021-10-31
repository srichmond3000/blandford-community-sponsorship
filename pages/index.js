import Link from 'next/link';
import Layout from './components/layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title='Home page'>
      <p>
        The Blandford Welcome Group (BWG) is a group of local residents who are
        working together to help a refugee family to settle in Blandford and
        rebuild their lives. The family may come from any conflict zone.
      </p>
      <section className={styles.withBackground}></section>
      <section>
        <h2>How will we do this?</h2>
        <p>
          We will be part of the government’s Community Sponsorship Scheme for
          refugees, joining over 100 other local community groups across the UK
          working to welcome a family to their town. Community Sponsorship is a
          pathway for a family to settle and gain rights in the UK.
        </p>
        <p>
          The Blandford Welcome Group is gaining official consent, creating a
          re-settlement plan, finding housing, and organising community support
          prior to the arrival of the family (likely in 2022/23) and for two
          years afterwards.
        </p>
      </section>
      <section>
        <h2>Why?</h2>
        <p>
          Millions of people have been forced to flee from their country to
          escape war, conflict, famine and abuse. We want to do something to
          alleviate their plight and to bring hope.{' '}
        </p>
        <p>
          Blandford is a caring community and this project will also help
          transform our own community relationships and our view of the wider
          world. There is already a Syrian family settled in the town.
        </p>
      </section>
      <section>
        <h2>Community Sponsorship and the BWG</h2>
        <p>
          Community Sponsorship was launched by the UK government in 2016 to
          augment the UK's commitment to welcome 20,000 refugees affected by the
          crisis in Syria by 2020. Since 2016, hundreds of refugees have been
          sponsored by local community groups like ours.
        </p>
        <p>
          Our group is made up of people from all walks of life from Blandford
          and the surrounding area. We would love to welcome volunteers from
          across the entire community.
        </p>
        <p>
          The BWG is supported and assisted by{' '}
          <a href='https://www.plymouth-diocese.org.uk/caritas'>
            Caritas Plymouth
          </a>
          , which is our lead sponsor, and{' '}
          <a href='https://charisrefugees.org/'>Charis</a>, established
          charities which help refugees and promote charity and justice in the
          world.
        </p>
        <p>
          For more information, visit the{' '}
          <Link href='/faq'>
            <a>FAQ page</a>
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}
