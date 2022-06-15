/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, ModelAbout, Jett, Lines } from "./styles";

import Button1 from "../../buttons/button1";

function AboutModel() {
  return (
    <Container>
      <ModelAbout>
        <div className="text">
          <h1>ABOUT THE GAME</h1>
          <p>
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp
            gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to
            survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
          </p>
        </div>
      </ModelAbout>
      <Jett src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportraitv2.png" />
    </Container>
  );
}

export default AboutModel;
