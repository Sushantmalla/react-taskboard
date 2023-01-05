import React, { useRef } from "react";

function TaskList({ tasks, onMoveTask }) {
  const dragRef = useRef(null);

  const handleDragStart = (event, task) => {
    dragRef.current = task;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", event.target.parentNode);
    event.dataTransfer.setDragImage(event.target.parentNode, 20, 20);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event, panelId) => {
    event.preventDefault();
    const task = dragRef.current;
    onMoveTask(task, panelId);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="task"
          draggable={true}
          onDragStart={(event) => handleDragStart(event, task)}
          onDragOver={handleDragOver}
          onDrop={(event) => handleDrop(event, task.panelId)}
        >
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
