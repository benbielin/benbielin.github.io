"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HelloEveryone from "@components/HelloEveryone/HelloEveryone";
import Welcome from "@components/Welcome/Welcome";
import Page from "@components/Page/Page";
import Intro from "@components/Intro/Intro";
import Sidebar from "@components/Sidebar/Sidebar";

const Website = () => {
  const [access, setAccess] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handlePassword = useCallback(() => {
    setAccess(true);
  }, []);

  const handleScroll = useCallback((e: any) => {
    const scrollPos = window.scrollY;
    console.log(scrollPos);
    if (scrollPos > 0) {
      setShowSidebar(true);
    }
  }, []);

  window.addEventListener('scroll', handleScroll)

  return (
    <>
      <Page>
        <HelloEveryone />
        {/* <Image src="" alt="placeholder for picture" /> */}
        <Welcome access={access} handleSubmitPassword={handlePassword} />
      </Page>
      {access && (
        <>
          <Page>
            <Intro />
          </Page>
          {showSidebar && <Sidebar />}
        </>
      )}
    </>
  );
};

export default Website;
