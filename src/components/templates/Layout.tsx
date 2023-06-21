import React, { ReactNode } from "react";
import Navbar from "../organisms/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </main>
  );
};

export default Layout;
