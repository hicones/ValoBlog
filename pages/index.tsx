/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { Container } from "../styles/home";
import Home from "../src/components/models/modelHome";
import AboutModel from "../src/components/models/modelAbout";
import AgentsModel from "../src/components/models/modelAgents";
import ModelMaps from "../src/components/models/modelMaps";
import GunsModel from "../src/components/models/modelGuns";

const About: NextPage = () => {
  return (
    <Container>
      <Home />
      <AboutModel />
      <AgentsModel />
      <ModelMaps />
      <GunsModel />
    </Container>
  );
};

export default About;
