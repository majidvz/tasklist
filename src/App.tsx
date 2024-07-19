import { useEffect } from "react";
import { useAppContext } from "./contexts";
import { Home } from "./pages";
import { ITask } from "./components";
import { TASK_LIST } from "./constant";
import { AppWrapper } from "./styles";

function App() {
  const { setTasksList } = useAppContext();

  useEffect(() => {
    const getTasksList = localStorage.getItem(TASK_LIST);
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
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
}

export default App;
