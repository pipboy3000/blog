import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <Image
          src={'/profile.jpg'}
          alt="Masami Asai"
          width={48}
          height={48}
          className={styles.image}
        />
        <h1 className={styles.title}>
          <Link href="/">
            <a>count0</a>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Header;
