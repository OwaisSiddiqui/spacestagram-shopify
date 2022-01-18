import React, { useState, forwardRef, useContext, useEffect } from "react";
import { APOD } from "spacestagram-types";
import * as S from "./styles";
import HeartIcon from "../icons/Heart";
import ShareIcon from "../icons/Share";
import { getPostLink } from "../../utils/getPostLink";
import { MessageContext } from "../../providers/MessageProvider";
import { PhotoViewerContext } from "../../providers/PhotoViewerProvider";

interface PostProps {
  data: APOD;
}

const Post = forwardRef<HTMLDivElement, PostProps>(({ data }, ref) => {
  const [isLiked, setIsLiked] = useState(false);
  const { setMessage } = useContext(MessageContext);
  const [imageURL, setImageURL] = useState("");
  const { setPhotoViewerData } = useContext(PhotoViewerContext);

  const toggleIsLiked = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const copyShareLink = async () => {
    return navigator.clipboard.writeText(
      getPostLink(new Date(data.date.replace(/-/g, "/")))
    );
  };

  useEffect(() => {
    if (data.url || data.thumbnail_url) {
      setImageURL(
        data.media_type === "image"
          ? data.url
          : data.thumbnail_url
          ? data.thumbnail_url
          : ""
      );
    }
  }, [data.url, data.thumbnail_url]);

  return (
    <S.Container ref={ref}>
      <S.InnerContainer>
        <S.TopSection>
          <S.ImageContainer
            onClick={() => {
              setPhotoViewerData({ show: true, url: imageURL });
            }}
          >
            <S.Image src={imageURL} />
          </S.ImageContainer>
        </S.TopSection>
        <S.BottomSection>
          <S.Headings>
            <S.Title>{data.title}</S.Title>
            <S.Date>
              {new Date(data.date.replace(/-/g, "/")).toLocaleString("en-CA", {
                month: "long",
                year: "numeric",
                day: "numeric",
              })}
            </S.Date>
          </S.Headings>
          <S.MainBody>
            <S.Explanation>{data.explanation}</S.Explanation>
            <S.ShareLikeSection>
              <S.LikeButton
                isLiked={isLiked}
                onClick={() => {
                  toggleIsLiked();
                }}
              >
                <HeartIcon isLiked={isLiked} />
              </S.LikeButton>
              <S.ShareButton
                onClick={() => {
                  copyShareLink().then(() => {
                    setMessage({
                      value: "Copied shareable link.",
                      show: true,
                      isError: false,
                    });
                  });
                }}
              >
                <ShareIcon />
              </S.ShareButton>
            </S.ShareLikeSection>
          </S.MainBody>
        </S.BottomSection>
      </S.InnerContainer>
    </S.Container>
  );
});

Post.displayName = "Post";

export default Post;
