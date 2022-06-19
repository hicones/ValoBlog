import React, { useState } from "react";
import { NavLink } from "../NavLink";
import Image from "next/image";

//interfaces
type props = {
  children: React.ReactNode;
};

//Componets
import { Container } from "./styles";
import Header from "../Header";
import Footer from "../footer";
import logo from "../../assets/icons/logo.png";
import NavBar from "../nav";

function Layout({ children }: props) {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <Container>
      <NavBar navToggle={navToggle} />
      <a href="" className="LogoMobile">
        <NavLink href="/">
          <Image src={logo} alt="logo" />
        </NavLink>
      </a>
      <div className={navToggle ? "wrapper-menu open" : "wrapper-menu"} onClick={() => setNavToggle(!navToggle)}>
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>

      <section>{children}</section>
      <Footer />
    </Container>
  );
}

export { Layout };
