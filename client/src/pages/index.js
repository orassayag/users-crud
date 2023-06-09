import Head from 'next/head';
import Users from '../components/pages/Users/Users';

export default function Home() {
  return (
    <>
      <Head>
        <title>Users Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Users />
    </>
  );
}
