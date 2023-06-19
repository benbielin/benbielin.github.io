import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import HelloEveryone from "@components/helloEveryone/HelloEveryone";

const Website = () => {
  return (
    <div>
      <HelloEveryone />
      <Image src="" alt="placeholder for picture" />
    </div>
  )
};

export default Website;