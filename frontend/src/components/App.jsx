import { useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import useTaskContext from "../hooks/use-task-context";

export default function () {
  const { fetchTasks } = useTaskContext();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-12">
      <div className="col-span-4 text-center">
        <h1 className="text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight mb-2">
          ToDo: D-App
        </h1>
        <AddTask />
      </div>
      <div className="col-span-8">
        <TaskList />
      </div>
    </div>
  );
}
