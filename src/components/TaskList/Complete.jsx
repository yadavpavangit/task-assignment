import React from "react";

function Complete({ item }) {
  return (
    <div
      key={item.id}
      className="w-full md:w-90 overflow-y-auto h-60 p-5 bg-amber-500 shrink-0 rounded-t-xl md:rounded-2xl"
    >
      <div className="flex justify-between">
        <button className="px-3 py-2 bg-amber-600 text-white mb-5">
          {item.category}
        </button>
        <span className="text-xl md:text-xl lg:text-2xl font-semibold">
          {item.date}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl text-center my-3 text-white/50 font-bold">
        {item.title}
      </h2>
      <p className="mb-4">{item.description}</p>
    </div>
  );
}

export default Complete;
