import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  FC,
} from "react";
import { ITask, TaskModal } from "../../components";
import { IAppContext } from "./model";

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [tasksList, setTasksList] = useState<ITask[]>([]);
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{ tasksList, setTasksList, isModalOpened, setIsModalOpened }}
    >
      {children}

      {/* Creating and updating a task modal */}

      <TaskModal isOpen={isModalOpened} title="Add Task" />
    </AppContext.Provider>
  );
};

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
