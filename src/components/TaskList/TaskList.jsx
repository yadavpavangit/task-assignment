import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Complete from "./Complete";

function TaskList({ tasks = [] }) {
  const taskComponents = {
    new: NewTask,
    active: AcceptTask,
    completed: Complete,
  };
  return (
    <div
      id="taskList"
      className="h-[50%] overflow-x-auto flex flex-col md:flex-row items-center justify-center gap-9 flex-nowrap w-full py-1 mt-16"
    >
      {tasks.map((task) => {
        const Component = taskComponents[task.status];
        return <Component key={task.id} item={task} />;
      })}
    </div>
  );
}

export default TaskList;
