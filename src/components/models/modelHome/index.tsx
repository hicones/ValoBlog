/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, ModelHome, Omen } from "./styles";

import background from "../../../assets/home/background1.png";
import Button1 from "../../buttons/button1";

function Home() {
  return (
    <Container style={{ backgroundImage: `url(${background.src})` }}>
      <ModelHome>
        <div className="text">
          <span className="body16">A 5v5 CHARACTER -BASED TACTICAL SHOOTER</span>
          <h1>VALORANT</h1>
          <p>
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp
            gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to
            survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
          </p>
          <h2>WHY DON'T YOU TRY IT NOW ?</h2>
        </div>
        <a href="https://playvalorant.com/" target="blank">
          <Button1 title="Download" />
        </a>
      </ModelHome>
      <Omen src="https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png" />
    </Container>
  );
}

export default Home;
