import { ITask } from "../../components";

export interface IAppContext {
  tasksList: ITask[];
  setTasksList: React.Dispatch<React.SetStateAction<ITask[] | []>>;
  isModalOpened: boolean;
  setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
