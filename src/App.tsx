import { useEffect, useState } from "react";
import { AppProvider } from "./contexts";
import { Home } from "./pages";
import { ITask } from "./components";
import { AppWrapper } from "./styles";

function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  useEffect(() => {
    const getTasksList = localStorage.getItem("tasksList");
    if (getTasksList) {
      try {
        const parsedTasksList: ITask[] = JSON.parse(getTasksList);
        setTasksList(parsedTasksList);
      } catch (error) {
        setTasksList([]);
      }
    } else setTasksList([]);
  }, []);

  return (
    <AppProvider value={{ tasksList, setTasksList }}>
      <AppWrapper>
        <Home />
      </AppWrapper>
    </AppProvider>
  );
}

export default App;
