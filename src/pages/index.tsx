import type { InferGetStaticPropsType, NextPage } from 'next';
import { getAllPosts } from '../lib/api';
import { generateIndex } from '../lib/algolia';
import PostItem from '../components/PostItem';
import PageLayout from '../components/PageLayout';

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
  const posts = allPosts.map((post, index) => {
    return <PostItem post={post} key={index} />;
  });

  return (
    <PageLayout>
      <>
        {posts}
      </>
    </PageLayout>
  );
};

export default Home;
