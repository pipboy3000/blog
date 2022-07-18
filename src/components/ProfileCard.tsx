import React from 'react';
import styles from './ProfileCard.module.css';
import Image from 'next/image';
import Link from 'next/link'

const ProfileCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          src={'/profile.jpg'}
          alt="Masami Asai"
          width={64}
          height={64}
          className={styles.image}
        />
        <div className={styles.name}>
          <div>count0</div>
          <div>Asai Masami</div>
        </div>
      </div>

      <div className={styles.description}>
        だいたいゲーム。だいたいsteamなフリーランスのプログラマー/ドローンパイロット
      </div>
      <div className={styles.links}>
        <Link href="/about">
          <a className={styles.link}>自己紹介</a>
        </Link>
        <a href="https://twitter.com/count0" className={styles.link}>
          Twitter
        </a>
        <a href="https://github.com/pipboy3000" className={styles.link}>
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
