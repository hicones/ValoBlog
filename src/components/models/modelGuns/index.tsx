/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, ModelGuns, TitleStyled } from "./styles";

import background from "../../../assets/home/backgroundGuns.png";
import Button2 from "../../buttons/button2";

function GunsModel() {
  return (
    <Container style={{ backgroundImage: `url(${background.src})` }}>
      <ModelGuns>
        <div className="text">
          <TitleStyled>
            <h2>
              GUNS
              <b>
                <span>GUNS</span>
              </b>
            </h2>
          </TitleStyled>
          <p>
            The Valorant weapons arsenal is an intricately, painstakingly crafted repository of destructive potential. And perhaps more so
            than in most other FPS games, you really need to know what you're doing with them. Our Valorant weapons guide will offer up
            detailed stats on each of the 17 different weapons you can purchase between rounds, along with clear recoil patterns so you can
            start to tame these powerful beasts and become a true master of weapons in Valorant.
          </p>
          <Button2 title="Guns" href="/guns" />
          <p>
            With such a low time-to-kill (TTK) in Valorant, some of the stats that you'd normally put into a weapons guide (TTK and DPS) are
            less important. Instead, one trait stands front and centre: a gun's potential to kill an enemy with a single shot. Valorant
            weapons have three different sets of damage stats based on whether you hit in the head, body, or limb. And the headshot
            multiplier is huge, so you should always be aiming for the head in Valorant so you can maximise your chances of getting a
            one-shot-kill.
          </p>
        </div>
      </ModelGuns>
      <h3>CHECK ALL GUNS</h3>
    </Container>
  );
}

export default GunsModel;
