const TaskForm = ({ input, onInputChange, onAddTask }) => (
  <div className="input-section">
    <input
      type="text"
      placeholder="Type a new task..."
      value={input}
      onChange={onInputChange}
    />
    <button className="btn" onClick={onAddTask}>
      Add Task
    </button>
  </div>
);

export default TaskForm;
