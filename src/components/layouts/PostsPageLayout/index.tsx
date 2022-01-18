import React from "react";
import * as S from "./styles";

interface PostsLayout {
  children: React.ReactNode;
}

const PostsLayout = ({ children }: PostsLayout) => {
  return <S.Layout>{children}</S.Layout>;
};

export default PostsLayout;
