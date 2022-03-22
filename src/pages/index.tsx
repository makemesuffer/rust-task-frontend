import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import Head from 'next/head';

import { Wrapper } from 'components/layout/Wrapper';
import { TitleSection } from 'components/ui/TitleSection';
import { DonationsTable } from 'components/ui/DonationsTable';
import { DonationForm } from 'components/ui/DonationForm';

const Home: NextPage = () => {
  const { theme } = useTheme();
  return (
    <>
      <Head>
        <title>Donation Trash Can</title>
        <meta name="description" content="Project to master anchor!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <TitleSection theme={theme} />
        <DonationForm />
        <DonationsTable />
      </Wrapper>
    </>
  );
};

export default Home;
