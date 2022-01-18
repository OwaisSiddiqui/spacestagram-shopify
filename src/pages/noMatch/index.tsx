import React, { useEffect } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

const NoMatchPage = () => {
  useEffect(() => {
    document.title = "Page Not Found - Spacestagram";
  }, []);

  return (
    <S.NotAvailableSection>
      <S.NotAvailableMessage>
        Sorry, this page isn&apos;t available. The link you followed may be
        broken, or the page may have been removed. Go back to{" "}
        <Link to="/">Spacestagram</Link>.
      </S.NotAvailableMessage>
    </S.NotAvailableSection>
  );
};

export default NoMatchPage;
