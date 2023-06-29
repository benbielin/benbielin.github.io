"use client";

import { useCallback, useState } from "react";
import HelloEveryone from "@components/HelloEveryone/HelloEveryone";
import Welcome from "@components/Welcome/Welcome";
import Chunk from "@/app/components/Chunk/Chunk";
import Intro from "@components/Intro/Intro";
import Nav from "@components/Nav/Nav";

const Website = () => {
  const [access, setAccess] = useState(false);

  const handlePassword = useCallback(() => {
    setAccess(true);
  }, []);

  return (
    <>
      <Chunk>
        <HelloEveryone access={access} />
        {/* <Image src="" alt="placeholder for picture" /> */}
        <Welcome access={access} handleSubmitPassword={handlePassword} />
      </Chunk>
      {access && (
        <>
          <Chunk>
            <Intro />
            <Nav />
          </Chunk>
        </>
      )}
    </>
  );
};

export default Website;
