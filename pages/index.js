import Link from 'next/link';
import Layout from './components/layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title='BWG - Home'>
      <p>
        The Blandford Welcome Group (BWG) is a group of local residents who are
        working together to help a refugee family to settle in Blandford and
        rebuild their lives.</p>
      <p>The family, comprising parents and three young children, arrived in December 2022. 
        They were classified as highly vulnerable by the UN High Commission for Refugees. 
        They rent a home in Blandford, and the parents are keenly learning English. The 
        eldest son is at primary school.
      </p>
      <p>
        The BWG is committed to supporting the family to become independent,
        assisting them for a period of two years (i.e. to end 2024), including providing
        language tuition, interpreting, and assisting with access to all necessary
        services, including healthcare, schooling and the Job Centre. They are eligible
        for all state services and benefits, have indefinite leave to stay and work in
        the UK, and will eventually have a pathway to British citizenship.
      </p>

      <section className={styles.withBackground}></section>
      <section>
        <h2>How will we do this?</h2>
        <p>
          We are part of the government&amp;s Community Sponsorship Scheme for
          refugees, joining over 100 other local community groups across the UK
          working to welcome a family to their town. Community Sponsorship is a
          pathway for a family to settle and gain rights in the UK.
        </p>
        <p>
          The Blandford Welcome Group has raised funds, has gained official consent, is 
          undertaking much training, has a re-settlement plan, has found a house for the family to 
          rent, has organised language tuition and interpreting, and is organising support for the family. 
          Our support lasts for 2 years (to end 2024), during which time the intention is that 
          family becomes independent.
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
          world.
        </p>
      </section>
      <section>
        <h2>Community Sponsorship and the BWG</h2>
        <p>
          Community Sponsorship was launched by the UK government in 2016 to
          augment the UK's commitment to welcome refugees affected by the
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
          <a href='https://resetuk.org'>ReSet UK</a>, established
          charities which help refugees and promote charity and justice in the
          world.
        </p>
        <p>
          The BWG is part of the Diocese of Plymouth charity, registered with
          the Charity Commission in England and Wales: charity number is 213227;
          registered address is St Boniface House, Ashburton, Devon TQ13 7JL.
        </p>
        <p>
          For more information, visit the{' '}
          <Link href='/faq'>
            FAQ page
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}
