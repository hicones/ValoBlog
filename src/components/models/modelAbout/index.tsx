/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, ModelAbout, Jett, TitleStyled } from "./styles";

import Button1 from "../../buttons/button1";

function AboutModel() {
  return (
    <Container>
      <ModelAbout>
        <div className="text">
          <TitleStyled>
            <h2>
              ABOUT THE GAME
              <b>
                <span>ABOUT THE GAME</span>
              </b>
            </h2>
          </TitleStyled>
          <p>
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp
            gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to
            survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
          </p>
        </div>
        <ul>
          <li>
            <p>Players</p>
            <span>5</span>
          </li>
          <li>
            <p>Rounds</p>
            <span>13</span>
          </li>
          <li>
            <p>Agents</p>
            <span>19</span>
          </li>
          <li>
            <p>Maps</p>
            <span>4</span>
          </li>
        </ul>
      </ModelAbout>

      <div className="Images">
        <Jett src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportraitv2.png" />
        <iframe
          width="720"
          height="480"
          src="https://www.youtube.com/embed/lWr6dhTcu-E?autoplay=1&mute=1"
          title="Valorant - Official Cinematic Launch Trailer"
        />
      </div>
    </Container>
  );
}

export default AboutModel;
