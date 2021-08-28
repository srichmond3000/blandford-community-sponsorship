import Link from 'next/link';
import Layout from './components/layout';

export default function Faq() {
  return (
    <Layout title='FAQ'>
      <section>
        <h2>How much money does a community sponsor group have to raise?</h2>
        <p>
          The UK government requires Community Sponsors to have at least £9,000
          raised plus to have secured housing for at least two years before an
          application can be considered.
        </p>
      </section>
      <section>
        <h2>How many families are you supporting?</h2>
        <p>
          The Blandford Welcome Group will seek Home Office approval for one
          family.
        </p>
      </section>
      <section>
        <h2>Do I have to be a member of a church to volunteer or donate?</h2>
        <p>
          Definitely not! We welcome everyone from inside and beyond the local
          community. All volunteers are interviewed and have to complete
          training and be background checked but apart from that we welcome
          everybody.
        </p>
      </section>
      <section>
        <h2>When I click the "donate" button, where does my money go?</h2>
        <p>
          When you click the Donate button, you are taken to the BWG’s{' '}
          <Link href='/donate'>
            <a>Give a Little</a>
          </Link>{' '}
          online donation page. The payment facility is authorised and regulated
          by the Financial Conduct Authority. The money raised through this
          online link will go into the Blandford Catholic Church parish bank
          account but will be in a separate facility and will be ringfenced for
          the sole use of the BWG.
        </p>
      </section>
      <section>
        <h2>How can I cancel monthly sponsorship?</h2>
        <p>
          You can do this at any time. To cancel your regular donation, please
          follow the cancellation link which you will find on your monthly
          donation receipt. Alternatively, you can reply to the receipt email
          and ask for your monthly sponsorship to be cancelled and Give A Little
          will do it for you.
        </p>
      </section>
    </Layout>
  );
}
