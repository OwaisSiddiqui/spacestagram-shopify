import { useAPODArray } from "../../hooks/useAPODArray";
import Post from "../../components/Post";
import * as S from "./styles";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import PostsPageLayout from "../../components/layouts/PostsPageLayout";
import PostsLayout from "../../components/layouts/PostsLayout";
import {
  MessageContext
} from "../../providers/MessageProvider";
import PhotoViewer from "../../components/PhotoViewer";

const PostsPage = () => {
  const [triggerFetch, setTriggerFetch] = useState(false);
  const { loading, data, error, hasMore } = useAPODArray({
    fetchMore: triggerFetch,
  });
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    if (error) {
      setMessage({ value: error, show: true, isError: true });
    }
  }, [error]);

  useEffect(() => {
    document.title = "Spacestagram";
  }, []);

  const observer = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      if (loading || error || !hasMore) return;
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setTriggerFetch(!triggerFetch);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading]
  );

  return (

        <PostsPageLayout>
          <PostsLayout>
            {data.map((post, index) => {
              return (
                <Post
                  data={post}
                  key={index}
                  ref={data.length - 1 === index ? lastPostRef : null}
                />
              );
            })}
          </PostsLayout>

          <Message />

          {loading || !hasMore ? (
            <S.LoadingSection>
              {loading ? <Loader /> : <S.EndMessage>End of APODs!</S.EndMessage>}
            </S.LoadingSection>
          ) : null}
          <PhotoViewer />
        </PostsPageLayout>
  );
};

export default PostsPage;
