import { useState } from 'react';
import type { NextPage } from 'next';
import { useTheme } from 'next-themes';
import { useWallet } from '@solana/wallet-adapter-react';
import Head from 'next/head';

import { Wrapper } from 'components/layout/Wrapper';
import { TitleSection } from 'components/ui/TitleSection';
import { DonationsTable } from 'components/ui/DonationsTable';
import { DonationForm } from 'components/ui/DonationForm';

const Home: NextPage = () => {
  const { publicKey } = useWallet();
  const { theme } = useTheme();
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Head>
        <title>Donation Trash Can</title>
        <meta name="description" content="Project to master anchor!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <TitleSection theme={theme} />
        <DonationForm
          inputValue={inputValue}
          setInputValue={(val) => {
            setInputValue(val);
          }}
          publicKey={publicKey}
        />
        <DonationsTable />
      </Wrapper>
    </>
  );
};

export default Home;
