"use client";

import { useCallback, useState } from "react";

import MainContainer from "./components/MainContainer/MainContainer";
import HelloEveryone from "./components/helloEveryone/HelloEveryone";
import Welcome from "./components/Welcome/Welcome";
import Chunk from "@components/Chunk/Chunk";
import Container from "@components/Container/Container";
import Intro from "@components/Intro/Intro";
import Nav from "@components/Nav/Nav";

export default function Home() {
  const [access, setAccess] = useState(false);

  const handlePassword = useCallback(() => {
    setAccess(true);
  }, []);
  return (
    <MainContainer>
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
    </MainContainer>
  );
}
