import React from "react";

const TodoItem = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  const handleEdit = () => {
    const newText = prompt("Enter new Task!", todo.text);
    if (newText && newText.trim() !== "") {
      editTodo(todo.id, newText);
    }
  };

  return (
    <li>
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
      <div className="action">
        <button onClick={() => toggleComplete(todo.id)}>✔️</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
