import { tasks } from "../data";
import { useDragAndDrop } from "../utils/useDrag";
import { ContainerCards } from "./ContainerCard";

const title = ["todo", "doing", "review", "completed"];

const Drag = () => {
  const { isDragging, listItems, handleDragging, handleUpdateList } =
    useDragAndDrop(tasks);

  return (
    <div className="grid">
      {title.map((container) => (
        <ContainerCards
          items={listItems}
          status={container}
          key={container}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </div>
  );
};

export default Drag;
