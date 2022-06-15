import type { NextPage } from "next";
import Header from "../src/components/Header";
import { Container, Main, Button } from "../styles/maps";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";

const Maps: NextPage = () => {
  return (
    <Container>
      <Main>
        <div className="text">
          <h1 className="heading48">Maps</h1>
          <p className="body18">
            Each match of VALORANT takes place on a map. Maps feature a spawn area for each team, barriers that limit accessible areas
            during the Buy Phase, and objective sites where the spike is to be planted.
          </p>
          <p className="body18">Four maps were available at launch, and a six-month cycle is expected for the release of new maps.</p>
          <p className="body18">
            There are currently seven playable maps in VALORANT, with an additional one for practice and training new players.
          </p>
          <p className="body18">
            Each map in VALORANT has a real-life location, with its coordinates shown on the loading screen when entering a game on that
            map. The coordinates are listed as latitude and longitude using degrees, minutes, and seconds. The seconds values are shown as
            letters instead, with each letter representing a digit.
          </p>
        </div>
        <Button>
          <IconContext.Provider value={{ size: "2em" }}>
            <AiFillCaretDown />
          </IconContext.Provider>
          <a className="heading24">SELECT A MAP</a>
        </Button>
      </Main>
    </Container>
  );
};

export default Maps;
