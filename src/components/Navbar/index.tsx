import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Header>
      <S.Title>
        <Link to="/">Spacestagram</Link>
      </S.Title>
      <S.SubTitle>
        Brought to you by NASA&apos;s Astronomy Photo of the Day (APOD) API
      </S.SubTitle>
    </S.Header>
  );
};

export default Navbar;
