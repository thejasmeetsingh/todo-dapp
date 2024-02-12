import { useState } from "react";
import { FiSave } from "react-icons/fi";
import useTaskContext from "../hooks/use-task-context";

export default function EditTask({ idx, task, onSubmit }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const { editTask } = useTaskContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    editTask(idx, title, description);
    onSubmit();
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 text-xl font-bold border-2 border-gray-200 rounded-md dark:text-white dark:border-gray-600 dark:bg-gray-800"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border-2 border-gray-200 rounded-md dark:text-white dark:border-gray-600 dark:bg-gray-800"
      />
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSubmit}
          className="text-green-500 hover:text-green-600"
          aria-label="Save"
        >
          <FiSave size="1.5em" />
        </button>
      </div>
    </div>
  );
}
