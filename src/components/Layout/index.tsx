import React from "react";

//interfaces
type props = {
  children: React.ReactNode;
};

//Componets
import { Container } from "./styles";
import Header from "../Header";
import Footer from "../footer";

function Layout({ children }: props) {
  return (
    <Container>
      <Header />
      <section>{children}</section>
      <Footer />
    </Container>
  );
}

export { Layout };
