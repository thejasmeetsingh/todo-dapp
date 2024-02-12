import { useState } from "react";
import { FiEdit2, FiTrash2, FiCheckSquare } from "react-icons/fi";
import useTaskContext from "../hooks/use-task-context";
import EditTask from "./EditTask";

export default function TaskShow({ idx, task }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTask, markTaskComplete } = useTaskContext();

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = (
    <div className="flex flex-col h-full">
      <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white mb-2 truncate">
        {task.title}
      </h5>
      <p className="flex-1 font-normal text-gray-700 dark:text-gray-400 text-ellipsis overflow-hidden break-all">
        {task.description}
      </p>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between pt-4 mt-4 border-t">
        <button
          onClick={handleEdit}
          className={`text-yellow-500 hover:text-yellow-600 ${
            task.isCompleted ? "hidden" : ""
          }`}
          aria-label="Edit"
        >
          <FiEdit2 size="1.5em" />
        </button>
        <button
          className="text-red-500 hover:text-red-600"
          aria-label="Delete"
          onClick={() => {
            deleteTask(idx);
          }}
        >
          <FiTrash2 size="1.5em" />
        </button>
        <button
          className={`text-green-500 hover:text-green-600 ${
            task.isCompleted ? "hidden" : ""
          }`}
          aria-label="Complete"
          onClick={() => {
            markTaskComplete(idx);
          }}
        >
          <FiCheckSquare size="1.5em" />
        </button>
      </div>
    </div>
  );

  if (showEdit) {
    content = <EditTask idx={idx} task={task} onSubmit={handleEdit} />;
  }

  return (
    <div className="space-y-4">
      <div
        className="group max-w-md mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 relative overflow-hidden flex flex-col justify-between fold-effect"
        style={{ height: "250px" }}
      >
        {content}
      </div>
    </div>
  );
}
