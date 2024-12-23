import React, { useState } from "react";

export default function PasswordGenrator() {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <div className="flex mb-4">
        <input
          type="text"
          value={password}
          readOnly
          onChange={(e) => setPassword(e.target.value)}
          className="flex-grow border rounded-l-md p-2"
          placeholder="Password"
        />
        <button className="bg-gray-200 p-2 rounded-r-md hover:bg-gray-300">
          Copy
        </button>
      </div>

      <div className="mb-4">
        <input
          type="range"
          min="8"
          max="100"
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-sm text-gray-500 mt-1">Value: {range}</div>
      </div>

      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="numbers"
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
            className="w-4 h-4"
          />
          <label htmlFor="numbers" className="text-sm font-medium leading-none">
            Numbers
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="characters"
            checked={characters}
            onChange={(e) => setCharacters(e.target.checked)}
            className="w-4 h-4"
          />
          <label
            htmlFor="characters"
            className="text-sm font-medium leading-none"
          >
            characters
          </label>
        </div>
      </div>
    </div>
  );
}
