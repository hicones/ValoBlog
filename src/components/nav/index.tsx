import React from "react";
import styled from "styled-components";
import Header from "../Header";

import { NavbarStyled } from "./styles";

type props = {
  navToggle: boolean;
};

function NavBar({ navToggle }: props) {
  return (
    <NavbarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Header />
    </NavbarStyled>
  );
}

export default NavBar;
