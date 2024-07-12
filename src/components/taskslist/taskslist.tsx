import React from "react";
import { TasksListWrapper } from "./styles";
import { Task } from "../task/task";

export const TasksList: React.FC = () => {
  return (
    <TasksListWrapper className="flex flex-col justify-start items-start p-0 m-0 w-full">
      <Task />
      <Task />
      <Task />
      <Task />
    </TasksListWrapper>
  );
};
