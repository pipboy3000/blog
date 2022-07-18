import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import mdToHtml from '../../../../lib/mdToHtml';
import { getAllPosts, getPostByPostPath } from '../../../../lib/api';
import Article from '../../../../components/Article';
import PageLayout from '../../../../components/PageLayout';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const posts = getAllPosts();
  return {
    paths: posts.map((post) => {
      const [year, month, day] = post.date.split('-');
      return {
        params: {
          year: year,
          month: month,
          day: day,
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const postPath = [params?.year, params?.month, params?.day, params?.slug]
    .join('-')
    .concat('.md');
  const post = getPostByPostPath(postPath);
  const content = await mdToHtml(post.content);

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.uri) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PageLayout title={post?.title}>
      <Article
        title={post.title}
        published_at={post.date}
        content={post.content}
      ></Article>
    </PageLayout>
  );
};

export default Post;
