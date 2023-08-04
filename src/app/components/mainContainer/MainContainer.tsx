"use client";

import { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main
      style={{
        display: "flex",
      }}
    >
      {children}
    </main>
  );
};

export default MainContainer;
