import MainContainer from "@/app/components/MainContainer/MainContainer";
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
