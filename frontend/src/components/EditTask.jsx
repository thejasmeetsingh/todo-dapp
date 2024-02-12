import { useState } from "react";
import { FiSave } from "react-icons/fi";
import useTaskContext from "../hooks/use-task-context";

export default function EditTask({ idx, task, onSubmit }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const { editTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(idx, title, description);
    onSubmit();
  };

  return (
    <div>
      <form
        className="flex flex-col justify-between h-full"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 text-xl font-bold border-2 border-gray-200 rounded-md dark:text-white dark:border-gray-600 dark:bg-gray-800"
            placeholder="Title"
            autoFocus
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-2 p-2 border-2 border-gray-200 rounded-md dark:text-white dark:border-gray-600 dark:bg-gray-800"
            placeholder="Description"
            rows="3"
          />
        </div>
        <button
          type="submit"
          className="text-green-500 hover:text-green-600 mt-2 self-end"
          aria-label="Save"
        >
          <FiSave size="1.5em" />
        </button>
      </form>
    </div>
  );
}
