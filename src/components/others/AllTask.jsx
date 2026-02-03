import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const { employees } = useContext(AuthContext);
  const allTasks = employees.flatMap((emp) =>
    emp.tasks.map((task) => ({
      employeeName: emp.firstName,
      ...task,
    })),
  );
  return (
    <div className="mt-10 bg-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Tasks</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Employee Name</th>
              <th className="px-4 py-2 text-left">Task Name</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {allTasks.map((task, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-gray-600/40"
              >
                <td className="px-4 py-2">{task.employeeName}</td>
                <td className="px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.status.toUpperCase()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTask;
