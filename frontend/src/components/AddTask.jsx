import { useState } from "react";
import useTaskContext from "../hooks/use-task-context";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useTaskContext();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleTitleChange}
          autoFocus
          required
          placeholder="Title"
        />
        <input
          value={description}
          onChange={handleDescriptionChange}
          required
          placeholder="Description"
        />
        <button>Add Task</button>
      </form>
    </div>
  );
}
