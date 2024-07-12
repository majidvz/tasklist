import React, { createContext, ReactNode, useContext, useState } from "react";
import { ITask } from "../../components";
import { IAppContext } from "./IAppContext";

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider: React.FC<{
  children: ReactNode;
  value: IAppContext;
}> = ({ children }) => {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  return (
    <AppContext.Provider value={{ tasksList, setTasksList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within an AppProvider");
  return context;
};
