import useTaskContext from "../hooks/use-task-context";

export default function TaskShow({ idx, task }) {
  const { deleteTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(idx);
  };

  return (
    <div>
      <p>Index: {idx}</p>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
