import React from "react";
import { ButtonUIKit } from "../../UIKit";
import { HeaderWrapper } from "./styles";
import { Add } from "iconsax-react";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper className="flex flex-row justify-between items-center w-full">
      <h1 className="title">Task List</h1>
      <ButtonUIKit type="primary" style="filled">
        <Add size={24} />
        Add Task
      </ButtonUIKit>
    </HeaderWrapper>
  );
};
