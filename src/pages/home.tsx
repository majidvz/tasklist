import { FC } from "react";
import { TasksList, Header } from "../components";
import { useAppContext } from "../contexts";
import { HomeWrapper } from "./styles";

export const Home: FC = () => {
  const { tasksList } = useAppContext();

  return (
    <HomeWrapper className="flex flex-col justify-start items-center w-3/4 mx-auto">
      <Header />
      <TasksList list={tasksList} />
    </HomeWrapper>
  );
};
