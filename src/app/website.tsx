"use client";

import { useCallback, useState } from "react";
import HelloEveryone from "@components/HelloEveryone/HelloEveryone";
import Welcome from "@components/Welcome/Welcome";
import Chunk from "@components/Chunk/Chunk";
import Container from "@components/Container/Container";
import Intro from "@components/Intro/Intro";
import Nav from "@components/Nav/Nav";

const Website = () => {
  const [access, setAccess] = useState(false);

  const handlePassword = useCallback(() => {
    setAccess(true);
  }, []);

  return (
    <Container>
      <Chunk>
        <HelloEveryone />
        {/* <Image src="" alt="placeholder for picture" /> */}
        <Welcome access={access} handleSubmitPassword={handlePassword} />
      </Chunk>
      {access && (
        <Chunk>
          <Intro />
          <Nav />
        </Chunk>
      )}
    </Container>
  );
};

export default Website;
