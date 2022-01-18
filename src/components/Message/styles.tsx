import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(54, 54, 54, 0.85);
  padding: 0rem 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
`;

export const Message = styled.span`
  font-family: Quicksand, sans-serif;
  color: white;
  font-size: 0.9rem;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  display: flex;
  cursor: pointer;
`;
