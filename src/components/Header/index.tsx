import React from "react";
import Image from "next/image";

// Imports
import * as S from "./styles";
import logo from "../../assets/icons/logo.png";
import { NavLink } from "../NavLink";

function Header() {
  return (
    <S.Container>
      <a href="">
        <NavLink href="/">
          <Image src={logo} alt="logo" />
        </NavLink>
      </a>

      <ul>
        <li>
          <NavLink href="/">
            <a href="" className="body18">
              About
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/agents">
            <a href="" className="body18">
              Agents
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/maps">
            <a href="" className="body18">
              Maps
            </a>
          </NavLink>
        </li>
        <li>
          <NavLink href="/guns">
            <a href="" className="body18">
              Guns
            </a>
          </NavLink>
        </li>
      </ul>
    </S.Container>
  );
}

export default Header;
