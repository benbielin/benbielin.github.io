import { infoCards } from "@/app/data/data";

import Image from "next/image";

import Alert from "@components/Alert/Alert";
import Back from "@components/Back/back";
import Chunk from "@components/Chunk/Chunk";
import Container from "@components/Container/Container";
import NavBar from "@components/NavBar/NavBar";
import Info from "@components/Info/Info";

export default function Page() {
  return (
    <Container>
      <Back />
      <NavBar />
      <Chunk>
        <div style={{
          display: 'flex',
          margin: '0 auto',
          justifyContent: 'center',
          height: '128px',
          width: '128px',
          borderRadius: '50%',
        }}>
          <Image
            style={{
              objectFit: "cover",
              borderRadius: '50%',
            }}
            src="/images/me_1.jpg"
            alt="me_1"
            height={128}
            width={128}
          />
        </div>
        <h2 style={{
          textAlign: 'center',
          fontSize: '24px',
        }}>
          Ben Bielin
        </h2>
        {/* <Alert text={"test"}/> */}
        <Info infoCards={infoCards} title={"Education"}/>
      </Chunk>
    </Container>
  );
}
