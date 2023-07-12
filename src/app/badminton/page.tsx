import Back from "@components/Back/back";
import Chunk from "@components/Chunk/Chunk";
import WorkInProgress from "@components/WorkInProgress/WorkInProgress";
import Container from "@components/Container/Container";

export default function Page() {
  return (
    <Container>
      <Back />
      <Chunk>
        <WorkInProgress />
      </Chunk>
    </Container>
  );
}
