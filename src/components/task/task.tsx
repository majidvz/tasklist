import React from "react";
import { Trash, Edit2 } from "iconsax-react";
import { ButtonUIKit, ProgressBarUIKit } from "../../UIKit";
import { TaskWrapper } from "./styles";

export const Task: React.FC = () => {
  return (
    <TaskWrapper className="flex justify-start items-center w-full">
      <div className="section context flex flex-col items-start justify-start">
        <span className="subtitle">Task</span>
        <h2 className="title">Go to gym</h2>
      </div>

      <div className="section priority flex flex-col items-start justify-start">
        <span className="subtitle">Priority</span>
        <span className="priority-context high">High</span>
      </div>

      <div className="section status flex flex-col items-center justify-center">
        <ButtonUIKit type="secondary" style="filled">
          To Do
        </ButtonUIKit>
      </div>

      <div className="section status flex flex-col items-center justify-center">
        <ProgressBarUIKit size={24} precentage={0} />
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
