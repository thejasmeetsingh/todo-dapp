import { useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { getDefaultAccount } from "../web3";
import useTaskContext from "../hooks/use-task-context";

export default function () {
  const { fetchTasks } = useTaskContext();
  let defaultAccount = getDefaultAccount();

  useEffect(() => {
    fetchTasks();
  }, []);

  setInterval(function () {
    // Check if account has changed
    const currAccount = getDefaultAccount();

    if (currAccount !== defaultAccount) {
      defaultAccount = currAccount;
      // Call a function to update the task with the new account
      fetchTasks();
    }
  }, 100);

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
