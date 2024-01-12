import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleTodos = () => {
    setTodo([...todo, currentTodo]);
    setCurrentTodo("");
  };

  return (
    <div>
      <input
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />

      <button onClick={handleTodos}>Add</button>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
