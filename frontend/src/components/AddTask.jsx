import { useState } from "react";
import useTaskContext from "../hooks/use-task-context";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex mb-8 justify-center">
      <form onSubmit={handleSubmit}>
        <input
          className="border flex-grow mr-1 p-2 w-96 rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          required
          type="text"
          placeholder="Title"
        />
        <textarea
          className="border flex-grow mr-1 p-2 w-96 rounded"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
          type="text"
          placeholder="Description"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 w-96 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}
