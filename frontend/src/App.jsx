import { useEffect } from "react";
import "./index.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import useTaskContext from "./hooks/use-task-context";

const App = () => {
  const { fetchTasks } = useTaskContext();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto mt-20 px-4 py-12">
      <h1 className="text-2xl text-center font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight mb-2">
        ToDo: D-App
      </h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
