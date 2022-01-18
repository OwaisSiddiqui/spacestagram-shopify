import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  text-align: center;
  background: white;
  padding: 0.8rem 0rem;
  border-bottom: 1px solid lightgrey;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-family: "Dancing Script", cursive;
  display: flex;
  align-self: center;
  cursor: pointer;
  & > a {
    text-decoration: none;
    color: black;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  color: rgb(162, 164, 167);
  font-size: 0.8rem;
`;
