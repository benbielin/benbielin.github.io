'use client'

import { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default MainContainer;
