import React from "react";
import { ITask, Task } from "../task";
import { NoResults } from "../noResults";
import { TasksListWrapper } from "./styles";
import { ITasksList } from "./ITasksList";

export const TasksList: React.FC<ITasksList> = ({ list }) => {
  const tasks: ITask[] = [
    {
      id: 0,
      title: "Go to gym",
      priority: 2,
      status: 1,
    },
    {
      id: 1,
      title: "Read a book",
      priority: 0,
      status: 2,
    },
    {
      id: 2,
      title: "Go to market",
      priority: 1,
      status: 1,
    },
  ];
  return (
    <TasksListWrapper className="flex flex-col justify-start items-start p-0 m-0 w-full">
      {tasks.length === 0 ? (
        <NoResults />
      ) : (
        tasks.map((task) => <Task key={task.id} {...task} />)
      )}
    </TasksListWrapper>
  );
};
