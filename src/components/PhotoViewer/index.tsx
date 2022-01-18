import React, { useContext } from "react";
import * as S from "./styles";
import { PhotoViewerContext } from "../../providers/PhotoViewerProvider";
import { Variants } from "framer-motion";

const variants: Variants = {
  hide: {
    transform: "scale(0.9)",
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
    backdropFilter: "blur(0px)",
  },
  show: {
    transform: "scale(1)",
    opacity: 1,
    display: "flex",
    backdropFilter: "blur(10px)",
  },
};

const PhotoViewer = () => {
  const { setPhotoViewerData, photoViewerData } =
    useContext(PhotoViewerContext);

  return (
    <S.Container
      initial={false}
      onClick={() =>
        setPhotoViewerData({ show: false, url: photoViewerData.url })
      }
      $showViewer={photoViewerData.show}
      variants={variants}
      animate={photoViewerData.show ? "show" : "hide"}
      transition={{ type: "tween", duration: 0.1 }}
    >
      <S.ImageContainer>
        <S.Image src={photoViewerData.url} isZoomedIn={photoViewerData.show} />
      </S.ImageContainer>
    </S.Container>
  );
};

export default PhotoViewer;
