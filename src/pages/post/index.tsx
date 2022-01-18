import React, { useContext, useEffect } from "react";
import Post from "../../components/Post";
import { useParams } from "react-router-dom";
import { useAPOD } from "../../hooks/useAPOD";
import * as S from "./styles";
import Loader from "../../components/Loader";
import {
  MessageContext
} from "../../providers/MessageProvider";
import Message from "../../components/Message";
import PostsLayout from "../../components/layouts/PostsLayout";
import PostsPageLayout from "../../components/layouts/PostsPageLayout";
import PhotoViewer from "../../components/PhotoViewer";

const PostPage = () => {
  const params = useParams();

  const { loading, data, error } = useAPOD({
    date: new Date((params.postId as string)?.replace(/-/g, "/")),
  });
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    if (data?.title) {
      document.title = `${data.title} - Spacestagram`;
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setMessage({ value: error, show: true, isError: true });
    }
  }, [error]);

  return (
        <PostsPageLayout>
          {loading ? (
            <S.LoadingSection>
              <Loader />
            </S.LoadingSection>
          ) : data ? (
            <PostsLayout>
              <Post data={data} />
            </PostsLayout>
          ) : null}

          <Message />
          <PhotoViewer />
        </PostsPageLayout>

        
  );
};

export default PostPage;
