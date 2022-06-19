/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, ModelHome } from "./styles";

import background from "../../../assets/home/background1.png";
import Button1 from "../../buttons/button1";

function Home() {
  return (
    <Container style={{ backgroundImage: `url("https://wallpaper.dog/large/20457310.jpg")` }}>
      <ModelHome>
        <div className="text">
          <span className="body16">A 5v5 CHARACTER -BASED TACTICAL SHOOTER</span>
          <h1>VALORANT</h1>
          <p>
            Valorant (stylized as VALORANT) is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft
            Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on
            April 7, 2020, followed by an official release on June 2, 2020. The development of the game started in 2014. Valorant takes
            inspiration from the Counter-Strike series of tactical shooters, borrowing several mechanics such as the buy menu, spray
            patterns, and inaccuracy while moving.
          </p>
          <h2>WHY DON'T YOU TRY IT NOW ?</h2>
        </div>
        <a href="https://playvalorant.com/" target="blank">
          <Button1 title="Download" />
        </a>
      </ModelHome>
    </Container>
  );
}

export default Home;
