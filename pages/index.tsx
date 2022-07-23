// import type { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Facebook-Practice</title>
      </Head>
      {/* Header */}
      <Header />
      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
      </main>
    </div>
  );
}

//인덱스 페이지 열리기 전에 로그인 정보를 확인해서 열어주기 위해서 SSR 적용
export const getServerSideProps = async (context) => {
  //get user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
