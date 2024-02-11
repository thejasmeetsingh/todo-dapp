import useTaskContext from "../hooks/use-task-context";

export default function TaskShow({ idx, task }) {
  const { deleteTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(idx);
  };

  return (
    <div className="space-y-4">
      <div className="p-4 border rounded">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p className="mb-2">{task.description}</p>
        <button className="bg-amber-400 hover:bg-amber-700 text-white font-bold py-1 px-2 rounded mr-2">
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
