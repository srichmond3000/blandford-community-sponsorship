import Link from 'next/link';
import Layout from './components/layout';

export default function Donate() {
  return (
    <Layout title='Donate page'>
      <section>
        <h2>Make a donation and help us to support a displaced family</h2>
        <p>
          To make a one-time donation or to sign up for regular sponsorship
          (which you can cancel or amend at any time),{' '}
          <a href='https://givealittle.co/campaigns/accd22da-915c-4783-9181-205993d98bfe'>
            please follow this link
          </a>
          .
        </p>
        <p>
          If you are a UK taxpayer, we will also be able to claim 25% Gift Aid
          from the government, making your donation go that much further. It is
          very simple for fill in the required details on the Give A Little
          page.
        </p>
        <p>
          See our{' '}
          <Link href='/privacy'>
            <a>Privacy Policy page</a>
          </Link>
          .
        </p>
        <p>
          For more information, visit the{' '}
          <Link href='/faq'>
            <a>FAQ page</a>
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>What we are fundraising for?</h2>
        <p>
          As part of the official government Community Sponsorship scheme, the
          family will be eligible for state healthcare, schooling, universal
          credit, and rent support. Nevertheless, we have to raise a minimum of
          £9,000 in order to make an application to the Community Sponsorship
          scheme. The money which we raise is for:
        </p>
        <ul>
          <li>Interpreters and English language tuition</li>
          <li>Gaps in rent support during the first 2 years</li>
          <li>Phones and communications technology</li>
          <li>Larger housing items such as a fridge and cooker</li>
          <li>Possible job re-training</li>
          <li>Other needs</li>
        </ul>
      </section>
    </Layout>
  );
}
