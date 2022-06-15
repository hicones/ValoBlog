import type { NextPage } from "next";
import { Container, Main } from "../styles/guns";
import { useContext } from "react";
import { DataContext } from "../src/context/dataContext";
import GunsCard from "../src/components/gunsComponent";

const Guns: NextPage = () => {
  const { guns } = useContext(DataContext);

  return (
    <Container>
      <Main>
        <div className="text">
          <h1 className="heading48">SELECT AN WEAPON !</h1>
        </div>

        <div className="gunsSection">
          {guns.map((gun) => (
            <GunsCard
              key={gun.uuid}
              uuid={gun.uuid}
              description={gun.description}
              displayName={gun.displayName}
              category={gun.category}
              displayIcon={gun.displayIcon}
              killStreamIcon={gun.killStreamIcon}
              weaponStats={gun.weaponStats}
              shopData={gun.shopData}
            />
          ))}
        </div>
      </Main>
    </Container>
  );
};

export default Guns;
