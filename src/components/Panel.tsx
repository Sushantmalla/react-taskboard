import { Key } from "react";
import { Task } from "./Task";

export const Panel = ({
  items = [],
  status,
  isDragging,
  background,
  handleDragging,
  handleUpdateList,
}: {
  items: any[];
  status: string;
  isDragging: any;
  background: string;
  handleDragging: (status: boolean) => any;
  handleUpdateList: (property: any, status: any) => any;
}) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleUpdateList(+e.dataTransfer.getData("text"), status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  return (
    <div
      className={`layout-cards ${isDragging ? "layout-dragging" : ""}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ backgroundColor: background }}
    >
      <p>{status}</p>
      {items.map(
        (item: { status: any; id: Key | null | undefined }) =>
          status === item.status && (
            <Task data={item} key={item.id} handleDragging={handleDragging} />
          )
      )}
    </div>
  );
};
