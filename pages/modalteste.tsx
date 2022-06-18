/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import { Container } from "../styles/teste";
import { motion } from "framer-motion";
import { useState } from "react";

const About: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleModal = () => {
    setIsOpen(!isOpen);
  };

  const CloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <button onClick={ToggleModal}>Abrir Modal</button>

      {isOpen && (
        <motion.div animate={{ x: 100 }} transition={{ ease: "easeOut", duration: 2 }}>
          <h1>OPoRRA CARALHO</h1>
        </motion.div>
      )}
    </Container>
  );
};

export default About;
