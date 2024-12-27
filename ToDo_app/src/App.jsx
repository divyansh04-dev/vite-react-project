import React, { useState } from "react";
import Navbar from "./components/nav";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleEdit = () => {};

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    todo.trim() !== "" &&
      setTodos([...todos, { task: todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheck = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl text-center mb-5">To-Do List</h1>

        {/* Input Section */}
        <div className="flex mb-5">
          <input
            type="text"
            name="task"
            value={todo}
            onChange={handleChange}
            className="flex-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter a new task"
          />
          <button
            onClick={handleAdd}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          {todos.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md"
            >
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleCheck(index)}
              />
              <span
                className={
                  item.isCompleted ? "text-xl line-through" : "text-xl"
                }
              >
                {item.task}
              </span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
