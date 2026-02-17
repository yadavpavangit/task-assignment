import { useContext, useState } from "react";
import Select from "react-select";
import { AuthContext } from "../../context/AuthProvider";
import { setLocalStorage } from "../../utils/LocalStorage";
import { Bounce, toast } from "react-toastify";

function CreateTask() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    assignTo: null,
    category: "",
  });

  const { employees, addTaskToEmployee } = useContext(AuthContext);
  const options = employees.map((emp) => ({
    value: emp.id,
    label: emp.firstName,
  }));

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.assignTo) return alert("select employee");

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      date: formData.date,
      category: formData.category,
      status: "new",
    };

    addTaskToEmployee(formData.assignTo.value, newTask);

    setFormData({
      title: "",
      description: "",
      date: "",
      category: "",
      assignTo: null,
    });

    toast.success(`Task created, successfully! ${formData.assignTo.value}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="max-w-lvw flex items-center justify-center px-8 my-20 md:my-30">
      <form
        className="bg-gray-800 p-8 rounded-lg w-200"
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Create Task</h2>

        {/* Title */}
        <div className="mb-6">
          <label htmlFor="taskTitle" className="block text-white text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="taskTitle"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
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
            name="description"
            value={formData.description}
            onChange={handleInputChange}
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
            name="date"
            value={formData.date}
            onChange={handleInputChange}
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
            name="assignTo"
            value={formData.assignTo}
            onChange={(val) => setFormData({ ...formData, assignTo: val })}
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
            name="category"
            value={formData.category}
            onChange={handleInputChange}
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
          className="w-full bg-green-600 hover:bg-green-600/90 text-white font-bold py-2 px-4 rounded-lg transition active:scale-95"
        >
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
