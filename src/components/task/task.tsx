import { FC } from "react";
import { Trash, Edit2 } from "iconsax-react";
import { ButtonUIKit, ProgressBarUIKit } from "../../UIKit";
import { TaskWrapper } from "./styles";
import { ITask } from "./model";
import { TaskPriority, TaskStatus } from "./enum";

export const Task: FC<ITask> = ({ title, priority, status }) => {
  const progressBarpercentage: number =
    status === TaskStatus.ToDo
      ? 0
      : status === TaskStatus.InProgress
      ? 50
      : 100;

  const priorityLabel: string =
    priority === TaskPriority.Low
      ? "low"
      : priority === TaskPriority.Medium
      ? "medium"
      : "high";

  const statusLabel: string =
    status === TaskStatus.ToDo
      ? "To Do"
      : status === TaskStatus.InProgress
      ? "In Progress"
      : "Done";

  return (
    <TaskWrapper className="flex justify-start items-center w-full">
      <div className="section context flex flex-col items-start justify-start">
        <span className="subtitle">Task</span>
        <h2 className="title">{title}</h2>
      </div>

      <div className="section priority flex flex-col items-start justify-start">
        <span className="subtitle">Priority</span>
        <span className={`priority-context ${priorityLabel}`}>
          {priorityLabel}
        </span>
      </div>

      <div className="section status flex flex-col items-center justify-center">
        <ButtonUIKit type="secondary" style="filled">
          {statusLabel}
        </ButtonUIKit>
      </div>

      <div className="section status flex flex-col items-center justify-center">
        <ProgressBarUIKit size={24} percentage={progressBarpercentage} />
      </div>

      <div className="section actions flex flex-row items-end justify-center">
        <ButtonUIKit type="secondary" style="icon">
          <Edit2 size="24" />
        </ButtonUIKit>
        <ButtonUIKit type="danger" style="icon">
          <Trash size="24" />
        </ButtonUIKit>
      </div>
    </TaskWrapper>
  );
};
