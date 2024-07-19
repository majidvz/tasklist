import { FC } from "react";
import { Add } from "iconsax-react";
import { ButtonUIKit } from "../../UIKit";
import { useAppContext } from "../../contexts";
import { HeaderWrapper } from "./styles";

export const Header: FC = () => {
  const { setIsModalOpened } = useAppContext();

  const showAddingTaskModal = () => {
    setIsModalOpened(true);
  };

  return (
    <HeaderWrapper className="flex flex-row justify-between items-center w-full ">
      <h1 className="title">Task List</h1>

      <ButtonUIKit type="primary" style="filled" onClick={showAddingTaskModal}>
        <Add size={24} />
        Add Task
      </ButtonUIKit>
    </HeaderWrapper>
  );
};
