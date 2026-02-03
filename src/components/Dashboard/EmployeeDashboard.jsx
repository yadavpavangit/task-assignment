import React, { useContext, useMemo } from "react";
import Header from "../others/Header";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";

function EmployeeDashboard() {
  const { employees, currentUser } = useContext(AuthContext);
  const employee = employees.find((e) => e.id === currentUser.id);
  const tasks = employee?.tasks || [];

  const counts = useMemo(() => {
    return {
      new: tasks.filter((task) => task.status === "new").length,
      active: tasks.filter((task) => task.status === "active").length,
      completed: tasks.filter((task) => task.status === "completed").length,
    };
  }, [tasks]);

  return (
    <section>
      <Header />
      <div className="w-full my-10 md:my-20 py-10 md:py-20 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-10">
        <Card title="New Task" value={counts.new} />
        <Card title="Accepted Task" value={counts.active} />
        <Card title="Completed Task" value={counts.completed} />
        <Card title="Total" value={tasks.length} />
      </div>

      <TaskList tasks={tasks} />
    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="card-box">
      <h1 className="text-3xl font-bold">{value}</h1>
      <span className="text-white">{title}</span>
    </div>
  );
}

export default EmployeeDashboard;
