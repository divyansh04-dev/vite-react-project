import React, { useState } from "react";
import Navbar from "./components/nav";
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto mt-10 p-5 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl text-center mb-5">To-Do List</h1>

        {/* Input Section */}
        <div className="flex mb-5">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md"
            placeholder="Enter a new task"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-4">
          <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
            <span className="text-lg">Sample Task</span>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>

          <li className="flex items-center justify-between bg-gray-100 p-3 rounded-md">
            <span className="text-lg">Another Task</span>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                Edit
              </button>
              <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
