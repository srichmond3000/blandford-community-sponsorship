import Link from 'next/link';
import Layout from './components/layout';

export default function Volunteer() {
  return (
    <Layout title='BWG - Get Involved'>
      <h2>All volunteers are welcome</h2>
      <p>
        Everyone is very welcome to help, in whatever way you can, for just a
        few hours or more. For example:
      </p>
      <ul>
        <li>Arranging and helping with fundraising</li>
        <li>Assisting or taking part in events</li>
        <li>
          Donating or becoming a regular sponsor (see{' '}
          <Link href='/donate'>
            Donate page
          </Link>
          )
        </li>
        <li>Publicising what we are about</li>
        <li>Welcoming the family</li>
        <li>Helping them to practice speaking English</li>
        <li>Showing them local shops, neighbourhood, and transport</li>
        <li>Liaising with schools and medical centres</li>
        <li>Helping with finance applications</li>
        <li>Social media engagement</li>
        <li>
          Helping children settle in to school and join after-school activities
        </li>
        <li>Donating furniture, clothing and household goods</li>
        <li>
          Helping with employment, to support the family’s independence and
          self-sufficiency. The experience is that adults in refugee families
          are extremely keen to find work and to become self-reliant when they
          are fit and able
        </li>
        <li>Training other volunteers</li>
      </ul>
      <p>
        Volunteering is enriching for you and your family. You might have a
        specific skill to share or you might want to support our administration
        and fundraising work. All volunteers who will be meeting the family are
        required to have a screening interview, agree to background checking and
        undergo formal training. But don't be put off! We've all had to do it
        and it isn't that bad.
      </p>
      <p>
        We are a friendly group who have come together from a mutual desire to
        help a family achieve a safe and productive life in our community.
      </p>
      <p>
        If you are interested to enquire further about any form of volunteering
        or getting involved, please email us at{' '}
        <a href='mailto:info@blandfordwelcome.group?subject=Enquiry from website'>
          info@blandfordwelcome.group
        </a>
      </p>
      <p>
        Please do also consider donation or sponsorship – for which please click
        on the{' '}
        <Link href='/donate'>
          Donate page
        </Link>{' '}
        link.
      </p>
      <p>
        For more information, visit the{' '}
        <Link href='/faq'>
          FAQ page
        </Link>
        .
      </p>
    </Layout>
  );
}
