import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { CloseCircle } from "iconsax-react";
import { ModalUIKit, IModalUIKit, InputUIKit, ButtonUIKit } from "../../UIKit";
import { useAppContext } from "../../contexts";
import { ITask } from "../task/model";

interface ITaskModal extends IModalUIKit {
  title: string;
}
type Priority = "low" | "medium" | "high";

export const TaskModal: FC<ITaskModal> = ({ title, isOpen }) => {
  const [inputValue, setInputValue] = useState<string>();
  const [priority, setPriority] = useState<Priority>();
  const [isAddButtonActivated, setIsAddButtonActivated] =
    useState<boolean>(false);

  const { setIsModalOpened } = useAppContext();
  const { tasksList, setTasksList } = useAppContext();

  const formValidator = useCallback(() => {
    setIsAddButtonActivated(!!inputValue && !!priority);
  }, [inputValue, priority]);

  useEffect(() => {
    formValidator();
  }, [formValidator]);

  const selectPriorityHandler = (value: Priority) => {
    setPriority(value);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const inputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const submitForm = () => {
    if (!!inputValue && !!priority) {
      const priorityConvertedToEnum =
        priority === "low" ? 0 : priority === "medium" ? 1 : 2;

      const newTask: ITask = {
        id: 0,
        title: inputValue,
        priority: priorityConvertedToEnum,
        status: 0,
      };

      setTasksList([...tasksList, newTask]);

      localStorage.setItem(
        "tasksList",
        JSON.stringify([...tasksList, newTask])
      );

      setInputValue(undefined);
      setPriority(undefined);
      setIsModalOpened(false);
    }
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
            name="taskName"
            id="taskName"
            className="w-full"
            placeholder="Type your task here..."
            onChange={inputOnChange}
            value={inputValue || ""}
          />
          <small
            className={`text-sm text-red-600 text-left ${
              !!inputValue ? "hidden" : "block"
            }`}
          >
            There is a problem, please solve it.
          </small>
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
          <small
            className={`text-sm text-red-600 text-left ${
              !!priority ? "hidden" : "block"
            }`}
          >
            There is a problem, please solve it.
          </small>
        </div>
      </div>

      <footer className="mt-[32px] flex flex-row justify-end items-center">
        <ButtonUIKit
          style="filled"
          type="primary"
          className={isAddButtonActivated ? "" : "disabled"}
          onClick={submitForm}
        >
          Add Task
        </ButtonUIKit>
      </footer>
    </ModalUIKit>
  );
};
