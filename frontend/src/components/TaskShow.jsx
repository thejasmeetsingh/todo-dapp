import { useState } from "react";
import useTaskContext from "../hooks/use-task-context";
import EditTask from "./EditTask";
import { FiEdit2, FiTrash2, FiCheckSquare } from "react-icons/fi";

export default function TaskShow({ idx, task }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(idx);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div>
      <div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
          {task.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
          {task.description}
        </p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between pt-4 mt-4 border-t">
        <button
          aria-label="Edit"
          className="flex-1 text-yellow-500 hover:text-yellow-600"
          onClick={handleEdit}
        >
          <FiEdit2 size="1.5em" className="mx-auto" />
        </button>
        <button
          aria-label="Delete"
          className="flex-1 text-red-500 hover:text-red-600"
          onClick={handleDelete}
        >
          <FiTrash2 size="1.5em" className="mx-auto" />
        </button>
        <button
          aria-label="Complete"
          className="flex-1 text-green-500 hover:text-green-600"
        >
          <FiCheckSquare size="1.5em" className="mx-auto" />
        </button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditTask idx={idx} task={task} onSubmit={handleEdit} />;
  }

  return (
    <div className="space-y-4">
      <div className="group max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 relative overflow-hidden flex flex-col justify-between">
        {content}
      </div>
    </div>
  );
}
