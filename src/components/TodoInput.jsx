import React, { useState } from "react";

const TodoInput = ({ addTodos }) => {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (text.trim() === "") return alert("Enter task...");
    addTodos(text);
    setText("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default TodoInput;
