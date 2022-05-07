import type { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
    <div className={styles.container}>
      <Head>
        <title>count0.org</title>
        <CommonMeta />
        <meta name="description" content="" />
      </Head>
      <MainLayout>
        <main className={styles.main}>
          {allPosts.map((post, index) => (
            <PostItem post={post} key={index} />
          ))}
        </main>
      </MainLayout>
    </div>
  );
};

export default Home;
