import { useContext, useMemo } from "react";
import Header from "../others/Header";
import TaskList from "../TaskList/TaskList";
import { AuthContext } from "../../context/AuthProvider";
import { CheckCircle2, Zap, ListTodo } from "lucide-react";

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
      <div className="w-full my-10 md:my-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card
            icon={ListTodo}
            title="New Task"
            value={counts.new}
            color="blue"
          />
          <Card
            icon={Zap}
            title="Active Task"
            value={counts.active}
            color="yellow"
          />
          <Card
            icon={CheckCircle2}
            title="Completed"
            value={counts.completed}
            color="green"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700">
              <tr>
                <th className="px-6 py-4 text-left text-white font-semibold">
                  Task Category
                </th>
                <th className="px-6 py-4 text-center text-white font-semibold">
                  Count
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <TableRow label="New Tasks" value={counts.new} />
              <TableRow label="Active Tasks" value={counts.active} />
              <TableRow label="Completed Tasks" value={counts.completed} />
              <TableRow label="Total Tasks" value={tasks.length} isBold />
            </tbody>
          </table>
        </div>
      </div>

      <TaskList tasks={tasks} />
    </section>
  );
}

function Card({ icon: Icon, title, value, color }) {
  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    yellow: "from-yellow-500 to-yellow-600",
    green: "from-green-500 to-green-600",
  };

  return (
    <div
      className={`bg-gradient-to-br ${colorMap[color]} rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-90">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <Icon size={40} className="opacity-80" />
      </div>
    </div>
  );
}

function TableRow({ label, value, isBold }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 text-gray-700">
        <span
          className={isBold ? "font-semibold text-gray-900" : "font-medium"}
        >
          {label}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <span
          className={`inline-block px-3 py-1 rounded-full ${isBold ? "bg-gray-200 font-bold text-gray-900" : "bg-blue-100 text-blue-700 font-semibold"}`}
        >
          {value}
        </span>
      </td>
    </tr>
  );
}

export default EmployeeDashboard;
