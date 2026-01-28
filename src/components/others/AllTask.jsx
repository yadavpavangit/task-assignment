import React from "react";

function AllTask() {
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
          <tbody>{/* Add your task data mapping here */}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTask;
