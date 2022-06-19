/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, MapsModel, TitleStyled } from "./styles";

import Button2 from "../../buttons/button2";
import background from "../../../assets/home/backgroundMaps.png";

function ModelMaps() {
  return (
    <Container style={{ backgroundImage: `url(${background.src})` }}>
      <MapsModel>
        <div className="text">
          <TitleStyled>
            <h2>
              MAPS
              <b>
                <span>MAPS</span>
              </b>
            </h2>
          </TitleStyled>
          <p>
            FIGHT AROUND THE WORLD Each map is a playground to showcase your creative thinking. Purpose-built for team strategies,
            spectacular plays, and clutch moments. Make the play others will imitate for years to come.
          </p>
        </div>

        <Button2 title="Maps" href="/maps" />
      </MapsModel>
    </Container>
  );
}

export default ModelMaps;
