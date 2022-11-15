import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>
        <Link href="/" className={styles.title}>
          <Logo />
          count0
        </Link>
      </h1>
      <div>
        <Link href="/about">
          自己紹介
        </Link>
      </div>
    </div>
  );
};

export default Header;
