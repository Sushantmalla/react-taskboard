import { useState } from "react";

export const useDragAndDrop = (initialState: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [listItems, setListItems] = useState<any>(initialState);

  const handleUpdateList = (id: number, status: any) => {
    let card = listItems.find((item: { id: number }) => item.id === id);

    if (card && card.status !== status) {
      card.status = status;
      if (Array.isArray(listItems)) {
        setListItems((prev: any[]) => [
          card!,
          ...prev.filter((item) => item.id !== id),
        ]);
      }
    }
  };

  const handleDragging = (dragging: boolean) => setIsDragging(dragging);

  return {
    isDragging,
    listItems,
    handleUpdateList,
    handleDragging,
  };
};
