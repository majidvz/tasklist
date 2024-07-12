import { ITask } from "../../components";

export interface IAppContext {
  tasksList: ITask[];
  setTasksList: React.Dispatch<React.SetStateAction<ITask[] | []>>;
}
