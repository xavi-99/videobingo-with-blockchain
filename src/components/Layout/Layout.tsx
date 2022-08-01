import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <div>
      <header></header>
      <main>
        {children}
      </main>
      <footer> &copy; by Xavi Navarro</footer>
    </div>
  );
};

export default Layout;
