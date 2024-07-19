import { FC } from "react";
import { Task } from "../task";
import { NoResults } from "../noResults";
import { TasksListWrapper } from "./styles";
import { ITasksList } from "./model";

export const TasksList: FC<ITasksList> = ({ list }) => {
  return (
    <TasksListWrapper className="flex flex-col justify-start items-start p-0 m-0 w-full">
      {list.length === 0 ? (
        <NoResults />
      ) : (
        list.map((task) => <Task key={task.id} {...task} />)
      )}
    </TasksListWrapper>
  );
};
