import React from "react";
import { Navbar } from "../Components/Navbar";
import { navItems } from "../Components/Navbar";
import { Socials } from "../Components/Socials";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-black dark:text-white">
        <Navbar items={navItems} />
        <div className="flex md:p-6 p-6 sm:p-6">
          <Socials ClassName="float-right flex-wrap  mr-12 mt-4" />
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};
