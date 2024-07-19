import { FC, useState } from "react";
import { CloseCircle } from "iconsax-react";
import { ModalUIKit, IModalUIKit, InputUIKit, ButtonUIKit } from "../../UIKit";
import { useAppContext } from "../../contexts";

interface ITaskModal extends IModalUIKit {
  title: string;
}
type Priority = "low" | "medium" | "high";

export const TaskModal: FC<ITaskModal> = ({ title, isOpen }) => {
  const [priority, setPriority] = useState<Priority>();
  const { setIsModalOpened } = useAppContext();
  const selectPriorityHandler = (value: Priority) => {
    setPriority(value);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <ModalUIKit isOpen={isOpen}>
      <header className="flex flex-row justify-between items-center">
        <h2 className="text-black text-xl font-bold">{title}</h2>

        <CloseCircle
          className="cursor-pointer"
          size="24"
          onClick={closeModal}
        />
      </header>

      <div className="body flex flex-col justify-start items-start w-full gap-[16px] pt-[16px]">
        <div className="form-wrapper w-full">
          <label
            className="block text-left text-slate-600 font-medium"
            htmlFor="taskName"
          >
            Task
          </label>
          <InputUIKit
            id="taskName"
            className="w-full"
            placeholder="Type your task here..."
          />
        </div>

        <div className="form-wrapper flex flex-col justify-start items-start gap-[8px]">
          <label className="block text-left text-slate-600 font-medium">
            Priority
          </label>

          <div className="flex flex-row justify-start items-center gap-[8px]">
            <ButtonUIKit
              onClick={() => selectPriorityHandler("low")}
              className="w-full"
              style={priority === "low" ? "filled" : "outlined"}
              type="danger"
            >
              Low
            </ButtonUIKit>

            <ButtonUIKit
              className="w-full"
              style={priority === "medium" ? "filled" : "outlined"}
              type="warning"
              onClick={() => selectPriorityHandler("medium")}
            >
              Medium
            </ButtonUIKit>

            <ButtonUIKit
              className="w-full"
              style={priority === "high" ? "filled" : "outlined"}
              type="success"
              onClick={() => selectPriorityHandler("high")}
            >
              High
            </ButtonUIKit>
          </div>
        </div>
      </div>

      <ButtonUIKit
        style="filled"
        type="primary"
        className="disabled mt-[32px] w-full"
      >
        Add Task
      </ButtonUIKit>
    </ModalUIKit>
  );
};
