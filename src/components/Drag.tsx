const boardTitle = ["Todo", "Doing", "Review", "Done"];

const Drag = () => {
  return (
    <div className="panel-container">
      {boardTitle.map((title) => (
        <h1>{title}</h1>
      ))}
    </div>
  );
};

export default Drag;
