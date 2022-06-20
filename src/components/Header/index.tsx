import React from "react";
import Image from "next/image";

// Imports
import * as S from "./styles";
import logo from "../../assets/icons/logo.png";
import { NavLink } from "../NavLink";

function Header() {
  return (
    <S.Container>
      <a href="" className="Logo">
        <NavLink href="/">
          <Image src={logo} alt="logo" />
        </NavLink>
      </a>
      <nav>
        <ul>
          <li>
            <NavLink href="/">
              <a href="">About</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/agents">
              <a href="">Agents</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/maps">
              <a href="">Maps</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/guns">
              <a href="">Guns</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/news">
              <a href="">News</a>
            </NavLink>
          </li>
        </ul>
      </nav>
    </S.Container>
  );
}

export default Header;
