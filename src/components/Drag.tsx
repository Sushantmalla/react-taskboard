import { tasks } from "../data";
import { Panel } from "./Panel";
import { useDragAndDrop } from "../utils/useDrag";

const title = [
  { name: "todo", background: "#eee" },
  { name: "doing", background: "#cccccc" },
  { name: "review", background: "#f9edbe" },
  { name: "completed", background: "#f0c36d" },
];

const Drag = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(tasks);

  return (
    <div className="dragwrapper">
      {title.map((container) => (
        <Panel
          items={listItems}
          status={container.name}
          key={container.name}
          background={container.background}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};

export default Drag;
