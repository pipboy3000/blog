import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Link href="/">
          <a className={styles.title}>
            <Logo />
            count0
          </a>
        </Link>
      </h1>
      <div>
        <Link href="/about">
          <a>自己紹介</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
