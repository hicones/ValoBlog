/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Header from "../src/components/Header";
import { Container } from "../styles/home";
import Home from "../src/components/models/modelHome";
import AboutModel from "../src/components/models/modelAbout";

const About: NextPage = () => {
  return (
    <Container>
      <Home />
      <AboutModel />
    </Container>
  );
};

export default About;
