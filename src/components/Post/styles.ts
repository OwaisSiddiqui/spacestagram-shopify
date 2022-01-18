import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px lightgrey;
  overflow: hidden;
  margin-bottom: 1rem;
`;

export const InnerContainer = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  background: rgb(255, 255, 255);
  cursor: zoom-in;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
`;

export const Date = styled.span`
  font-size: 0.9rem;
  margin: 0;
  color: rgb(204, 204, 204);
`;

export const Explanation = styled.p`
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgb(38, 38, 38);
`;

interface LikeButtonProps {
  isLiked: boolean;
}

export const LikeButton = styled.button<LikeButtonProps>`
  background: none;
  border: none;
  font-family: Quicksand, sans-serif;
  cursor: pointer;
  color: ${({ isLiked }) => (isLiked ? "red" : "white")};
  padding: 0;
  display: flex;
`;

export const TopSection = styled.section``;

export const ImageError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomSection = styled.section`
  background: rgb(255, 255, 255);
  padding: 1.5rem 1rem 1rem 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const MainBody = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

export const Headings = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ShareButton = styled.button`
  background: none;
  border: none;
  display: flex;
  cursor: pointer;
  color: black; /* for iOS Safari */
  padding: 0;
`;

export const ShareLikeSection = styled.section`
  display: flex;
  gap: 0.9rem;
  align-items: center;
`;

interface CopyMessageProps {
  isShareLinkClicked: boolean | null;
}

export const CopyMessage = styled.span<CopyMessageProps>`
  font-family: Quicksand, sans-serif;
  font-size: 0.7rem;
  text-align: center;
  display: flex;
  align-items: center;
  color: rgb(40, 212, 135);
  padding: 0.3rem 0.7rem;
  border: 1px solid rgb(40, 212, 135);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

export const ShareSection = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;
