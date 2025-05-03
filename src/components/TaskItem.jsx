const TaskItem = ({ task, onMove, onDelete, buttonLabel, showDelete }) => {
  let borderClass = "";
  if (buttonLabel === "Start") borderClass = "border-red";
  else if (buttonLabel === "Complete") borderClass = "border-yellow";
  else if (buttonLabel === "Restart") borderClass = "border-green";

  return (
    <div className="task-wrapper">
      <li className={`task-item ${borderClass}`}>{task.name}</li>
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
