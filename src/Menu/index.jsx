/* eslint-disable react/prop-types */
export const Menu = ({ tasks, setNewTasks }) => {
  const completedTask = () => {
    const updatedTasks = tasks.filter((task) => task.completed === true);
    setNewTasks(updatedTasks);
  };
  const incompleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.completed === false);
    setNewTasks(updatedTasks);
  };

  const Task = () => {
    const updatedTasks = tasks.filter((task) => task);
    setNewTasks(updatedTasks);
  };
  return (
    <div className="menu">
      <button onClick={completedTask} type="button" className="task-btn">
        completed
      </button>
      <button onClick={incompleteTask} type="button" className="task-btn">
        incomplete
      </button>
      <button onClick={Task} type="button" className="task-btn">
        Task
      </button>
    </div>
  );
};
