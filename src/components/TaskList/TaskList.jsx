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
      className="h-[50%] overflow-x-auto flex gap-6 flex-nowrap items-start snap-x snap-mandatory"
    >
      {tasks.map((task) => {
        console.log(task);
        const Component = taskComponents[task.status];
        return <Component key={task.id} item={task} />;
      })}
    </div>
  );
}

export default TaskList;
