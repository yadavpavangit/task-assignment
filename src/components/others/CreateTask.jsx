import { useContext } from "react";
import Select from "react-select";
import { AuthContext } from "../../context/AuthProvider";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function CreateTask() {
  const { employees } = useContext(AuthContext);
  const options = employees.map((emp) => ({
    value: emp.id,
    label: emp.firstName,
  }));

  return (
    <div className="max-w-lvw h-screen flex items-center justify-center px-8 my-20 md:my-30">
      <form className="bg-gray-800 p-8 rounded-lg w-200">
        <h2 className="text-2xl font-bold text-white mb-6">Create Task</h2>

        {/* Title */}
        <div className="mb-6">
          <label htmlFor="taskTitle" className="block text-white text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="taskTitle"
            placeholder="Make a UI design"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-white text-lg mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Describe the task"
            rows="4"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Date */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-white text-lg mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-green-500"
          />
        </div>

        {/* Assign To */}
        <div className="mb-6">
          <label htmlFor="assignTo" className="block text-white text-lg mb-2">
            Assign To
          </label>

          <Select
            id="assignTo"
            className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-green-500"
            options={options}
            placeholder="Select Employee"
          />
        </div>

        {/* Category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-white text-lg mb-2">
            Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-green-500"
          >
            <option value="">Select Category</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="testing">Testing</option>
            <option value="documentation">Documentation</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
