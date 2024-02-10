import { createContext, useCallback, useState } from "react";

const TaskContext = createContext();

const Provider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    setTasks([]);
  }, []);

  const createTask = async (title, description) => {
    setTasks([...tasks, { title, description }]);
  };

  const deleteTask = async (idx) => {
    const updatedTasks = tasks.filter((_, index) => {
      return index !== idx;
    });

    setTasks(updatedTasks);
  };

  const editTask = async (idx, title, description) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === idx) {
        return { ...task, ...{ title, description } };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchTasks,
        createTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { Provider };
export default TaskContext;
