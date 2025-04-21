import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";

const TodoList = () => {
  const [tasksToDo, setTasksToDo] = useState([
    { id: 1, name: "Clean the room" },
    { id: 2, name: "Buy groceries" },
  ]);
  const [tasksDone, setTasksDone] = useState([
    { id: 3, name: "Read a book" },
    { id: 4, name: "Finish homework" },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(5);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleAddTask = () => {
    if (input.trim() === "") return alert("Task name cannot be empty.");
    const newTask = { id: nextId, name: input.trim() };
    setTasksToDo([...tasksToDo, newTask]);
    setInput("");
    setNextId(nextId + 1);
  };

  const handleMoveTask = (fromList, id) => {
    if (fromList === "tasksToDo") {
      const task = tasksToDo.find((t) => t.id === id);
      if (!task) return;
      setTasksToDo(tasksToDo.filter((t) => t.id !== id));
      setTasksDone([...tasksDone, task]);
    } else {
      const task = tasksDone.find((t) => t.id === id);
      if (!task) return;
      setTasksDone(tasksDone.filter((t) => t.id !== id));
      setTasksToDo([...tasksToDo, task]);
    }
  };

  const handleDelete = (id) => {
    setTasksDone(tasksDone.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <button className="btn btn-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <TaskForm
        input={input}
        onInputChange={handleInputChange}
        onAddTask={handleAddTask}
      />

      <div className="columns">
        <TaskColumn
          title="Tasks To Do"
          tasks={tasksToDo}
          onMove={(id) => handleMoveTask("tasksToDo", id)}
          buttonLabel="Confirm"
        />
        <TaskColumn
          title="Completed Tasks"
          tasks={tasksDone}
          onMove={(id) => handleMoveTask("tasksDone", id)}
          onDelete={handleDelete}
          buttonLabel="Put in To-Do"
          showDelete
        />
      </div>
    </div>
  );
};

export default TodoList;
