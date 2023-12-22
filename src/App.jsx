import "./App.css";
import React, { useState } from "react";
import { TaskList } from "./TaskList";
import { AddTask } from "./AddTask";
import { Menu } from "./Menu";

// Composant AddTask

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [Newtasks, setNewTasks] = useState([]); // Add Newtasks state

  const addTask = (text) => {
    const newTask = {
      id: Math.random(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTasks([...Newtasks, newTask]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setNewTasks(updatedTasks);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    setNewTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>

      <AddTask onAdd={addTask} />
      <Menu tasks={tasks} setNewTasks={setNewTasks} />

      <TaskList
        tasks={Newtasks.length > 0 ? Newtasks : tasks}
        onDelete={deleteTask}
        onComplete={completeTask}
      />

      <p>by monta</p>
    </div>
  );
}
