import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
`;

interface ImageProps {
  isZoomedIn: boolean;
}

export const Image = styled.img<ImageProps>`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  cursor: ${({ isZoomedIn }) => (isZoomedIn ? "zoom-out" : "zoom-in")};
  display: flex;
  align-self: center;
  justify-self: center;
  z-index: 10;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  display: flex;
  cursor: pointer;
  color: black;
  padding: 1rem 1rem 0 0;
`;
