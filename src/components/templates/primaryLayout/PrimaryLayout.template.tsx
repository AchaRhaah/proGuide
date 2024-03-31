import React from "react";
import { Header } from "../../molecules";
import { ProgressBar } from "../../atoms";
function PrimaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Header />
      <div className="h-[5.2rem]"></div>
      {children}
    </div>
  );
}

export default PrimaryLayout;
