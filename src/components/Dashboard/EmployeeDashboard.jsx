import React from "react";
import Header from "../others/Header";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <section>
      <Header />
      <div className="w-full my-10 md:my-20 py-10 md:py-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-10">
        <div className="card-box">
          <h1 className="text-3xl font-bold">0</h1>
          <span className="text-white">new Task</span>
        </div>
        <div className="card-box">
          <h1 className="text-3xl font-bold">0</h1>
          <span className="text-white"></span>
        </div>
        <div className="card-box">
          <h1 className="text-3xl font-bold">0</h1>
          <span className="text-white">Lorem, ipsum.</span>
        </div>
        <div className="card-box">
          <h1 className="text-3xl font-bold">0</h1>
          <span className="text-white">Lorem, ipsum.</span>
        </div>
      </div>

      <TaskList />
    </section>
  );
}

export default EmployeeDashboard;
