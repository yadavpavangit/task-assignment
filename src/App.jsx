import { useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  // console.log({ employees, admin });

  return (
    <>
      {!user && <Login />}
      {user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
