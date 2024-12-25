import React from "react";
import Default from "../assets/Default.png";

function Cards({ id, title = "no title", desc = "no desc", img = Default }) {
  return (
    <div
      key={id}
      className="relative flex flex-col justify-between h-96 w-80 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div className="relative w-80 h-40 overflow-hidden rounded-t-xl">
        <img src={img} alt="Card image" className="w-80 h-40 object-cover" />
      </div>

      <div className="p-6 flex-1">
        <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {title}
        </h5>
        <p className="text-base font-light leading-relaxed">{desc}</p>
      </div>

      <div className="mt-auto p-6 pt-0">
        <button
          type="button"
          className="w-full rounded-lg bg-blue-500 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:opacity-50"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Cards;
