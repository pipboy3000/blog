import React from 'react';
import Head from 'next/head';
import MainLayout from './MainLayout';
import CommonMeta from './CommonMeta';

interface Props {
  title?: string;
  children: JSX.Element;
}

const PageLayout: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - count0.org` : 'count0.org'}</title>
        <CommonMeta />
      </Head>
      <MainLayout>{children}</MainLayout>
    </>
  );
};

export default PageLayout;
