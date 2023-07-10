"use client";

import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        minHeight: "90vh",
        width: "70vw",
        border: "6px solid #404040",
        borderRadius: "12px",
        padding: "50px auto",
        margin: "20px auto",
        backgroundColor: "#181818",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
