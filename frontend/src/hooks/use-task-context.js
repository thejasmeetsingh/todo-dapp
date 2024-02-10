import { useContext } from "react";
import TaskContext from "../context/todo";

const useTaskContext = () => {
  return useContext(TaskContext);
};

export default useTaskContext;
