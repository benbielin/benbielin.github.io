import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import HelloEveryone from "@components/helloEveryone/HelloEveryone";
import Welcome from "@components/welcome/Welcome";

const Website = () => {
  return (
    <>
      <HelloEveryone />
      <Image src="" alt="placeholder for picture" />
      <Welcome />
    </>
  );
};

export default Website;