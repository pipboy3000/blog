import React from 'react';
import styles from './Article.module.css';
import ProfileCard from '../components/ProfileCard';
import Link from 'next/link';

interface Props {
  title: string;
  published_at: string;
  content: string;
}

const Article: React.FC<Props> = ({ title, published_at, content }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.publishedAt}>公開日 {published_at}</div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className={styles.backToTop}>
        <Link href="/">
          <a>一覧へ戻る</a>
        </Link>
      </div>
      <div className={styles.author}>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Article;
