/* eslint-disable react/no-unescaped-entities */
import Header from "../../Header";
import { Container, ModelAgent, Phoenix, TitleStyled } from "./styles";

import Button1 from "../../buttons/button1";
import Button2 from "../../buttons/button2";

function AgentsModel() {
  return (
    <Container>
      <ModelAgent>
        <TitleStyled>
          <h2>
            AGENTS
            <b>
              <span>AGENTS</span>
            </b>
          </h2>
        </TitleStyled>
        <div className="DivisorContainer">
          <div className="text">
            <p>
              There are a large variety of playable agents available in the game. Agents are divided into 4 roles: Duelists, Sentinels,
              Initiators, and Controllers. Each agent has a different role which indicates how the agent is usually played.
            </p>

            <p>
              Duelists specialize in attacking and entering a bomb site for the team. Riot's official definition for duelists is
              "self-sufficient fraggers."[25] Duelists mainly create space for their team while entering onto a site, giving their teammates
              information, and making entering a site easier. Their abilities tend to consist of flashes which blind enemies, and
              movement-based abilities that allow for them to cover large distances faster than other agents. This type of ability kit
              allows for duelists to shine best when they are able to catch players off guard and get impact frags. Initiators plan out the
              offensive pushes. Initiators specialize in breaking through defensive enemy positions. Initiators' abilities can consist of
              flashes but also abilities that can reveal the location of enemies. This information allows for attackers to know where
              enemies are and make taking a site easier. Controllers specialize in "slicing up dangerous territory to set their team up for
              success." They use their abilities to create coverage or clear out areas of space with crowd control. To help their team enter
              into enemy territory, their abilities can consist of smokes, slows, stuns, and flashes. With their smokes, controllers can
              control sightlines on the map, making it safer to move through the map without getting seen. Sentinels are the defensive line,
              which specializes in locking down sites and protecting teammates from enemies. Their abilities mainly consist of static
              'objects' that are obstacles to the enemies. These objects can give the team valuable information and/or deal damage. On
              attack, sentinels can use their abilities to cut off certain parts of the map or set up 'objects' that can ensure the enemy
              cannot flank without being noticed.
            </p>
            <Button2 title="Agents" href="/agents" />
          </div>
          <div className="Images">
            <Phoenix src="https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportraitv2.png" />
            <h3>CHECK ALL AGENTS</h3>
          </div>
        </div>
      </ModelAgent>
    </Container>
  );
}

export default AgentsModel;
