export default function AddTask() {
  return (
    <div>
      <form>
        <input autoFocus placeholder="Title" />
        <input placeholder="Description" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
