import removeMd from 'remove-markdown';
import { getAllPosts } from './api';
import algoliasearch from 'algoliasearch';

export const generateIndex = async (): Promise<void> => {
  const posts = getAllPosts();
  const objects = posts.map((post) => {
    const plainContent = removeMd(post.content);
    const objectID = `${post.date}-${post.slug}`;
    const url = `${process.env.HOST}${post.uri}.html`;
    return {
      objectID: objectID,
      url: url,
      title: post.title,
      description: plainContent.slice(0, 60),
      content: plainContent,
    };
  });

  const APP_KEY = process.env.NEXT_PUBLIC_ALGOLIA_APP_KEY;
  const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
  const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

  if (APP_KEY && ADMIN_KEY && INDEX_NAME) {
    try {
      const client = algoliasearch(APP_KEY, ADMIN_KEY);
      const index = client.initIndex(INDEX_NAME);
      await index.saveObjects(objects, {
        autoGenerateObjectIDIfNotExist: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
};
