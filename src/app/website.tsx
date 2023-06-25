"use client";

import { useCallback, useState } from "react";
import HelloEveryone from "@components/HelloEveryone/HelloEveryone";
import Welcome from "@components/Welcome/Welcome";
import Page from "@components/Page/Page";
import Intro from "@components/Intro/Intro";
import Nav from "@components/Nav/Nav";

const Website = () => {
  const [access, setAccess] = useState(false);

  const handlePassword = useCallback(() => {
    setAccess(true);
  }, []);

  return (
    <>
      <Page>
        <HelloEveryone access={access} />
        {/* <Image src="" alt="placeholder for picture" /> */}
        <Welcome access={access} handleSubmitPassword={handlePassword} />
      </Page>
      {access && (
        <>
          <Page>
            <Intro />
            <Nav />
          </Page>
        </>
      )}
    </>
  );
};

export default Website;
