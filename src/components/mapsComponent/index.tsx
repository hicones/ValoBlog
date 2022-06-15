import React, { memo, useState } from "react";

import * as S from "./styles";
import Image from "next/image";

import { IMaps } from "../../interfaces/maps.interface";
import { DataContext } from "../../context/dataContext";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

function MapsCard({ splash, displayName, callouts, description, displayIcon }: IMaps) {
  const [toggle, setToggle] = useState(false);

  return (
    <S.Container onClick={() => setToggle(!toggle)}>
      <span className="heading24">{displayName}</span>
      <div>
        <S.Thumbnail src={splash} />
      </div>

      {/*   <div className="mainModal">
        <h2 className="heading40">{displayName}</h2>
        <S.Splash src={splash} alt="" />
        <p className="heading20">{description}</p>
        <S.Splash src={displayIcon} alt="" />
      </div>
      <h2 className="heading40">CALLOUTS</h2>
      <div className="callouts">
        {callouts.map((callout) => (
          <p key={callout.regionName}>
            <VscDebugBreakpointLog />
            <span className="heading20">{callout.regionName}</span>
          </p>
        ))}
      </div> */}
    </S.Container>
  );
}

export default memo(MapsCard);
