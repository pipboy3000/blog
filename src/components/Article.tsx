import React from 'react';
import styles from './Article.module.css';
import ProfileCard from '../components/ProfileCard';
import Link from 'next/link';
import Alert from '../components/Alert';

interface Props {
  title: string;
  published_at: string;
  content: string;
  alert?: string;
}

const Article: React.FC<Props> = ({ title, published_at, content, alert }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.publishedAt}>公開日 {published_at}</div>
      
      {alert && <div className={styles.alert}><Alert>{alert}</Alert></div>}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
      <div className={styles.backToTop}>
        <Link href="/">
          一覧へ戻る
        </Link>
      </div>
      <div className={styles.author}>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Article;
