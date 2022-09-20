import type { NextPage } from "next";
import { Container, Main } from "../../styles/agents";
import AgentsCard from "../../src/components/agentsComponent";
import { useContext } from "react";
import { DataContext } from "../../src/context/dataContext";

const Agents: NextPage = () => {
  const { agents } = useContext(DataContext);

  return (
    <Container>
      <Main>
        <div className="text">
          <h1 className="heading48">SELECT AN AGENT !</h1>
        </div>
        <div className="agentSection">
          {agents.map((card) => (
            <AgentsCard
              key={card.uuid}
              uuid={card.uuid}
              displayName={card.displayName}
              description={card.description}
              displayIcon={card.displayIcon}
              displayIconSmall={card.displayIconSmall}
              bustPortrait={card.bustPortrait}
              fullPortrait={card.fullPortrait}
              fullPortraitV2={card.fullPortrait}
              killfeedPortrait={card.killfeedPortrait}
              background={card.background}
              role={card.role}
              abilities={card.abilities}
              voiceLine={card.voiceLine}
            />
          ))}
        </div>
      </Main>
    </Container>
  );
};

export default Agents;
