import type { NextPage } from "next";
import Header from "../src/components/Header";
import { Container, Main } from "../styles/guns";

const Guns: NextPage = () => {
  return (
    <Container>
      <Main>
        <div className="text">
          <h1 className="heading48">Guns</h1>
        </div>
      </Main>
    </Container>
  );
};

export default Guns;
