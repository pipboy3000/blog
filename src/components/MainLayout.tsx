import React from 'react';
import styles from './MainLayout.module.css';
import Header from './Header';
import Footer from './Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
