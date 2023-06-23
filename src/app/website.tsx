"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HelloEveryone from "@components/helloEveryone/HelloEveryone";
import Welcome from "@components/welcome/Welcome";
import Page from "@components/page/Page";

const Website = () => {
  const [access, setAccess] = useState(false);

  const handlePassword = useCallback(() => {
    setAccess(true);
  }, []);

  return (
    <>
      <Page>
        <HelloEveryone />
        {/* <Image src="" alt="placeholder for picture" /> */}
        <Welcome access={access} handleSubmitPassword={handlePassword} />
      </Page>
      {access && (
        <>
          <Page>{"asdfasdf"}</Page>
        </>
      )}
    </>
  );
};

export default Website;
