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
      <h1 className="text-center text-2xl font-black mb-2">ToDo: D-App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
