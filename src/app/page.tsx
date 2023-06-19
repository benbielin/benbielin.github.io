import MainContainer from "@components/mainContainer/MainContainer";
import Website from "@/app/website";


function getWebsite() {
  return <Website/>;
}

const website = getWebsite();

export default function Home() {
  return (
    <MainContainer>
      {website}
    </MainContainer>
  );
}
