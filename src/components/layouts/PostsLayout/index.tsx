import React from "react";
import * as S from "./styles";

interface PostsLayoutProps {
  children: React.ReactNode;
}

const PostsLayout = ({ children }: PostsLayoutProps) => {
  return <S.Layout>{children}</S.Layout>;
};

export default PostsLayout;
