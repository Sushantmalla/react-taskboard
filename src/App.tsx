import "./App.css";
import Panel from "./Panel";
import { tasks } from "./data";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  const dragEndHandler = (id: number, title: string) => {
    setTaskList((task) =>
      task.map((t) => {
        if (t.id === id) {
          return { ...t, status: title };
        } else {
          return { ...t };
        }
      })
    );
  };
  return (
    <div className="App">
      <Panel
        title="todo"
        taskLists={taskList.filter((t) => t.status == "todo")}
        handleDragEnd={dragEndHandler}
      />
      <Panel
        title="doing"
        taskLists={taskList.filter((t) => t.status == "doing")}
        handleDragEnd={dragEndHandler}
      />
      <Panel
        title="review"
        taskLists={taskList.filter((t) => t.status == "review")}
        handleDragEnd={dragEndHandler}
      />
      <Panel
        title="completed"
        taskLists={taskList.filter((t) => t.status == "completed")}
        handleDragEnd={dragEndHandler}
      />
    </div>
  );
}

export default App;
