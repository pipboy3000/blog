import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { getAllPosts } from '../lib/api';
import { generateIndex } from '../lib/algolia';
import CommonMeta from '../components/CommonMeta';
import Header from '../components/Header';
import PostItem from '../components/PostItem';
import MainLayout from '../components/MainLayout';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    await generateIndex();
  }

  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>count0.org</title>
        <CommonMeta />
        <meta name="description" content="" />
      </Head>
      <MainLayout>
        {allPosts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </MainLayout>
    </>
  );
};

export default Home;
