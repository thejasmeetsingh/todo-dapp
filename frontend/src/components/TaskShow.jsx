export default function TaskShow({ idx, task }) {
  return (
    <div>
      <p>Index: {idx}</p>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}
