import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  color: rgb(162, 164, 167);
  font-size: 0.8rem;
`;

export const Header = styled.header`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  text-align: center;
  background: white;
  padding: 0.8rem 0rem;
  border-bottom: 1px solid lightgrey;
`;

export const Posts = styled.main`
  width: min(100%, 35rem);
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const LoadingSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0rem;
`;

export const EndMessage = styled.span`
  font-family: "Quicksand", sans-serif;
  color: lightgrey;
  font-size: 1rem;
  text-align: center;
`;
