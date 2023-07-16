import Alert from "@components/Alert/Alert";
import Back from "@components/Back/back";
import Chunk from "@components/Chunk/Chunk";
import Container from "@components/Container/Container";
import Meme from "@components/Meme/meme";
import NavBar from "@components/NavBar/NavBar";

import { memeListDailySchedule } from "../data/data";

export default function Page() {
  return (
    <Container>
      <Back />
      <NavBar />
      <Alert text="Disclaimer: This page is a joke and is not meant to be taken seriously." />
      <Chunk>
        <Meme type="list" title="My daily schedule:" list={memeListDailySchedule}/>
        <Meme type="image" title="2nd meme"/>
      </Chunk>
    </Container>
  );
}
