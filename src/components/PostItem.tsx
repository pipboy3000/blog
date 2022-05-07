import React from 'react';
import styles from './PostItem.module.css';
import { Post } from '../lib/api';
import Link from 'next/link';

interface Props {
  post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.container}>
      <Link href={post.uri}>
        <a className={styles.title}>{post.title}</a>
      </Link>
      <div className={styles.date}>{post.date}</div>
    </div>
  );
};

export default PostItem;
