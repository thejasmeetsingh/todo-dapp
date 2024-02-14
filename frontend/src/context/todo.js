import { createContext, useCallback, useState } from "react";
import { web3, getCurrWalletAccount, getContract } from "../web3";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const contract = getContract();

  const fetchTasks = useCallback(async () => {
    const currAccount = await getCurrWalletAccount();

    const taskList = await contract.methods
      .getTaskList()
      .call({ from: currAccount });

    setTasks(taskList);
  }, []);

  const createTask = async (title, description) => {
    const currAccount = await getCurrWalletAccount();

    await contract.methods
      .addTask(title, description)
      .send({ from: currAccount })
      .on("receipt", (receipt) => {
        console.log("Task added successfully");
        setTasks([...tasks, { title, description, isCompleted: false }]);
      })
      .on("error", (error) => {
        console.error("Error caught while adding task: ", error);
      });
  };

  const deleteTask = async (idx) => {
    const currAccount = await getCurrWalletAccount();

    await contract.methods
      .deleteTask(idx)
      .send({ from: currAccount })
      .on("receipt", (receipt) => {
        console.log("Task deleted successfully");
        const updatedTasks = tasks.filter((_, index) => {
          return index !== idx;
        });

        setTasks(updatedTasks);
      })
      .on("error", (error) => {
        console.error("Error caught while deleting task: ", error);
      });
  };

  const editTask = async (idx, title, description) => {
    const currAccount = await getCurrWalletAccount();

    await contract.methods
      .updateTask(idx, title, description)
      .send({ from: currAccount })
      .on("receipt", (receipt) => {
        console.log("Task updated successfully");
        const updatedTasks = tasks.map((task, index) => {
          if (index === idx) {
            return { ...task, ...{ title, description } };
          }
          return task;
        });

        setTasks(updatedTasks);
      })
      .on("error", (error) => {
        console.error("Error caught while updating task: ", error);
      });
  };

  const markTaskComplete = async (idx) => {
    const currAccount = await getCurrWalletAccount();

    await contract.methods
      .markTaskComplete(idx)
      .send({ from: currAccount })
      .on("receipt", (receipt) => {
        console.log("Task marked complete successfully");
        const updatedTasks = tasks.map((task, index) => {
          if (index === idx) {
            return { ...task, ...{ isCompleted: true } };
          }
          return task;
        });

        setTasks(updatedTasks);
      })
      .on("error", (error) => {
        console.error("Error caught while marking a task as complete: ", error);
      });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchTasks,
        createTask,
        deleteTask,
        editTask,
        markTaskComplete,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { Provider };
export default TaskContext;
