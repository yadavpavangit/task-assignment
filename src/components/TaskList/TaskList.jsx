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
    <div className="w-ful flex justify-center">
      <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task) => {
          const Component = taskComponents[task.status];
          return <Component key={task.id} item={task} />;
        })}
      </div>
    </div>
  );
}

export default TaskList;
// <div className="card card-dash bg-base-100 w-96">

// </div>
