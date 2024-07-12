import React from "react";
import { TaskWrapper } from "./styles";
import { ButtonUIKit } from "../../UIKit";

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

      <div className="section status flex flex-col items-start justify-start">
        <ButtonUIKit type="secondary" style="filled">
          To Do
        </ButtonUIKit>
      </div>
    </TaskWrapper>
  );
};
