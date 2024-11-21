import React from "react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>{/* Add your header content here */}</header>
      <main>{children}</main>
      <footer>{/* Add your footer content here */}</footer>
    </div>
  );
};

export default Layout;
