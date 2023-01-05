import "./App.css";

const Panel = ({
  title,
  taskLists,
  handleDragEnd,
}: {
  title: string;
  taskLists: {
    id: number;
    description: string;
  }[];
  handleDragEnd: (id: number, title: string) => any;
}) => {
  return (
    <div className="panel-container">
      <h3>{title}</h3>
      <>
        {taskLists.map((task) => (
          <div
            className="task-card"
            key={task.id}
            draggable
            onDragOver={() => handleDragEnd(task.id, title)}
          >
            {task.description}
          </div>
        ))}
      </>
    </div>
  );
};

export default Panel;
