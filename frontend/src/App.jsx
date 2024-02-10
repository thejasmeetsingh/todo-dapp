import { useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import useTaskContext from "./hooks/use-task-context";

const App = () => {
  const { fetchTasks } = useTaskContext();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>TODO: DApp</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
