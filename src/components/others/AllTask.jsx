import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Trash } from "lucide-react";
import { calculateTaskCount } from "../../utils/taskCount";

function AllTask() {
  console.log(useContext(AuthContext));
  const { employees } = useContext(AuthContext);
  const allTasks = employees.flatMap((emp) =>
    emp.tasks.map((task) => ({
      employeeName: emp.firstName,
      ...task,
    })),
  );
  console.log(allTasks);

  const handleCompletedTask = (employeeName, taskId) => {
    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName === employeeName) {
        const updatedTasks = emp.tasks.filter((task) => task.id !== taskId);

        return {
          ...emp,
          tasks: updatedTasks,
          taskCount: calculateTaskCount(updatedTasks),
        };
      }
      return emp;
    });
    console.log(updatedEmployees);
    // addTaskToEmployee()
    console.log("Task Deleted Successfully");
  };
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
                <td className="px-4 py-2">{task.status}</td>
                <td className="px-4 py-2 cursor-pointer">
                  <Trash
                    onClick={() =>
                      handleCompletedTask(task.employeeName, task.id)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTask;
