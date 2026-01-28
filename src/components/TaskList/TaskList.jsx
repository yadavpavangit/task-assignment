import React from "react";

function TaskList() {
  return (
    <div
      id="taskList"
      className="h-[50%] overflow-x-auto flex flex-col md:flex-row items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16"
    >
      <div className="w-full md:w-90 overflow-y-auto h-60 p-5 bg-amber-500 shrink-0 rounded-t-xl md:rounded-2xl">
        <div className="flex justify-between">
          <button className="px-3 py-2 bg-amber-600 text-white mb-5">
            high
          </button>
          <span className="text-xl md:text-xl lg:text-2xl font-semibold">
            10 feb 2016
          </span>
        </div>

        <h2 className="text-xl md:text-2xl text-center my-3 text-white/50 font-bold">
          Lorem ipsum dolor sit.
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta natus
          distinctio ab perspiciatis ad quae pariatur tempore delectus
          voluptatum temporibus doloremque, ut voluptatem totam autem sequi odit
          perferendis corrupti laudantium quia accusantium explicabo dolore
          sapiente, illum placeat. Libero, id est!
        </p>
      </div>
      {/* <div className="w-full md:w-60 h-60 p-5 bg-blue-500 shrink-0 -mt-8 sm:mt-0 rounded-t-xl  md:rounded-2xl"></div>
      <div className="w-full md:w-60 h-60 p-5 bg-red-500 shrink-0 -mt-8 sm:mt-0 rounded-t-xl  md:rounded-2xl"></div>
      <div className="w-full md:w-60 h-60 p-5 bg-sky-500 shrink-0 -mt-8 sm:mt-0 rounded-t-xl  md:rounded-2xl"></div>
      <div className="w-full md:w-60 h-60 p-5 bg-pink-500 shrink-0 -mt-8 sm:mt-0 rounded-t-xl  md:rounded-2xl"></div>
      <div className="w-full md:w-60 h-60 p-5 bg-purple-500 shrink-0 -mt-8 sm:mt-0 rounded-t-xl  md:rounded-2xl"></div> */}
    </div>
  );
}

export default TaskList;
