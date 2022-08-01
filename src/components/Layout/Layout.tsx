import React, { FC } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const AsideLeft = () => {
  return (
    <aside>
      <h3>This is an aside component</h3>
    </aside>
  );
};

const Header = () => {
  return <header>This is Hedaer component</header>;
};

const Footer = () => {
  return <footer>&copy; by Xavi Navarro</footer>;
};

const Nav = () => {
  return  <nav></nav>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <AsideLeft />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
