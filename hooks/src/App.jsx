import React, { useEffect, useState } from "react";
import Nav from "./components/nav";

export default function App() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState("color");

  // run only one time
  useEffect(() => {
    alert("Welcome!");
  }, []);

  // run when count is to be changed
  useEffect(() => {
    alert("Count changed to " + count);
    setColor(`color-${count}`);
  }, [count]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Nav color={color} />
          <p className="text-xl">Count is {count}</p>
          <button
            className="bg-black text-white p-2 rounded-xl mt-4"
            onClick={() => setCount(count + 1)}
          >
            Add Value
          </button>
        </div>
      </div>
    </>
  );
}
