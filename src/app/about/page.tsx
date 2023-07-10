"use client";

import {
  infoCardsEducation,
  infoCardsExperience,
  infoCardsProjects,
} from "@/app/data/data";

import { useState } from "react";

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
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "center",
            height: "128px",
            width: "128px",
            borderRadius: "50%",

          }}
        >
          <Image
            style={{
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src="/images/me_1.jpg"
            alt="me_1"
            height={128}
            width={128}
          />
        </div>
        <h2
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "12px",
          }}
        >
          Ben Bielin
        </h2>
        <div
          style={{
            margin: '2px 36px 0px 36px',
            textAlign: "center",
          }}
        >
          {"Hello everyone! My name is Ben, and I'm an undergraduate student at UC Berkeley studying computer science, data science, and applied mathematics! I want to learn a wide range of subjects, but my main interests as of now are statistics, mathematics, full stack development, and data science. I also enjoy teaching and am always interested in ways to be a better instructor. My hobbies are badminton, cooking, and playing the ukulele."}
        </div>
        {/* <Alert text={"test"}/> */}
        <Info props={infoCardsEducation} />
        <Info props={infoCardsExperience} />
        <Info props={infoCardsProjects} />
      </Chunk>
    </Container>
  );
}
