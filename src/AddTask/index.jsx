/* eslint-disable react/prop-types */
import { useState } from "react";
export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="task-input"
      />
      <button type="submit" className="task-btn">
        Add Task
      </button>
    </form>
  );
};
