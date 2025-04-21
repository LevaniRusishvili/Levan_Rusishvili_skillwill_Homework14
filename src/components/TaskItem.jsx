const TaskItem = ({ task, onMove, onDelete, buttonLabel, showDelete }) => {
  return (
    <div className="task-wrapper">
      <li
        className={`task-item ${
          buttonLabel === "Confirm" ? "not-done" : "done-task"
        }`}
      >
        {task.name}
      </li>
      <div className="btn-group">
        <button className="btn btn-move" onClick={() => onMove(task.id)}>
          {buttonLabel}
        </button>
        {showDelete && (
          <button className="btn btn-delete" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
