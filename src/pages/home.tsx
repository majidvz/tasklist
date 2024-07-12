import React from "react";
import { TasksList, Header } from "../components";
import { HomeWrapper } from "./styles";
import { useAppContext } from "../contexts";

export const Home: React.FC = () => {
  const { tasksList, setTasksList } = useAppContext();

  return (
    <HomeWrapper className="flex flex-col justify-start items-center w-3/4 mx-auto">
      <Header />
      <TasksList list={tasksList} />
    </HomeWrapper>
  );
};
