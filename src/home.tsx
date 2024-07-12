import React from "react";
import styled from "styled-components";
import { TasksList, Header } from "./components";

const HomeWrapper = styled.div`
  padding-top: 40px;
  gap: 16px;
`;

export const Home: React.FC = () => {
  return (
    <HomeWrapper className="flex flex-col justify-start items-center w-1/2 mx-auto">
      <Header />
      <TasksList />
    </HomeWrapper>
  );
};
