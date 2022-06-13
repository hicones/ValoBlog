import React from "react";
import Image from "next/image";

// Imports
import * as S from "./styles";
import logo from "../../assets/icons/logo.png";

function Header() {
  return (
    <S.Container>
      <Image src={logo} alt="logo" />
      <ul>
        <li>
          <a href="" className="body18">
            About
          </a>
        </li>
        <li>
          <a href="" className="body18">
            Agents
          </a>
        </li>
        <li>
          <a href="" className="body18">
            Maps
          </a>
        </li>
        <li>
          <a href="" className="body18">
            Guns
          </a>
        </li>
      </ul>
    </S.Container>
  );
}

export default Header;
