import React from "react";
import { Navbar } from "../Components/Navbar";
import { navItems } from "../Components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <>
    <SpeedInsights/>
    <div className="bg-slate-100 dark:bg-black dark:text-white">
      <Navbar items={navItems} />
      <main>
        {children}
      </main>
    </div>
    </>
  );
};
