import TaskItem from "./TaskItem";
import React from "react";

const TaskColumn = ({
  title,
  tasks,
  onMove,
  onDelete,
  buttonLabel,
  showDelete = false,
}) => {
  const isDone = title === "Completed Tasks";

  return (
    <div className="column">
      <h2 className={`heading ${isDone ? "heading-done" : "heading-todo"}`}>
        {title}
      </h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onMove={onMove}
            onDelete={onDelete}
            buttonLabel={buttonLabel}
            showDelete={showDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskColumn;
