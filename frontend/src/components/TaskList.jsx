import useTaskContext from "../hooks/use-task-context";
import TaskShow from "./TaskShow";

export default function TaskList() {
  const { tasks } = useTaskContext();

  const renderTask = tasks.map((task, index) => {
    return <TaskShow key={index} idx={index} task={task} />;
  });

  return <div>{renderTask}</div>;
}
