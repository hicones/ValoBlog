import React from "react";
import Image from "next/image";

// Imports
import * as S from "./styles";
import logo from "../../assets/icons/logo.png";
import { NavLink } from "../NavLink";
import censure from "../../assets/footer/censure.png";
import logo1 from "../../assets/footer/logo1.png";
import logo2 from "../../assets/footer/logo2.png";
import logo3 from "../../assets/footer/logo3.png";
import FooterBg from "../../assets/footer/backgroundFooter.png";

//Icons
import { IconContext } from "react-icons";
import { FaTwitter, FaInstagram, FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <S.Container>
      <S.MainFooter>
        <S.Social>
          <div className="logos">
            <div className="logo1" style={{ marginBottom: "25px" }}>
              <Image src={logo1} alt="" />
            </div>
            <div className="logo2" style={{ marginBottom: "50px" }}>
              <Image src={logo2} alt="" />
            </div>
            <div className="logo3" style={{ marginBottom: "25px" }}>
              <Image src={logo3} alt="" />
            </div>
            <h2 className="download">
              <a href="https://playvalorant.com/" target="blank">
                DOWNLOAD GAME CLIENT
              </a>
            </h2>
            <ul className="Icons">
              <IconContext.Provider value={{ size: "2em", className: "socialIcons", color: "var(--primary)" }}>
                <a href="https://twitter.com/PlayVALORANT" target="blank">
                  <FaTwitter />
                </a>
                <a href="https://discord.com/invite/valorant" target="blank">
                  <FaDiscord />
                </a>
                <a href="https://www.facebook.com/PlayVALORANT/" target="blank">
                  <FaFacebook />
                </a>
                <a href="https://www.youtube.com/c/PlayVALORANT" target="blank">
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/playvalorantofficial/" target="blank">
                  <FaInstagram />
                </a>
              </IconContext.Provider>
            </ul>
          </div>
          <div className="censure">
            <Image src={censure} alt="" />
          </div>
          <ul className="Termos">
            <li>
              <a href="#" className="body16">
                Privacy notice
              </a>
            </li>
            <li>
              <a href="#" className="body16">
                Term of service
              </a>
            </li>
            <li>
              <a href="#" className="body16">
                Cookie prefrence
              </a>
            </li>
          </ul>
        </S.Social>
      </S.MainFooter>
      <S.FooterBg>
        <Image src={FooterBg} alt="" className="footerBg" />
      </S.FooterBg>
      <S.Copy>
        <p>
          © 2021 Riot Games, Inc. Riot Games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks
          of Riot Games, Inc.
        </p>
      </S.Copy>
    </S.Container>
  );
}

export default Footer;
