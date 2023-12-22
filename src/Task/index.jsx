/* eslint-disable react/prop-types */
export const Task = ({ task, onDelete, onComplete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleComplete = () => {
    onComplete(task.id);
  };

  return (
    <div className="task">
      <span
        className={task.completed ? "completed" : ""}
        onClick={handleComplete}
      >
        {task.text}
      </span>

      <div>
        <button onClick={handleComplete} className="complete-btn">
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};
