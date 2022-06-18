import React, { memo, useState } from "react";

import * as S from "./styles";
import Image from "next/image";

import { IMaps } from "../../interfaces/maps.interface";
import { DataContext } from "../../context/dataContext";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MapsCard({ splash, displayName }: IMaps) {
  const router = useRouter();

  function handleMove() {
    router.push(`/maps/${displayName}`);
  }

  return (
    <S.Container onClick={handleMove}>
      <span className="heading24">{displayName}</span>
      <div>
        <S.Thumbnail src={splash} />
      </div>
    </S.Container>
  );
}

export default memo(MapsCard);
