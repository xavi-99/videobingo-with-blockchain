import React from "react";
import Header from "./../Header/Header"

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

const Footer = () => {
  return <footer>&copy; by Xavi Navarro</footer>;
};


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        <AsideLeft />
        <div className='w-10 bg-red-400'>asd</div>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
