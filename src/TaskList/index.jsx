/* eslint-disable react/prop-types */
import { Task } from "../Task";

export const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <div className="task-list">
      {tasks
        .slice(0)
        .reverse()
        .map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
    </div>
  );
};
